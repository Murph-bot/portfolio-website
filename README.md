# Portfolio Website

A modern, minimalistic personal portfolio built with Next.js, Tailwind CSS, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to preview the site.

## Customize Content

Edit the files in `src/data/`:

- `site.ts` — name, bio, social links, email
- `projects.ts` — your projects
- `websites.ts` — websites you've built
- `courses.ts` — completed courses and certifications

Replace `public/resume.pdf` with your actual resume.

## Deploy to Netlify

1. Push this project to GitHub
2. Connect the repo in Netlify
3. Enable **Forms** in the Netlify dashboard
4. Deploy — the included `netlify.toml` handles the build

Or deploy manually:

```bash
npx netlify deploy --prod
```

## Contact Form

The contact form uses Netlify Forms. A static skeleton lives at `public/__forms.html` so Netlify can detect the form at build time. Submissions appear in your Netlify dashboard once Forms is enabled.
