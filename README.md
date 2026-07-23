# Personal Portfolio

A minimal, premium personal portfolio built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser.

To build for production:

```bash
npm run build
npm run preview
```

## Customizing

All editable content lives in `src/data/`:

- `profile.ts` — name, role, bio, availability, email, social links, nav labels
- `skills.ts` — skill badges grouped by category
- `projects.ts` — featured project cards (title, description, tags, image, links)
- `experience.ts` — work history timeline

Swap these files out with your own information — no need to touch the component code.

### Theme colors

Colors, fonts, and spacing tokens live in `tailwind.config.ts`. The palette is neutral
(white/black/gray) with a single blue accent (`accent`), used consistently across both
light and dark mode.

### Contact form

`src/components/sections/Contact.tsx` includes client-side validation and a simulated
submit. Wire the `handleSubmit` function up to your own backend, a form service like
Formspree or Resend, or an API route.

## Structure

```
src/
  components/
    layout/     Navbar, Footer, ScrollToTop, ThemeToggle
    ui/         Button, Badge, Container, SectionHeading (reusable primitives)
    sections/   Hero, About, Skills, Projects, Experience, Contact
    ProjectCard.tsx, TimelineItem.tsx
  context/      ThemeContext (light/dark mode, persisted to localStorage)
  data/         Editable content (profile, skills, projects, experience)
  hooks/        useActiveSection, useScrollPosition
  types/        Shared TypeScript interfaces
```

## Features

- Sticky, blurred navbar with animated active-section indicator
- Smooth scrolling with in-view scroll-spy
- Dot-grid canvas in the hero that responds to cursor movement
- Light/dark mode, persisted and flash-free on load
- Scroll-triggered reveal animations (Framer Motion, respects reduced-motion)
- Validated contact form with inline error states
- Scroll-to-top button, mobile nav drawer
- Fully responsive, accessible (keyboard focus states, semantic landmarks, alt text)
