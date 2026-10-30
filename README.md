# Healthy Bite — Smart Restaurant System

A React + TypeScript starter for the Healthy Bite restaurant workflow.

## Included
- Customer menu and meal customization
- Add/remove/increase/decrease ingredient portions
- Split a meal into two independently customizable halves
- Cart with live price calculation
- Table-aware ordering via `?table=01` QR links
- Kitchen order board with status updates
- Admin screen for menu/ingredient editing (demo/local state)
- Supabase SQL schema and optional client setup

## Run locally
1. Install Node.js 20 or later.
2. Copy `.env.example` to `.env` and fill in Supabase values if using Supabase.
3. Run `npm install`
4. Run `npm run dev`

The app runs in demo mode without Supabase; orders/menu edits are held in browser memory and reset on refresh.
For real multi-device restaurant use, connect Supabase and implement authenticated server-side admin access before deployment.

## QR codes
Create a QR code for each table pointing to your deployed address, e.g.
`https://YOUR-DOMAIN.com/?table=01`
The app reads the `table` query parameter automatically. Use unique table numbers.

## Important before launch
- Replace sample menu and prices in `src/data/menu.ts`.
- Add your real photos and update image paths.
- Configure Supabase URL/key and apply `supabase/schema.sql`.
- Add Supabase Row Level Security policies and proper admin authentication.
- Set local currency and tax/service-charge rules as required.
- Test kitchen workflow on the actual devices and network.
