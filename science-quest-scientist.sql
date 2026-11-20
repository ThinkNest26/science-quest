-- Science Quest: "My Scientist" characters and the equipment shop.
-- Run this once in Supabase (SQL Editor) after science-quest-codes.sql. It is safe to run again.

-- 1. somewhere to keep each child's scientist and the things they have bought
alter table public.sq_progress add column if not exists look jsonb not null default '{}'::jsonb;

-- 2. sign-in now also returns the child's scientist
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
    'badges', p.badges, 'stars', p.stars, 'hands', p.hands, 'journal', p.journal, 'look', p.look);
end $$;

-- 3. save the child's scientist (what they look like, what they own, what they are using)
create or replace function public.sq_look(p_code text, p_look jsonb) returns json
language plpgsql security definer set search_path = public as $$
declare k public.sq_students;
begin
  k := public.sq_kid(p_code);
  if k.id is null or p_look is null or jsonb_typeof(p_look) <> 'object' or octet_length(p_look::text) > 6000 then return null; end if;
  insert into public.sq_progress(student_id) values (k.id) on conflict do nothing;
  update public.sq_progress set look = p_look, updated_at = now() where student_id = k.id;
  return json_build_object('ok', true);
end $$;

grant execute on function public.sq_login(text), public.sq_look(text,jsonb) to anon, authenticated;
notify pgrst, 'reload schema';
