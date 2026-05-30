# VANTA Studio Website — Implementation Plan

## Project Overview

The VANTA Studio website will be built as a modern, high-performance, SEO-focused presentation and lead generation platform.

### Primary Goals

- Establish VANTA Studio as a premium creative studio.
- Generate qualified leads through the contact form.
- Rank for local and regional SEO searches related to:
  - graphic design
  - branding
  - logo design
  - publicitate
  - web design
  - comunicare vizuală

- Showcase portfolio and expertise.
- Create a scalable foundation for future expansion.

---

# Technology Stack

## Core

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Recommended Additions

- Framer Motion
- Lucide React
- next-seo
- react-hook-form
- zod
- shadcn/ui
- next-sitemap

---

# Brand Design System

## Colors

### Dark

```css
#0B0B0D
```

Primary background.

---

### Gray

```css
#202026
```

Cards, dividers, secondary backgrounds.

---

### Light

```css
#F5F7FA
```

Primary text.

---

### Cyan

```css
#22D3EE
```

Interactive elements.

---

### Purple

```css
#8B5CF6
```

Secondary accent.

---

# Tailwind Theme Extension

Create custom color tokens:

```ts
vanta: {
  dark: "#0B0B0D",
  gray: "#202026",
  light: "#F5F7FA",
  cyan: "#22D3EE",
  purple: "#8B5CF6"
}
```

---

# Typography

## Recommended Fonts

### Headings

Google Sans

### Body

Inter

---

# Project Structure

```txt
src/
│
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── branding/
│   ├── graphic-design/
│   ├── web-design/
│   ├── motion-video/
│   ├── proiecte/
│   ├── despre/
│   ├── contact/
│   └── blog/
│
├── components/
│   ├── layout/
│   ├── sections/
│   ├── ui/
│   └── forms/
│
├── content/
│   ├── copy.md
│   └── blog/
│
├── lib/
│
├── hooks/
│
├── types/
│
└── constants/
```

---

# Global Layout

## Navigation

Sticky navbar.

Items:

- Home
- Servicii
- Proiecte
- Despre
- Contact

Right side:

Primary CTA button:

```txt
Solicită o ofertă
```

---

# Footer

Contains:

- Logo
- Short description
- Navigation
- Contact information
- Social links

Footer SEO text:

```txt
VANTA Studio — Branding, Graphic Design & Comunicare Vizuală.

Studio creativ independent cu bază în Bacău, disponibil pentru colaborări locale și remote.
```

---

# Homepage Architecture

---

## Section 01 — Hero

### Goal

Immediate positioning.

### Content

Headline:

```txt
Design modern pentru branduri care vor să se remarce
```

Subheadline from copy.md.

Buttons:

- Vezi proiectele
- Contactează-ne

---

### Visual Placeholder

```txt
IMAGE:
Abstract dark geometric composition.
Soft cyan highlights.
Minimal futuristic atmosphere.
No gradients.
Premium creative studio aesthetic.
```

---

## Section 02 — Services

### Layout

4 service cards.

Icons from /public/icons.

Services:

- Branding
- Graphic Design
- Web Design
- Motion & Video

---

### Interaction

Hover:

- slight scale
- cyan border
- subtle glow

---

## Section 03 — About

### Goal

Build trust.

Content from copy.md.

---

### Visual Placeholder

```txt
IMAGE:
Creative workspace.
Dark desk.
Monitor displaying branding project.
Minimal setup.
Premium atmosphere.
```

---

## Section 04 — Portfolio Preview

Grid:

- 3–6 featured projects

Each project:

- Cover image
- Category
- Title

---

### Visual Placeholder

```txt
PROJECT MOCKUPS:
Brand identity
Packaging
Website preview
Business cards
Social media system
```

---

## Section 05 — Local SEO Section

### Important

Must contain:

- Bacău references
- branding references
- graphic design references

Natural language only.

No keyword stuffing.

---

## Section 06 — CTA

Headline:

```txt
Hai să construim ceva modern.
```

Button:

```txt
Contactează-ne
```

---

# Services Page

Route:

```txt
/servicii
```

---

## Layout

Intro section.

Service blocks:

### Branding

