-- Apply in Supabase SQL editor. Add RLS policies before production.
create extension if not exists pgcrypto;
create table if not exists public.meals (
 id text primary key, name text not null, category text not null, description text,
 image_url text, base_price numeric(10,2) not null default 0, is_available boolean not null default true
);
create table if not exists public.ingredients (
 id text primary key, name text not null, unit_price numeric(10,2) not null default 0,
 default_qty integer not null default 0, max_qty integer not null default 4, removable boolean not null default true
);
create table if not exists public.meal_ingredients (
 meal_id text references public.meals(id) on delete cascade,
 ingredient_id text references public.ingredients(id) on delete cascade,
 primary key(meal_id, ingredient_id)
);
create table if not exists public.restaurant_tables (
 table_number text primary key, qr_url text, is_active boolean not null default true
);
create table if not exists public.orders (
 id uuid primary key default gen_random_uuid(), table_number text not null,
 status text not null default 'New' check(status in ('New','Preparing','Ready','Completed')),
 total numeric(10,2) not null, payment_method text not null default 'At cashier',
 customer_note text, created_at timestamptz not null default now()
);
create table if not exists public.order_items (
 id uuid primary key default gen_random_uuid(), order_id uuid references public.orders(id) on delete cascade,
 meal_id text, meal_name text not null, quantity integer not null default 1,
 customization jsonb not null default '{}'::jsonb, unit_price numeric(10,2) not null
);
-- Production security checklist:
-- 1) Enable RLS on every table.
-- 2) Public users may read available menu and create orders only.
-- 3) Only authenticated staff/admin may read all orders or update order status/menu.
-- 4) Never put the Supabase service_role key in browser code.
