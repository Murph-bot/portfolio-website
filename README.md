# Portfolio Website

A modern, minimal personal portfolio built with Next.js, Tailwind CSS, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to preview the site.

## Customize Content

Edit the files in `src/data/`:

- `site.ts` — name, bio, social links, email
- `experience.ts` — work history
- `projects.ts` — your projects
- `courses.ts` — completed courses and certifications

Replace `public/resume.pdf` with your actual resume.

## Deploy to Netlify

1. Push this project to GitHub
2. Connect the repo in Netlify (or run `npx netlify deploy --prod`)
3. In Netlify: **Project configuration → Forms** — ensure form detection is on
4. In Netlify: **Project configuration → Notifications** — add an email notification for form submissions to your inbox

## Contact Form

The contact form uses **Netlify Forms**. A static skeleton lives at `public/__forms.html` so Netlify can detect the form at build time. Submissions appear in the Netlify Forms dashboard and can be forwarded by email notification.
