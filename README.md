# Manikanth Y — AV Presales & Solution Design Portfolio

Personal portfolio site built with React, TypeScript, Vite, Tailwind CSS v4 and Lucide icons.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build
npm run lint
```

## Editing content

All text comes from **`src/data/resume.ts`**, which is based on the resume PDF. Edit it there, not in the components.

- **Phone number:** set `profile.phone` to `null` to hide it.
- **LinkedIn:** set `profile.linkedin` to your profile URL to add it to the Contact section. It isn't in the resume, so it's hidden for now.
- **Resume PDF:** `public/Manikanth_Y_AV_Presales_Resume.pdf`. Replace the file and keep the same name, or update `profile.resumeUrl`.

## Contact form

No backend is configured. The form opens the visitor's email app with a pre-filled message (`mailto:`). To receive submissions directly, connect a form service such as Formspree, or your own endpoint, in `src/components/Contact.tsx`.

## Before deploying

Add `og:url` and `og:image` to `index.html` once the site has a public domain.

## Structure

```
src/
  data/        resume.ts (content), nav.ts
  hooks/       useActiveSection
  components/  Nav, Hero, About, Expertise, ExpertiseCard, Experience, Projects,
               ProjectCard, RoomGlyph, DesignShowcase, Certifications,
               ValueProposition, Contact, Footer, SectionHeading, Section,
               Reveal, Waveform, Spectrum
```

## Deploying

Pushing to `main` on GitHub runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages at `https://<username>.github.io/<repo>/`. If the first run fails at the Pages step, open **Settings → Pages** in the repo and set **Source** to **GitHub Actions**.
