# VANTA Studio Website — CLAUDE.md

## Project Identity

VANTA Studio is a premium independent creative studio based in Bacău, Romania, specializing in **branding, graphic design, and visual communication**. The website serves as a professional presentation platform and lead generation engine.

### What VANTA IS
- A branding & visual communication studio
- Modern, premium, professional
- Serving both digital and print-ready materials
- Available for local (Bacău) and remote collaborations nationwide

### What VANTA is NOT
- A print shop (tipografie)
- A classic advertising agency (agenție clasică de reclame)
- A print center (centru de print)

### Primary Goal
Generate **qualified leads through the contact form**. Design should support perception, keywords should support visibility.

---

## Tech Stack

### Core
- **Next.js** — App Router only; `pages/` directory must never be used
- **TypeScript** — strict mode; no `any` without explicit justification
- **Tailwind CSS** — all styling via utility classes; no custom CSS files except `globals.css`

### Libraries
- **Framer Motion** — animations (sparingly, see Animation Rules below)
- **Lucide React** — icons
- **react-hook-form** — form state management
- **zod** — form and data validation
- **shadcn/ui** — UI primitives (no other component library)
- **next-sitemap** — sitemap generation

---

## Design System

### Colors (Tailwind tokens under `vanta` namespace)
| Token   | Hex       | Usage                          |
|---------|-----------|--------------------------------|
| `dark`  | `#0B0B0D` | Primary background             |
| `gray`  | `#202026` | Cards, dividers, secondary backgrounds |
| `light` | `#F5F7FA` | Primary text                   |
| `cyan`  | `#22D3EE` | Interactive elements, accents  |
| `purple`| `#8B5CF6` | Secondary accent               |

### Typography
- **Headings**: Google Sans (or fallback geometric sans-serif)
- **Body**: Inter (or fallback clean sans-serif)

### Visual Direction
- Dark minimal aesthetic
- High contrast
- Generous negative space / airy layouts
- Subtle motion
- Discrete cyan/violet accents
- No gradients
- Premium creative studio feel — not a local advertising company look

### Animation Rules (Framer Motion)
- **Allowed**: fade in, reveal on scroll, card hover effects, page transitions
- **Forbidden**: excessive motion, parallax, distracting effects
- Animations must be subtle and serve the content, never distract from it

---

## Tone of Voice

- Modern (modern)
- Clear (clar)
- Professional (profesionist)
- Premium (premium)
- Direct (direct)
- No unnecessary jargon (fără jargon inutil)

All copy is in **Romanian**.

---

## Site Architecture

```
/                          Homepage (6 sections)
├── /servicii              Services overview
├── /branding              Individual service page
├── /graphic-design        Individual service page
├── /web-design            Individual service page
├── /motion-video          Individual service page
├── /proiecte              Portfolio with category filters
├── /despre                About page
├── /contact               FAQ + contact form
└── /blog                  Blog (SEO acquisition)
```

### Navigation (Sticky Navbar)
Items: Home, Servicii, Proiecte, Despre, Contact
CTA button (right side): **"Solicită o ofertă"**

### Footer
Logo, short description, navigation, contact info, social links, SEO text:
> VANTA Studio — Branding, Graphic Design & Comunicare Vizuală.
> Studio creativ independent cu bază în Bacău, disponibil pentru colaborări locale și remote.

---

## Homepage Sections (in order)

1. **Hero** — Immediate positioning. Headline: "Design modern pentru branduri care vor să se remarce"
2. **Services** — 4 cards (Branding, Graphic Design, Web Design, Motion & Video) with icons from `/public/icons`
3. **About** — Trust-building section from copy.md
4. **Portfolio Preview** — 3–6 featured projects grid
5. **Local SEO** — Natural language section with Bacău references (no keyword stuffing)
6. **CTA** — "Hai să construim ceva modern." → Contact button

---

## SEO Requirements

### Per-Page Metadata (mandatory for every route)
- Unique `<title>`
- Unique `<meta name="description">`
- Open Graph tags
- Twitter Card tags

### Structured Data (JSON-LD)
- `Organization`
- `LocalBusiness`
- `Website`
- `Breadcrumb`

### Sitemap
Auto-generated via `next-sitemap`. Must include all pages, blog posts, and projects.

### Local SEO Strategy
Target keywords through **content, metadata, and blog articles** — never through forced URL structures:
- grafica bacau, design grafic bacau, publicitate bacau, reclame bacau, logo bacau, web design bacau

---

## Performance Targets (Lighthouse)

| Metric          | Target |
|-----------------|--------|
| Performance     | > 95   |
| Accessibility   | > 95   |
| Best Practices  | > 95   |
| SEO             | 100    |

---

## Development Principles

1. **Server Components by default** — every component starts as a Server Component; only add `"use client"` when strictly necessary (state, effects, event handlers, browser APIs)
2. **Static rendering** wherever possible — use `generateStaticParams` for known routes
3. **`next/image`** for all images — never use raw `<img>` tags
4. **Font optimization** via `next/font`
5. **Dynamic imports** for heavy client components (`next/dynamic`)
6. **Metadata API** — use Next.js `generateMetadata` / `Metadata` objects, never manual `<head>` manipulation
7. **No custom CSS files** beyond `globals.css` — everything in Tailwind
8. **Mobile-first** responsive design
9. **Comment density**: match surrounding code style; don't over-comment obvious things

---

## Development Phases

### Phase 1 — Foundation
- Design system (Tailwind tokens, typography, globals)
- Layout (navbar, footer, root layout)
- Navigation component

### Phase 2 — Core Pages
- Homepage (all 6 sections)
- Contact page (FAQ accordion + form with validation)

### Phase 3 — Content Pages
- Services overview + individual service pages
- About page
- Portfolio/projects page

### Phase 4 — SEO & Blog
- Blog structure and first articles
- Metadata for all pages
- Structured data (JSON-LD)
- Sitemap generation

### Phase 5 — Polish
- Performance optimization
- Analytics integration
- Deployment preparation

---

## Contact Form

### Fields
Nume, Email, Telefon, Business/Brand, Serviciu dorit (select), Buget estimativ (select), Mesaj

### Validation
`react-hook-form` + `zod`

### Future
Pre-qualification flow (project type, industry, deadline, budget range, existing branding, website URL, reference examples)

---

## Blog Architecture

### Categories
Branding, Graphic Design, Web Design, Marketing, Visual Identity

### Recommended First Articles
1. Cum alegi un logo profesional pentru afacerea ta
2. Ce este identitatea vizuală și de ce contează
3. Diferența dintre logo și branding
4. Cum influențează designul percepția unui brand
5. De ce are nevoie un business de un website modern

---

## Project Structure
```
src/
├── app/            # App Router pages and layouts
├── components/
│   ├── layout/     # Navbar, Footer, etc.
│   ├── sections/   # Homepage sections, reusable page sections
│   ├── ui/         # shadcn/ui primitives
│   └── forms/      # Form components
├── content/        # Copy text, blog MDX
├── lib/            # Utility functions
├── hooks/          # Custom React hooks
├── types/          # TypeScript type definitions
└── constants/      # Shared constants
```