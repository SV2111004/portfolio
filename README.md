# Shubhra Varshney — Developer Portfolio

A premium, animation-rich developer portfolio built with React, TypeScript,
Tailwind CSS v4, Framer Motion, Lenis, and GSAP.

## Design direction

The palette is pulled from your own photo rather than a stock "dev portfolio
purple": deep ink background, a teal accent from the courtyard bench, mustard
from the planter, and terracotta from the brick jali wall. The recurring
lattice-grid motif in the background is a nod to that same jali pattern.
Type pairs a serif display face (Fraunces) for headlines with monospace
(JetBrains Mono) for labels/data, echoing a code-editor feel without leaning
on generic sans-everywhere.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Project structure

```
src/
  assets/images/       your photo (already wired into Hero)
  components/          reusable UI: Nav, CustomCursor, MagneticButton,
                        TiltCard, Reveal, AmbientBackground, ProjectCard,
                        AnimatedCounter, BrandIcons, Footer, Eyebrow
  data/                 all your content lives here — edit these, not the JSX
    skills.ts            skills grouped by category (already filled from your table)
    projects.ts           project write-ups (Lorem ipsum placeholders)
    misc.ts               coding profiles, achievements, education, nav links, socials
  hooks/                useLenis (smooth scroll), useReducedMotion
  sections/             Hero, About, Skills, CodingProfiles, Projects,
                        Achievements, Contact
```

## Replacing placeholder content — everything lives in `src/data`

- **Photo**: already using your uploaded photo at
  `src/assets/images/profile.jpg`. Swap the file (keep the same name, or
  update the import in `src/sections/Hero.tsx`) to change it.
- **Skills**: `src/data/skills.ts` — already populated from your skills table.
  Add/remove entries in each category's `skills` array; the node graph
  in the Skills section lays itself out automatically.
- **Projects**: `src/data/projects.ts` — replace `problem` / `solution` /
  `architecture` / `challenges` / `learnings` strings, and set `demoUrl`,
  `githubUrl`. Drop screenshot URLs into `screenshots: []` and they'll
  appear in the horizontal carousel automatically.
- **Coding profiles, achievements, nav, socials**: `src/data/misc.ts`.
  Update `codingProfiles[].stats` with real numbers — the dashboard cards
  animate-count on scroll automatically. Update `socialLinks` with your
  real GitHub/LinkedIn/email/resume URLs (resume can point to a PDF in
  `public/`).
- **About copy**: currently Lorem ipsum in `src/sections/About.tsx` —
  replace the paragraph and the three facet blurbs directly (kept inline
  since it's prose you'll rewrite once, not repeating data).
- **Education**: `src/data/misc.ts` → `education` array — already set to
  JIIT Noida, B.Tech CSE, 2023–2027, 9.3 CGPA. Add another entry (e.g.
  school/12th) if you want more than one card; each renders with an
  animated score tile.

## Notes

- `prefers-reduced-motion` is respected globally (Lenis smooth-scroll and
  CSS animations both back off).
- The custom cursor and cursor-hover ring disable themselves on touch/mobile.
- Images are lazy by default via the browser; keep new screenshots under
  ~200KB (JPEG, quality ~85) to keep Lighthouse happy — the profile photo
  was already compressed from 1.1MB to ~150KB this way.
- Section IDs (`#hero`, `#about`, `#skills`, `#profiles`, `#projects`,
  `#achievements`, `#contact`) drive both the nav scroll-spy and smooth
  scrolling — keep them if you reorder sections.
