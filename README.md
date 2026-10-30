# Healthy Bite

React + TypeScript + Vite application prepared for GitHub Pages.

## GitHub Pages deployment

This project is configured for this repository:

`https://github.com/savitar-22/Healthy-bite`

Expected website address:

`https://savitar-22.github.io/Healthy-bite/`

### Upload the project

1. Open the `savitar-22/Healthy-bite` repository on GitHub.
2. Replace the old project files with **all** files and folders from this ZIP.
3. Keep the folder structure. In particular, upload `src/` and `.github/workflows/deploy.yml`.
4. Commit the changes to the `main` branch.

### Enable GitHub Pages

1. Open the repository's **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Open the **Actions** tab and wait for **Deploy Healthy Bite to GitHub Pages** to finish successfully.
4. Visit `https://savitar-22.github.io/Healthy-bite/`.

Every new push to `main` will trigger a new deployment automatically.

## Run locally

```bash
npm install
npm run dev
```

## Build locally

```bash
npm run build
npm run preview
```

## Supabase

The `supabase/schema.sql` file contains the starter database schema. The website will not have cross-device order persistence or live synchronization until a Supabase project is configured, its schema is applied, and the required environment variables and security policies are set.

Do not commit real API keys or secrets to this public repository. Use GitHub Actions secrets or a secure backend for private credentials.
