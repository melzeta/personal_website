# Personal Portfolio Website

This repository contains a React single-page portfolio site built with Vite and Tailwind CSS. It presents Melissa's profile, skills, selected projects, and contact details through a small routed application with a retro/pixel visual style, theme switching, optional UI sound effects, and animated decorative backgrounds.

## Stack

- React 18
- Vite 6
- TypeScript
- Tailwind CSS 4
- React Router
- Lucide icons
- Embla Carousel
- Radix/shadcn UI primitives are present in the repo, though the current portfolio pages use only a small portion of them directly

## Scripts

- `npm install`: install dependencies
- `npm run dev`: start the Vite dev server on port `3000`
- `npm run build`: create a production build in `build/`

## High-Level Architecture

The application is a client-rendered SPA.

1. `src/main.tsx` mounts the React app.
2. `src/App.tsx` wraps the router with three global providers:
   - `ThemeProvider`: manages day/night mode and persists it in `localStorage`
   - `SoundProvider`: exposes synthesized UI sound effects via the Web Audio API
   - `BlossomProvider`: controls whether falling cherry blossom petals are shown
3. `src/routes.tsx` defines the route tree with a shared `Layout` and five pages:
   - `/`
   - `/about`
   - `/skills`
   - `/projects`
   - `/contact`
4. `src/components/Layout.tsx` renders global overlays and controls:
   - theme toggle
   - sound toggle
   - petals toggle
   - night-mode stars
   - petal animation layer

## Project Structure

```text
.
├── public/                      # Static files copied as-is into the build
│   ├── 404.html                # GitHub Pages SPA fallback
│   ├── curriculum/             # Downloadable CV asset
│   └── fonts/                  # Public font assets
├── src/
│   ├── components/             # App shell, toggles, animations, widgets
│   ├── components/ui/          # Generic shadcn/Radix UI building blocks
│   ├── contexts/               # Global app state providers
│   ├── data/                   # Portfolio content and metadata
│   ├── pages/                  # Route-level screens
│   ├── styles/                 # Global theme tokens and typography
│   ├── App.tsx                 # Provider composition + router
│   ├── index.css               # Tailwind entry + global imports
│   └── routes.tsx              # Route definitions
├── index.html                  # Vite entry HTML
├── package.json                # Dependencies and scripts
├── vite.config.ts              # Vite config, aliases, build output, base path
└── MANAGER.md                  # Deployment constraints/invariants
```

## How Content Is Managed

The site is mostly data-driven. The core content lives in `src/data/`.

### `src/data/personal.ts`

This is the primary content source. It holds:

- name, title, tagline, and hero emoji
- about-page biography text
- traits shown on the about page
- education and experience entries
- email, location, and timezone
- social links
- CV download metadata
- the skills-page closing statement

Both CV download buttons use `personalInfo.cvFile`, so changing the CV path here updates:

- the heart button on the home page
- the "Download CV" button on the contact page

### `src/data/skills.ts`

Defines the skill list used by the skills page. Each item includes:

- `name`
- `icon`
- `category`

Current categories are:

- `language`
- `framework`
- `ml-robotics`
- `other`

The skills page groups and renders these categories automatically.

### `src/data/projects.ts`

Defines the project carousel content. Each project includes:

- `id`
- `title`
- `description`
- `tech`
- `githubUrl`
- optional `imageUrl`

The projects page maps this array into carousel slides and tech tags.

## Pages

### Home

`src/pages/Home.tsx` is the landing page and navigation hub. It includes:

- hero intro
- timezone widget
- four navigation cards
- social links
- CV download button

### About

`src/pages/About.tsx` presents:

- overview text
- three personal traits
- education
- selected experience

### Skills

`src/pages/Skills.tsx` renders the grouped skill cards and a final summary statement.

### Projects

`src/pages/Projects.tsx` uses Embla Carousel to show a horizontally scrollable project selection with:

- previous/next controls
- dot navigation
- optional GitHub buttons
- active-slide emphasis

### Contact

`src/pages/Contact.tsx` shows:

- email and location cards
- CV download card
- a contact form UI

Important: the contact form submission is currently mocked in the frontend. It does not send data to a real service until `handleSubmit` is replaced with a real integration.

## Global Behaviors

### Theme

`src/contexts/ThemeContext.tsx` stores a `day` or `night` theme and persists the selection in `localStorage`. The theme is implemented through CSS custom properties in `src/styles/globals.css`.

### Sound

`src/contexts/SoundContext.tsx` generates simple interface sounds with the Web Audio API. It exposes:

- `playClick`
- `playToggle`
- `playSuccess`
- `playHover`

These are used throughout the navigation and toggle interactions.

### Blossoms

`src/contexts/BlossomContext.tsx` persists whether petals are enabled. `src/components/Petals.tsx` renders animated falling petals and adds cursor-based motion influence while enabled.

### Stars

`src/components/Stars.tsx` renders randomly positioned twinkling stars, but only in night mode.

### Time Widget

`src/components/TimeWidget.tsx` displays:

- Melissa's timezone based on `personalInfo.contact.timezone`
- the visitor's local time

It updates every second on the client.

## Styling System

Global styling lives mainly in:

- `src/index.css`
- `src/styles/globals.css`

Key styling characteristics:

- CSS custom properties for day/night theme tokens
- imported retro/pixel fonts
- Tailwind utilities for layout and spacing
- custom animations for sparkle, glow, float, and petals
- global transitions for theme changes

The visual style is intentionally playful and retro rather than minimal or corporate.

## Static Assets

Files in `public/` are copied directly into the production build.

This matters for:

- downloadable PDFs
- 404 fallback handling on GitHub Pages
- public font files

If you want a file to be directly downloadable through a URL, place it in `public/` and reference it through `import.meta.env.BASE_URL`.

## Routing and Deployment

The app uses `createBrowserRouter`, not hash routing. For static hosting, two things make this work:

- `vite.config.ts` supports a configurable `base` via `BASE_PATH`
- `src/routes.tsx` derives the router `basename` from `import.meta.env.BASE_URL`

This allows the site to work both:

- locally at `/`
- on GitHub Pages under a repository subpath

The build output is written to `build/`.

`public/404.html` exists to support SPA fallback behavior on GitHub Pages.

## Customization Guide

For normal content updates, edit:

- `src/data/personal.ts`
- `src/data/skills.ts`
- `src/data/projects.ts`

For visual changes, edit:

- `src/styles/globals.css`
- page components under `src/pages/`
- shared UI pieces under `src/components/`

For CV replacement:

1. Put the new PDF inside `public/`
2. Update `personalInfo.cvFile.path`
3. Update `personalInfo.cvFile.filename`

Because the home and contact pages both rely on that shared config, no page logic needs to change.

## Notes About `src/components/ui`

The repository contains a large set of generic shadcn/Radix components in `src/components/ui/`. These are reusable building blocks from the original design scaffold. Most of them are not central to the current portfolio flow, but they remain available if the site is expanded later.

## Known Limitations

- The contact form is mock-only until wired to a backend or third-party form provider.
- Sound effects depend on browser audio support and user interaction policies.
- The app is heavily client-side and does not include server rendering or a backend API.

## Development Workflow

Typical local workflow:

1. Install dependencies with `npm install`
2. Run `npm run dev`
3. Edit data files for content changes
4. Edit page/components/styles for presentation changes
5. Run `npm run build` before deployment

## Origin

The project started from a Figma-generated portfolio scaffold and has since been customized into a personal portfolio codebase with Melissa-specific content, assets, and deployment handling.
