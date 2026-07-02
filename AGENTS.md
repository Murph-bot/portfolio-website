# Portfolio Website

A single-service Next.js 15 (App Router) portfolio site using Tailwind CSS v4 and Framer Motion. All content lives in `src/data/*.ts`; sections/components are in `src/components/`.

## Cursor Cloud specific instructions

- Single service. Standard commands are in `package.json`: `npm run dev` (dev server on `http://localhost:3000`), `npm run build`, `npm run lint`. There is no test suite.
- Dependencies are already installed by the startup update script (`npm install`); no extra setup is needed to run the app.
- Contact form (`src/components/Contact.tsx`) uses **Netlify Forms**, which is a Netlify platform feature processed at deploy time. Form submission does NOT succeed under local `npm run dev`: it POSTs to the static `public/__forms.html`, and the dev server returns HTTP 405. This is expected — a successful submission only happens on a deployed Netlify site with Forms enabled. Do not treat the local 405 as a bug.
- `npx netlify-cli dev` (proxy on `http://localhost:8888`, runs Next on port 3000) can be used for a closer-to-Netlify local environment, but it still does not fully emulate Netlify Forms submission handling (POST to `__forms.html` still returns 405). Prefer plain `npm run dev` for local development.
