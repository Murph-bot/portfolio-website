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
3. Deploy — the included `netlify.toml` handles the build
4. Submit the contact form once and confirm the FormSubmit activation email

Or deploy manually:

```bash
npx netlify deploy --prod
```

## Contact Form

The contact form posts via [FormSubmit](https://formsubmit.co) and emails messages to the address in `src/data/site.ts`. On first use, FormSubmit sends a one-time activation email — confirm it before live submissions work.
