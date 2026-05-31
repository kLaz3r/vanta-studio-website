# VANTA Studio Website — AGENTS.md

## Quick start

```sh
pnpm install          # pnpm only (v10.27.0), never npm
pnpm dev              # next dev --turbo
SKIP_ENV_VALIDATION=1 pnpm build   # skip env check for Docker/CI
pnpm check            # lint + typecheck: next lint && tsc --noEmit
pnpm format:write     # prettier with tailwind plugin (sorts classes)
```

## Commands

| Script | What it does |
|---|---|
| `pnpm dev` | `next dev --turbo` |
| `pnpm build` | `next build` then `postbuild` → `next-sitemap` |
| `pnpm preview` | `next build && next start` |
| `pnpm check` | `next lint && tsc --noEmit` — run both before commit |
| `pnpm lint:fix` | `next lint --fix` |
| `pnpm format:check` / `format:write` | Prettier check/write |
| `pnpm typecheck` | `tsc --noEmit` |

No test framework is configured.

## Imports

Path alias `~/*` → `./src/*`. Always use:

```ts
import { cn } from "~/lib/cn";
import { Button } from "~/components/ui/button";
```

## Tailwind v4 quirks

- **No `tailwind.config.js`** — Tailwind v4 uses CSS-based config via `@theme` in `src/styles/globals.css`
- Custom color tokens under `vanta-*` namespace: `dark`, `gray`, `light`, `cyan`, `purple`
- Built-in CSS utilities in globals.css are available as class names: `.gradient-text`, `.orb-cyan`, `.orb-purple`, `.glass-card`, `.glass-card-tint`, `.glass-input`, `.accent-line`
- Use `@theme` for token changes, not JS config

## Architecture conventions

- **Server Components by default** — only add `"use client"` for state/effects/events/browser APIs
- **Static rendering** preferred; `generateStaticParams` for dynamic routes
- **`next/image`** always, never raw `<img>`
- **Metadata API** per page, never manual `<head>`
- **App Router only** — `pages/` directory must never exist
- **JSON-LD**: `DefaultJsonLd` in root layout, `JsonLd` component for per-page, schemas in `lib/structured-data.ts`
- **Layout font variables**: `--font-sans` (Inter) for body, `--font-heading` (Google Sans Variable via Fontsource) for headings
- **Title template**: `%s | VANTA Studio` (set in root layout)

## Shared components

| Component | Import | Notes |
|---|---|---|
| `FadeInView` | `~/components/ui/fade-in-view` | Wraps children with scroll-reveal. Props: `direction`, `delay`, `duration`, `once`. Client component. |
| `Button` | `~/components/ui/button` | Variants: `primary` (gradient, default), `secondary` (outlined), `ghost`. Sizes: `sm`, `md`, `lg`. Supports `asChild` for `<Link>`. |
| `JsonLd` | `~/components/layout/json-ld` | Renders JSON-LD script tag |
| `cn()` | `~/lib/cn` | `clsx` + `tailwind-merge` utility |

## Styling rules

- Copy is **Romanian** — never write English copy
- Tailwind v4 utility classes only, no custom CSS files except `globals.css`
- Mobile-first responsive design
- Dark background (`vanta-dark`), light text (`vanta-light`), cyan accent (`vanta-cyan`)
- Animations: subtle fade/reveal only (via `FadeInView`), no parallax or excessive motion
- Prettier with `prettier-plugin-tailwindcss` auto-sorts classes on format

## Contact form

`src/components/forms/contact-form.tsx` uses `react-hook-form` + `zod`. **Not wired to any API yet** — `onSubmit` is a `console.log` stub with a 1s fake delay.

## Site structure (all routes exist)

```
/                    Homepage (6 sections: Hero, Services, About, Portfolio, Local SEO, CTA)
/servicii            Services overview
/branding            Branding page
/graphic-design      Graphic design page
/web-design          Web design page
/motion-video        Motion & video page
/proiecte            Portfolio w/ category filters
/despre              About page
/contact             FAQ accordion + contact form
/blog                Blog (static placeholder, slugs are "#")
```

## Known gaps

- **Blog**: No MDX content yet. `slug` values are `"#"` placeholders.
- **Contact form**: Not wired to any API/email endpoint (TODO).
- **Projects**: Placeholder data and images (`image: null`).
- **`content/`, `hooks/`, `types/`, `constants/`** directories exist but are empty — scaffolding only.
- **Social links** in footer use `"#"` hrefs.

## ESLint

Flat config (`eslint.config.js`): `next/core-web-vitals` + typescript-eslint recommended + strict. Enforces inline type imports, no unused vars (`_` prefix ignored), and `verbatimModuleSyntax` in TS.
