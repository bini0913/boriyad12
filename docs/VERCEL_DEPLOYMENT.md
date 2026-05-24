# Vercel deployment checklist (Boriyad CMS)

This project is ready to deploy on **Vercel + Supabase** for the public website and premium admin CMS.

## 1) Vercel project settings

- Framework preset: **Next.js**
- Build command: `npm run build`
- Output directory: `.next` (default)
- Install command: `npm install`
- Node version: **20.x** (recommended)

## 2) Environment variables (Vercel)

Add these in **Project → Settings → Environment Variables** for both **Production** and **Preview**:

- `NEXT_PUBLIC_SITE_URL` → your exact Vercel URL/domain (e.g. `https://school.example.com`)
- `NEXT_PUBLIC_SUPABASE_URL` → Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` → Supabase anon key
- `SUPABASE_SERVICE_ROLE_KEY` → Supabase service role key (server-only)
- `NEXT_PUBLIC_MANAGER_PHOTO_URL` (optional)

> Important: `SUPABASE_SERVICE_ROLE_KEY` must never be exposed in client code.

## 3) Supabase configuration

Run migrations:

1. `supabase/migrations/001_initial.sql`
2. `supabase/migrations/002_applications.sql`

In Supabase Auth URL configuration:

- Site URL: your production domain
- Redirect URLs:
  - `https://your-domain.vercel.app/**`
  - custom domain variant if used

## 4) Post-deploy verification

- Public site loads on `/en`, `/om`, `/am`
- `/admin-login` loads and can sign in
- Protected admin routes redirect to login when unauthenticated
- `/admin/admissions` lists applications
- `/admin/news`, `/admin/media`, `/admin/leadership`, `/admin/social`, `/admin/content`, `/admin/roles` load successfully

## 5) Notes for operations

- Legacy route `/admin/applications` is preserved and redirects to `/admin/admissions`.
- For production performance and media workflow, connect admin media/news modules to Supabase Storage buckets.
