-- Science Quest: peer challenges (a child challenges a classmate to the same science questions).
-- Run this once in Supabase (SQL Editor) after science-quest-tracking.sql. It is safe to run again.

-- 1. the challenges
create table if not exists public.sq_duels (
  id uuid primary key default gen_random_uuid(),
  class_id uuid not null references public.sq_classes(id) on delete cascade,
  a uuid not null references public.sq_students(id) on delete cascade,   -- the child who sent the challenge
  b uuid not null references public.sq_students(id) on delete cascade,   -- the classmate who was challenged
  grade text not null,
  topic text not null,
  qids jsonb not null,                 -- the questions both children answer
  a_score int not null, a_ms int not null,
  b_score int, b_ms int,
  created_at timestamptz not null default now(),
  done_at timestamptz
);
create index if not exists sq_duels_a on public.sq_duels(a);
create index if not exists sq_duels_b on public.sq_duels(b);
alter table public.sq_duels enable row level security;

-- teachers can see the challenges in their own classes
drop policy if exists sq_duels_own on public.sq_duels;
create policy sq_duels_own on public.sq_duels for select to authenticated
  using (exists (select 1 from public.sq_classes c where c.id = class_id and c.teacher_id = auth.uid()));

-- 2. how many challenges a child has finished and won (for coins)
create or replace function public.sq_duel_stats(p_id uuid) returns json
language sql stable security definer set search_path = public as $$
  select json_build_object(
    'p', count(*) filter (where b_score is not null),
    'w', count(*) filter (where b_score is not null and (
           (a = p_id and (a_score > b_score or (a_score = b_score and a_ms < b_ms))) or
           (b = p_id and (b_score > a_score or (b_score = a_score and b_ms < a_ms))))))
  from public.sq_duels where a = p_id or b = p_id
$$;

-- 3. sign-in also returns challenge results
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
    'badges', p.badges, 'stars', p.stars, 'hands', p.hands, 'journal', p.journal, 'look', p.look,
    'skills', p.skills, 'reading', p.reading, 'duel', public.sq_duel_stats(k.id));
end $$;

-- 4. the classmates a child can challenge (first names only)
create or replace function public.sq_classmates(p_code text) returns json
language plpgsql security definer set search_path = public as $$
declare k public.sq_students;
begin
  k := public.sq_kid(p_code); if k.id is null then return null; end if;
  return coalesce((select json_agg(json_build_object('id', s.id, 'name', s.first_name) order by s.first_name)
                   from public.sq_students s where s.class_id = k.class_id and s.id <> k.id), '[]'::json);
end $$;

-- 5. send a challenge (the sender has already answered the questions)
create or replace function public.sq_duel_new(p_code text, p_opp uuid, p_topic text, p_qids jsonb, p_score int, p_ms int) returns json
language plpgsql security definer set search_path = public as $$
declare k public.sq_students; o public.sq_students; open_n int; d uuid;
begin
  k := public.sq_kid(p_code); if k.id is null then return null; end if;
  select * into o from public.sq_students where id = p_opp;
  if o.id is null or o.class_id <> k.class_id or o.id = k.id then return json_build_object('error','classmate'); end if;
  if jsonb_typeof(p_qids) <> 'array' or jsonb_array_length(p_qids) < 1 or jsonb_array_length(p_qids) > 12 then return json_build_object('error','questions'); end if;
  select count(*) into open_n from public.sq_duels where a = k.id and b_score is null;
  if open_n >= 10 then return json_build_object('error','too many'); end if;
  insert into public.sq_duels(class_id, a, b, grade, topic, qids, a_score, a_ms)
    values (k.class_id, k.id, o.id, k.grade, left(coalesce(p_topic,''), 40), p_qids,
            least(greatest(coalesce(p_score,0),0), jsonb_array_length(p_qids)), greatest(coalesce(p_ms,0),0))
    returning id into d;
  return json_build_object('ok', true, 'id', d);
end $$;

-- 6. answer a challenge you were sent (only once)
create or replace function public.sq_duel_play(p_code text, p_id uuid, p_score int, p_ms int) returns json
language plpgsql security definer set search_path = public as $$
declare k public.sq_students; d public.sq_duels;
begin
  k := public.sq_kid(p_code); if k.id is null then return null; end if;
  select * into d from public.sq_duels where id = p_id;
  if d.id is null or d.b <> k.id or d.b_score is not null then return json_build_object('error','not yours'); end if;
  update public.sq_duels set b_score = least(greatest(coalesce(p_score,0),0), jsonb_array_length(d.qids)), b_ms = greatest(coalesce(p_ms,0),0), done_at = now() where id = p_id;
  return json_build_object('ok', true, 'duel', public.sq_duel_stats(k.id));
end $$;

-- 7. a child's challenges (newest first); a classmate's score stays hidden until you have played
create or replace function public.sq_duel_list(p_code text) returns json
language plpgsql security definer set search_path = public as $$
declare k public.sq_students;
begin
  k := public.sq_kid(p_code); if k.id is null then return null; end if;
  return coalesce((select json_agg(x order by x.created_at desc) from (
    select d.id, d.topic, d.grade, d.qids, d.created_at, (d.a = k.id) as mine,
           sa.first_name as a_name, sb.first_name as b_name,
           d.a_ms, d.b_ms, d.b_score,
           case when d.a = k.id or d.b_score is not null then d.a_score else null end as a_score
      from public.sq_duels d join public.sq_students sa on sa.id = d.a join public.sq_students sb on sb.id = d.b
     where d.a = k.id or d.b = k.id
     order by d.created_at desc limit 30) x), '[]'::json);
end $$;

grant execute on function public.sq_login(text), public.sq_classmates(text), public.sq_duel_new(text,uuid,text,jsonb,int,int),
  public.sq_duel_play(text,uuid,int,int), public.sq_duel_list(text) to anon, authenticated;
grant select on public.sq_duels to authenticated;
notify pgrst, 'reload schema';