### Graphic Design

### Web Design

### Motion & Video

---

Each block:

- Description
- Benefits
- Deliverables

---

# Individual Service Pages

---

## /branding

Keywords:

- branding
- identitate vizuală
- logo design

---

### Placeholder

```txt
IMAGE:
Brand guideline spread.
Logo construction.
Typography system.
```

---

## /graphic-design

Keywords:

- design grafic
- materiale publicitare
- reclame

---

### Placeholder

```txt
IMAGE:
Flyers.
Posters.
Menus.
Advertising layouts.
```

---

## /web-design

Keywords:

- web design
- website business
- site prezentare

---

### Placeholder

```txt
IMAGE:
Modern website mockups.
Desktop and mobile.
Dark premium UI.
```

---

## /motion-video

Keywords:

- motion graphics
- video editing
- reels

---

### Placeholder

```txt
IMAGE:
Timeline interface.
Animated compositions.
Video editing workflow.
```

---

# Projects Page

Route:

```txt
/proiecte
```

---

## Structure

Filter system:

- Branding
- Graphic Design
- Web Design
- Motion

---

Project Page Structure:

```txt
Hero
Overview
Challenge
Solution
Deliverables
Gallery
CTA
```

---

# About Page

Route:

```txt
/despre
```

---

## Sections

### Studio Introduction

### Working Philosophy

### Process

1. Discovery
2. Strategy
3. Design
4. Delivery

---

### Visual Placeholder

```txt
IMAGE:
Minimal studio environment.
Creative process.
Design workflow.
```

---

# Contact Page

Route:

```txt
/contact
```

---

# Section 01 — FAQ

Accordion component.

Questions from copy.md.

SEO friendly.

Server-rendered.

---

# Section 02 — Contact Form

Fields:

```txt
Nume
Email
Telefon
Business / Brand
Serviciu dorit
Buget estimativ
Mesaj
```

Validation:

- React Hook Form
- Zod

---

# Future Qualification Flow

Later implementation:

```txt
Project Type
Industry
Deadline
Budget Range
Existing Branding?
Website URL
Reference Examples
```

---

# SEO Architecture

## Metadata

Every page must include:

- unique title
- unique description
- Open Graph
- Twitter Cards

---

## Example Homepage Metadata

Title:

```txt
VANTA Studio | Branding, Graphic Design & Comunicare Vizuală
```

Description:

```txt
Studio creativ specializat în branding, graphic design și comunicare vizuală. Materiale pregătite pentru digital și print.
```

---

# Structured Data

Implement:

## Organization

## LocalBusiness

## Website

## Breadcrumb

JSON-LD via Next.js metadata.

---

# Sitemap

Generate automatically.

Routes:

- all pages
- blog posts
- projects

---

# Blog Architecture

Purpose:

SEO acquisition.

---

Categories:

- Branding
- Graphic Design
- Web Design
- Marketing
- Visual Identity

---

Recommended First Articles

- Cum alegi un logo profesional
- Ce este identitatea vizuală
- Diferența dintre branding și logo
- Cum influențează designul încrederea clienților
- De ce are nevoie un business de un website modern

---

# Performance Targets

Lighthouse:

```txt
Performance > 95
Accessibility > 95
Best Practices > 95
SEO > 100
```

---

# Optimization Checklist

- Next/Image
- Dynamic imports
- Font optimization
- Metadata API
- Static rendering where possible
- Server Components by default
- Client Components only when required

---

# Animations

Use Framer Motion sparingly.

Allowed:

- fade in
- reveal on scroll
- card hover
- page transitions

Avoid:

- excessive motion
- parallax
- distracting effects

---

# Development Order

## Phase 1

- Design System
- Layout
- Navigation
- Footer

---

## Phase 2

- Homepage
- Contact Page

---

## Phase 3

- Services
- About
- Portfolio

---

## Phase 4

- Blog
- SEO
- Metadata
- Structured Data

---

## Phase 5

- Optimization
- Analytics
- Deployment

---

# Final Objective

The website should feel like a modern creative studio, not a local advertising company.

Keywords should support visibility.

Design should support perception.

The primary conversion goal is generating qualified inquiries through the contact form.
