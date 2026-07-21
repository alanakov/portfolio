# Portfolio — Alana Kovalski

React + TypeScript + Vite, styled with Tailwind CSS v4.

## Scripts

```bash
npm install
npm run dev       # local dev server
npm run build     # type-check (tsc -b) + production build
npm run lint      # eslint
npm run preview   # preview the production build
```

> **Importante:** nunca versione/zipe `node_modules`. Binários nativos (Rollup,
> Lightning CSS) são específicos de plataforma — rode sempre `npm install`
> fresco na máquina onde o projeto vai rodar.

## Architecture

The app follows a layered structure — each layer only knows about the one
below it:

```
UI (components)  →  Hooks  →  Services  →  external APIs
                        ↓
                 Utils / Data / Types
```

```
src/
├── app/            # App composition root (App.tsx)
├── components/
│   ├── ui/          Design-system primitives (Button, Badge, IconButton…)
│   ├── layout/       Page chrome (Navbar, Footer, MobileMenu, Page…)
│   ├── sections/    One component per landing-page section (Hero, Contact…)
│   ├── cards/        Grid/list item cards (ProjectCard, TechCard)
│   ├── forms/        Form-specific pieces (ContactField, ContactForm)
│   └── common/       Cross-cutting visual helpers (Reveal, ScanlineOverlay)
├── hooks/          Reusable business/UI logic (useContactForm, useProjects…)
├── services/       External communication (contactService → EmailJS)
├── data/           Static content (projects, technologies, languages)
├── constants/      Site config, navigation, EmailJS credentials
├── config/         Third-party library setup (i18n.ts)
├── types/          Shared TypeScript types (barrel-exported from types/index.ts)
├── lib/            Small framework-agnostic helpers (cn — class merging)
├── utils/          Plain utility functions (scrollToSection)
├── styles/         Global CSS (Tailwind v4 theme + base layer)
└── locales/        i18next translation files (pt, en)
```

### Why this split

- **Components only render.** Section components (`components/sections`)
  compose hooks + presentational pieces; they don't hold validation logic,
  fetch/merge data, or talk to external APIs directly.
- **Hooks hold the logic.** e.g. `useContactForm` owns all form state,
  validation and the submit flow; `useProjects` merges structural project
  data with the active locale's translations; `useNavbar` composes
  scroll-tracking with mobile-menu state.
- **Services isolate external communication.** `contactService.ts` is the
  only place that knows *how* a message is sent (EmailJS today — could be
  swapped without touching any component or hook signature).
- **`data/` vs `constants/`:** `data/` holds content that maps 1:1 to
  something rendered in a list (projects, tech stack, language options).
  `constants/` holds site-wide configuration values (section ids, nav
  links, EmailJS credentials), split by concern instead of one catch-all
  `site.ts`.

### Deliberate non-changes

A few things from the "ideal" folder list in the brief were intentionally
**not** adopted, to avoid manufacturing structure with no real benefit:

- **No separate `interfaces/` folder.** Component prop types stay next to
  their component (`interface FooProps` inside `Foo.tsx`) — that's the
  idiomatic React/TS convention, and splitting them out would hurt
  readability without adding decoupling (props types aren't shared).
- **No `animations/` folder.** Animation in this project is pure CSS
  (`@keyframes` + Tailwind's `--animate-*` theme tokens in
  `styles/global.css`), not JS-driven — there's no orchestration logic to
  extract into its own layer.
- **Images stay in `public/assets`**, not `src/assets`. They're referenced
  by plain string paths (data files, `<img src>`), which is the correct
  Vite pattern for a static, unprocessed asset set of this size; importing
  each one would add churn with no behavioural upside.
- **`tailwind.config.js` was removed** (not migrated) — Tailwind v4 is
  configured CSS-first via `@theme` in `styles/global.css`; the old config
  file wasn't loaded by anything (confirmed by an unchanged build output
  after deleting it) and was dead weight.
