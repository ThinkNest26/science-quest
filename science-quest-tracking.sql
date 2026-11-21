-- Science Quest: tracking science knowledge (curriculum objectives) and reading.
-- Run this once in Supabase (SQL Editor). It is safe to run again.

-- 1. somewhere to keep each child's results for every objective, and for every story they read
alter table public.sq_progress add column if not exists skills  jsonb not null default '{}'::jsonb;
alter table public.sq_progress add column if not exists reading jsonb not null default '{}'::jsonb;

-- 2. sign-in now also returns those results
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
    'skills', p.skills, 'reading', p.reading);
end $$;

-- 3. save one objective's result or one story's reading result
create or replace function public.sq_track(p_code text, p_part text, p_key text, p_val jsonb) returns json
language plpgsql security definer set search_path = public as $$
declare k public.sq_students; key text := left(coalesce(p_key,''), 60);
begin
  k := public.sq_kid(p_code);
  if k.id is null or key = '' or p_val is null or octet_length(p_val::text) > 1500 or p_part not in ('skills','reading') then return null; end if;
  insert into public.sq_progress(student_id) values (k.id) on conflict do nothing;
  if p_part = 'skills' then
    update public.sq_progress set skills = skills || jsonb_build_object(key, p_val), updated_at = now() where student_id = k.id;
  else
    update public.sq_progress set reading = reading || jsonb_build_object(key, p_val), updated_at = now() where student_id = k.id;
  end if;
  return json_build_object('ok', true);
end $$;

grant execute on function public.sq_login(text), public.sq_track(text,text,text,jsonb) to anon, authenticated;
notify pgrst, 'reload schema';
