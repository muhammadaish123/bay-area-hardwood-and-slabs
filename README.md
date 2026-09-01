# Bay Area Hardwood & Slabs

Multi-page Next.js 14 (App Router) + React + Tailwind CSS rebuild of the
Bay Area Hardwood & Slabs site — black & white theme, Oswald / Inter type,
real project photos, and a working contact-form backend.

## Pages

The prototype's four nav sections (Services, Work, Lumber, Visit) are now
real routes, each carrying the sections that belong to it conceptually:

| Route | Sections |
|---|---|
| `/` | Hero |
| `/services` | Six services grid, "How it works" (4-step process) |
| `/work` | Selected work gallery, client testimonials |
| `/lumber` | Lumber yard / mill copy, species we stock |
| `/visit` | FAQ, CTA banner, shop address/hours + inquiry form |

Every section from the original one-pager is used exactly once. The
grouping is topical (e.g. testimonials sit with the work that earned them)
rather than a literal slice of the original scroll order, since a real
multi-page site reads better that way — flag it if you'd rather regroup
differently.

## Theme

- **Colors:** strict black & white — `ink` (#0A0A0A), `paper` (#FFFFFF),
  `cream` (#F5F5F5), `line`/`muted` grays. No brand color accents anywhere.
- **Type:** Oswald (headings, uppercase, tracked) + Inter (body/UI),
  matching the prototype's condensed-display + clean-sans pairing.

## Images

All 10 photos you provided are wired in, in `public/images/`:

| File | Used for |
|---|---|
| `hero-dining-table.jpg` | Home hero |
| `service-tables.jpg` | Services → Custom Tables |
| `service-decking.jpg` | Services → Milled Decking |
| `service-siding.jpg` | Services → Milled Siding; Work gallery (siding/window) |
| `service-flooring.jpg` | Services → Milled Flooring |
| `service-trim.jpg` | Services → All Trim Work |
| `service-lumber.jpg` | Services → Lumber & Slabs; Work gallery (paired tables); Lumber page |
| `work-table-bench.jpg` | Work gallery (live-edge table & bench) |
| `work-deck-stairs.jpg` | Work gallery (deck stairs); Visit page CTA banner |
| `flooring-detail.jpg` | Work gallery (flooring close-up) |

A few files are reused across sections (e.g. the lumber slab photo appears
on the Services, Work, and Lumber pages) — same reuse pattern as the
prototype itself. If you'd rather each slot had a unique photo, send more
and I'll swap them in — same `ImagePlaceholder` approach, no layout change.

## A note on visual fidelity

Structure, copy, section order, theme colors and fonts now follow your
exact spec. Fine-grained pixel values (precise spacing, exact type scale)
are still my professional judgment rather than scraped from the prototype
— I don't have a way to read its literal CSS. Send screenshots if anything
needs tightening further.

## Getting started

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

Open http://localhost:3000.

## Contact form / email backend

The form (on `/visit`) posts to `app/api/contact/route.ts`, which
validates server-side (zod), rejects likely bots (honeypot field),
rate-limits by IP, and sends mail via Nodemailer over SMTP.

Nothing is hardcoded — set these in `.env.local`:

- `CONTACT_EMAIL` — inbox that receives inquiries
- `CONTACT_FROM` — optional "from" address (falls back to `CONTACT_EMAIL`)
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD` — your email
  provider's SMTP credentials (Resend, Postmark, SendGrid, Gmail app
  password, etc. all work)

Until those are set, submissions are still accepted and logged server-side
(`console.info`) instead of erroring, so the form is fully testable before
real credentials exist — see the comment in `app/api/contact/route.ts`.

## Project structure

```
app/
  layout.tsx              — fonts, global SEO metadata
  page.tsx                 — Home (hero)
  services/page.tsx        — Services + process
  work/page.tsx             — Work gallery + testimonials
  lumber/page.tsx           — Lumber yard + species
  visit/page.tsx             — FAQ + CTA + shop info + contact form
  globals.css
  api/contact/route.ts
components/
  Navbar, Footer, Hero, ServicesGrid, WorkGallery, LumberYard,
  ProcessSteps, SpeciesStock, Testimonials, FAQ, CTABanner, VisitShop,
  ContactForm, ImagePlaceholder, Reveal
lib/
  validation.ts       — zod schema (shared by client + server)
  mailer.ts             — Nodemailer transport, env-configured
```
