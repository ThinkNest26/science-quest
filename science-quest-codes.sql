-- =====================================================================
--  SCIENCE QUEST: student codes, badges, challenge stars and journals
--  Paste ALL of this into Supabase → SQL Editor → New query → Run.
--  Uses the same Supabase project as Maths Quest and Spelling Bee.
--  Everything is prefixed sq_ so nothing else is touched.
--  Safe to run more than once.
-- =====================================================================

create table if not exists public.sq_classes (
  id uuid primary key default gen_random_uuid(),
  teacher_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  name text not null,
  grade text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.sq_students (
  id uuid primary key default gen_random_uuid(),
  class_id uuid not null references public.sq_classes(id) on delete cascade,
  teacher_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  first_name text not null,
  grade text not null,
  code text not null unique,
  created_at timestamptz not null default now()
);

create table if not exists public.sq_progress (
  student_id uuid primary key references public.sq_students(id) on delete cascade,
  badges  jsonb not null default '{}'::jsonb,   -- story id  -> date earned
  stars   jsonb not null default '{}'::jsonb,   -- challenge key -> best stars (0-3)
  hands   jsonb not null default '{}'::jsonb,   -- hands-on key -> date done
  journal jsonb not null default '[]'::jsonb,   -- list of journal entries
  updated_at timestamptz not null default now()
);

create table if not exists public.sq_login_tries (
  id bigserial primary key,
  code text,
  at timestamptz not null default now()
);

alter table public.sq_classes     enable row level security;
alter table public.sq_students    enable row level security;
alter table public.sq_progress    enable row level security;
alter table public.sq_login_tries enable row level security;

-- teachers only ever see their own classes, children and progress
drop policy if exists sq_classes_own on public.sq_classes;
create policy sq_classes_own on public.sq_classes for all to authenticated
  using (teacher_id = auth.uid()) with check (teacher_id = auth.uid());

drop policy if exists sq_students_own on public.sq_students;
create policy sq_students_own on public.sq_students for all to authenticated
  using (teacher_id = auth.uid()) with check (teacher_id = auth.uid());

drop policy if exists sq_progress_own on public.sq_progress;
create policy sq_progress_own on public.sq_progress for select to authenticated
  using (exists (select 1 from public.sq_students s where s.id = student_id and s.teacher_id = auth.uid()));

-- ---------------------------------------------------------------------
-- helpers
-- ---------------------------------------------------------------------
create or replace function public.sq_clean(p text) returns text
language sql immutable as $$ select upper(regexp_replace(coalesce(p,''), '[^A-Za-z0-9]', '', 'g')) $$;

create or replace function public.sq_kid(p_code text) returns public.sq_students
language sql stable security definer set search_path = public as $$
  select * from public.sq_students where code = public.sq_clean(p_code) limit 1
$$;

create or replace function public.sq_new_code() returns text
language plpgsql security definer set search_path = public as $$
declare a text := 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'; c text; i int;
begin
  loop
    c := '';
    for i in 1..6 loop c := c || substr(a, 1 + floor(random() * length(a))::int, 1); end loop;
    exit when not exists (select 1 from public.sq_students where code = c);
  end loop;
  return c;
end $$;

-- ---------------------------------------------------------------------
-- child: sign in with a code
-- ---------------------------------------------------------------------
create or replace function public.sq_login(p_code text) returns json
language plpgsql security definer set search_path = public as $$
declare k public.sq_students; p public.sq_progress; c public.sq_classes; n int;
begin
  select count(*) into n from public.sq_login_tries
   where at > now() - interval '10 minutes' and code is not null;
  if n > 40 then return json_build_object('error','wait'); end if;
  k := public.sq_kid(p_code);
  if k.id is null then
    insert into public.sq_login_tries(code) values (left(public.sq_clean(p_code), 12));
    return null;
  end if;
  insert into public.sq_progress(student_id) values (k.id) on conflict do nothing;
  select * into p from public.sq_progress where student_id = k.id;
  select * into c from public.sq_classes where id = k.class_id;
  return json_build_object('name', k.first_name, 'grade', k.grade, 'class', c.name,
    'badges', p.badges, 'stars', p.stars, 'hands', p.hands, 'journal', p.journal);
end $$;

-- ---------------------------------------------------------------------
-- child: save a badge, challenge stars or a finished hands-on task
-- p_part is 'badges', 'stars' or 'hands'
-- ---------------------------------------------------------------------
create or replace function public.sq_save(p_code text, p_part text, p_key text, p_val jsonb) returns json
language plpgsql security definer set search_path = public as $$
declare k public.sq_students; key text := left(coalesce(p_key,''), 60); old jsonb;
begin
  k := public.sq_kid(p_code);
  if k.id is null or key = '' or p_part not in ('badges','stars','hands') then return null; end if;
  insert into public.sq_progress(student_id) values (k.id) on conflict do nothing;
  if p_part = 'badges' then
    update public.sq_progress set badges = badges || jsonb_build_object(key, coalesce(badges->key, p_val)), updated_at = now() where student_id = k.id;
  elsif p_part = 'hands' then
    update public.sq_progress set hands = hands || jsonb_build_object(key, coalesce(hands->key, p_val)), updated_at = now() where student_id = k.id;
  else
    select stars->key into old from public.sq_progress where student_id = k.id;
    if old is null or (old #>> '{}')::int < least(3, greatest(0, (p_val #>> '{}')::int)) then
      update public.sq_progress set stars = stars || jsonb_build_object(key, least(3, greatest(0, (p_val #>> '{}')::int))), updated_at = now() where student_id = k.id;
    end if;
  end if;
  return json_build_object('ok', true);
end $$;

-- ---------------------------------------------------------------------
-- child: add or remove a journal entry (newest first, up to 200)
-- ---------------------------------------------------------------------
create or replace function public.sq_journal_add(p_code text, p_entry jsonb) returns json
language plpgsql security definer set search_path = public as $$
declare k public.sq_students; e jsonb;
begin
  k := public.sq_kid(p_code);
  if k.id is null then return null; end if;
  e := jsonb_build_object(
    'id',    left(coalesce(p_entry->>'id', md5(random()::text)), 40),
    'at',    to_char(now(), 'YYYY-MM-DD'),
    'title', left(coalesce(p_entry->>'title',''), 120),
    'q',     left(coalesce(p_entry->>'q',''), 300),
    'guess', left(coalesce(p_entry->>'guess',''), 600),
    'found', left(coalesce(p_entry->>'found',''), 1200));
  insert into public.sq_progress(student_id) values (k.id) on conflict do nothing;
  update public.sq_progress
     set journal = (select coalesce(jsonb_agg(x), '[]'::jsonb) from (
                      select e as x
                      union all
                      select y from jsonb_array_elements(journal) y limit 199) t),
         updated_at = now()
   where student_id = k.id;
  return e;
end $$;

create or replace function public.sq_journal_del(p_code text, p_id text) returns json
language plpgsql security definer set search_path = public as $$
declare k public.sq_students;
begin
  k := public.sq_kid(p_code);
  if k.id is null then return null; end if;
  update public.sq_progress
     set journal = (select coalesce(jsonb_agg(y), '[]'::jsonb) from jsonb_array_elements(journal) y where y->>'id' <> p_id),
         updated_at = now()
   where student_id = k.id;
  return json_build_object('ok', true);
end $$;

-- ---------------------------------------------------------------------
-- teacher: add children to a class (one name per array item)
-- ---------------------------------------------------------------------
create or replace function public.sq_add_students(p_class uuid, p_names text[]) returns setof public.sq_students
language plpgsql security definer set search_path = public as $$
declare c public.sq_classes; nm text;
begin
  select * into c from public.sq_classes where id = p_class and teacher_id = auth.uid();
  if c.id is null then raise exception 'not your class'; end if;
  foreach nm in array p_names loop
    nm := left(trim(nm), 40);
    if nm <> '' then
      return query insert into public.sq_students(class_id, teacher_id, first_name, grade, code)
        values (c.id, auth.uid(), nm, c.grade, public.sq_new_code()) returning *;
    end if;
  end loop;
end $$;

create or replace function public.sq_new_code_for(p_student uuid) returns text
language plpgsql security definer set search_path = public as $$
declare c text := public.sq_new_code();
begin
  update public.sq_students set code = c where id = p_student and teacher_id = auth.uid();
  if not found then raise exception 'not your student'; end if;
  return c;
end $$;

revoke all on function public.sq_new_code() from public, anon, authenticated;
grant execute on function public.sq_login(text), public.sq_save(text,text,text,jsonb),
  public.sq_journal_add(text,jsonb), public.sq_journal_del(text,text) to anon, authenticated;
grant execute on function public.sq_add_students(uuid,text[]), public.sq_new_code_for(uuid) to authenticated;
