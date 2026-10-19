# FlyEase Travel Desk — Call-Only Landing Page

A production-ready, **call-only** landing page built with **Next.js 15 (App Router) + TypeScript + Tailwind CSS + Framer Motion**, styled with a **premium dark-travel** theme (deep navy, steel-blue and champagne-sand accents, Fraunces display type).

It is designed for a US-based **flight booking, flight change and flight cancellation phone-support service** that runs Google Ads / Meta Ads traffic.

> **The only conversion goal is a phone call.** There are no forms, no email fields and no chat widgets. Every CTA is a click-to-call `tel:` link.

---

## Quick start

```bash
npm install
cp .env.example .env.local   # then fill in your phone number, site URL and IDs
npm run dev                  # http://localhost:3000
```

Production checks:

```bash
npm run typecheck   # TypeScript strict, no errors
npm run lint        # ESLint clean
npm run build       # production build
npm run start       # serve the production build
```

---

## Where to change things

Deployment-specific values (phone number, site URL, contact email) live in **`.env.local`** (see [Environment variables](#environment-variables)). Everything marketing/copy-related lives in **`src/config/site.ts`**.

| What you want to change | Where |
| --- | --- |
| Brand name, tagline | `site.brandName`, `site.tagline` |
| **Phone number** | `NEXT_PUBLIC_PHONE_DISPLAY`, `NEXT_PUBLIC_PHONE_E164` (in `.env.local`) |
| Site URL | `NEXT_PUBLIC_SITE_URL` (in `.env.local`) |
| Contact email | `NEXT_PUBLIC_CONTACT_EMAIL` (in `.env.local`) |
| Hours, service area | `site.hours`, `site.areaServed`, `site.serviceRegion` |
| Hero headline / subheading | `site.hero` |
| Services, benefits, steps | `site.services`, `site.benefits`, `site.steps` |
| Trust counters (**placeholders**) | `site.stats` |
| Testimonials (**placeholders**) | `site.testimonials` |
| Popular topics / keyword blocks | `site.topics` |
| FAQ (feeds the FAQPage schema) | `site.faqs` |
| Keyword-rich copy block | `site.popularContent` |
| Footer disclaimer | `site.disclaimer` |

`src/config/site.ts` reads the env values and exposes them as `site.phoneDisplay`, `site.phoneE164`, `site.siteUrl` and `site.email`, so components never touch `process.env` directly.

### Changing the phone number

1. Open `.env.local` (copy it from `.env.example` if it does not exist).
2. Update the two phone values together:
   ```bash
   NEXT_PUBLIC_PHONE_DISPLAY=(800) 000-0000   # what visitors see
   NEXT_PUBLIC_PHONE_E164=+18000000000        # digits only, used in tel: links + JSON-LD
   ```
3. Restart the dev server / rebuild. Every button, the header, the mobile sticky bar, the footer, metadata and the `TravelAgency` structured data all follow.

### Changing the brand

Update `site.brandName`, `site.tagline` and the hard-coded wordmark text in `src/components/Logo.tsx` (two short strings) if you want the logo mark itself to match.

---

## Environment variables

Copy `.env.example` to `.env.local` and fill in your values. When a tracking ID is blank, the related tracking script is skipped and tracking calls become safe no-ops, so the site still works locally.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for metadata, sitemap, robots, Open Graph |
| `NEXT_PUBLIC_PHONE_DISPLAY` | Phone number shown to visitors, e.g. `(800) 000-0000` |
| `NEXT_PUBLIC_PHONE_E164` | Phone number for `tel:` links + JSON-LD, e.g. `+18000000000` |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Contact email used on the contact page and policies |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 measurement ID (`G-XXXX`) |
| `NEXT_PUBLIC_GOOGLE_ADS_ID` | Google Ads ID (`AW-XXXX`) |
| `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL` | Conversion label for the call conversion |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta (Facebook) Pixel ID |
| `NEXT_PUBLIC_INDEX_UTILITY_PAGES` | `true` to allow indexing of `/privacy-policy`, `/terms`, `/contact` |

---

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home — hero, services, why-us, steps, stats, destinations, reviews, blog, topics, FAQ, CTA |
| `/services` | Service overview |
| `/how-it-works` | Process + what to have ready |
| `/destinations` | Destination index (groups domestic / international) |
| `/destinations/[slug]` | 12 city landing pages (`src/lib/destinations.ts`) |
| `/blog` | Blog index |
| `/blog/[slug]` | 8 SEO guides (`src/lib/blog.ts`) |
| `/reviews` | Testimonials + trust stats |
| `/faq` | Full FAQ |
| `/about` | About us |
| `/flights/[slug]` | 5 focused flight-help landing pages (`src/lib/flight-pages.ts`) |
| `/contact` | Contact (phone-first) |
| `/privacy-policy`, `/terms`, `/refund-policy`, `/cookie-policy`, `/accessibility` | Legal pages |
| `/sitemap` | Human-readable site map (`/sitemap.xml` is the machine one) |

Navigation lives in `src/lib/nav.ts`; new destinations/blog posts are added in their `src/lib/*.ts` files and automatically appear in the nav targets, sitemap and static routes.

## Project structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout: metadata, fonts, header/footer, JSON-LD, analytics
│   ├── page.tsx                # Home page (all sections)
│   ├── globals.css             # Tailwind + base styles + reduced-motion handling
│   ├── sitemap.ts              # /sitemap.xml
│   ├── robots.ts               # /robots.txt
│   ├── opengraph-image.tsx     # Dynamic OG image
│   ├── icon.tsx                # Dynamic favicon
│   ├── not-found.tsx           # 404
│   ├── privacy-policy/page.tsx
│   ├── terms/page.tsx
│   ├── refund-policy/page.tsx
│   ├── cookie-policy/page.tsx
│   ├── accessibility/page.tsx
│   ├── contact/page.tsx
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── how-it-works/page.tsx
│   ├── reviews/page.tsx
│   ├── faq/page.tsx
│   ├── sitemap/page.tsx        # human-readable sitemap
│   ├── destinations/           # index + [slug] city pages
│   ├── blog/                   # index + [slug] guides
│   └── flights/[slug]/page.tsx # SSG keyword landing pages (5 samples)
├── components/                 # Header, Hero, Services, Faq, CallButton, ...
├── config/
│   ├── site.ts                 # copy + env-backed phone/URL/email
│   └── tracking.ts             # analytics IDs from env
└── lib/
    ├── motion.ts               # shared Framer Motion variants
    ├── tracking.ts             # call-click conversion events
    ├── utm.ts                  # UTM / gclid / fbclid capture
    ├── structured-data.ts      # JSON-LD builder
    ├── nav.ts                  # navigation links
    ├── destinations.ts         # city pages + image map
    ├── blog.ts                 # blog posts
    └── flight-pages.ts         # landing-page content
```

Sample photos live in `public/images/` (CC0 placeholders — replace with your own licensed images).

---

## Conversion tracking

Every call CTA is rendered by `src/components/CallButton.tsx`. On click it fires:

- `gtag('event', 'conversion', { send_to: 'AW-XXXXXXXXX/YYYYYY' })` (Google Ads)
- `fbq('track', 'Contact')` (Meta Pixel)
- a GA4 `call_click` event
- a `dataLayer` push `{ event: 'call_click', location: 'hero|header|sticky|footer|section' }`

Scripts load via `next/script` with `strategy="afterInteractive"`. UTM / `gclid` / `fbclid` parameters are captured into `sessionStorage` on first load for attribution.

---

## SEO

- Metadata API in `layout.tsx` / `page.tsx` (title, description, keywords, canonical, robots, Open Graph, Twitter, theme color, viewport, telephone format detection).
- JSON-LD in `lib/structured-data.ts`: `TravelAgency`, `WebSite`, per-service `Service` entries and a `FAQPage` generated from `site.faqs`.
- **Reviews:** `Review` / `AggregateRating` schema is generated from `site.testimonials` (real customer reviews). Keep that list genuine and up to date; empty it to omit the schema entirely. See `lib/structured-data.ts`.
- Dynamic `opengraph-image.tsx` and `icon.tsx`, plus `sitemap.ts` and `robots.ts`.
- No airline brand names appear in keywords, titles, headings, alt text or ad copy.

## Accessibility & performance

- One `<h1>`, logical `h2`/`h3` hierarchy, semantic HTML.
- Visible focus states, ARIA labels on icon-only buttons, keyboard-accessible accordion and carousel (autoplay pauses on hover/focus).
- `prefers-reduced-motion` disables/simplifies all animation (see `globals.css` and the components).
- Client components are code-split; only animated pieces use `"use client"`.

---

## Deploy to Vercel

1. Push this repository to GitHub/GitLab/Bitbucket.
2. In Vercel: **Add New → Project → Import** the repo. Next.js is auto-detected — no build settings to change.
3. Add the environment variables from `.env.example` in **Project → Settings → Environment Variables** (at minimum `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_PHONE_DISPLAY` and `NEXT_PUBLIC_PHONE_E164`).
4. Deploy. Add your custom domain under **Settings → Domains**.

---

## Pre-launch checklist

- [ ] Set your live phone number in `.env.local` (`NEXT_PUBLIC_PHONE_DISPLAY`, `NEXT_PUBLIC_PHONE_E164`) — the shipped values are placeholders.
- [ ] Set the production `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_CONTACT_EMAIL`.
- [ ] Keep `src/config/site.ts` → `testimonials` limited to genuine customer reviews (they feed the Review schema).
- [ ] Replace the placeholder stats in `src/config/site.ts` (`stats`).
- [ ] Replace placeholder social links.
- [ ] Replace the sample images in `public/images/` with your own licensed photos (the samples are CC0 placeholders).
- [ ] Verify the footer disclaimer is present and reads correctly.
- [ ] Set all tracking IDs in Vercel env vars (`GA_ID`, `GOOGLE_ADS_ID`, conversion label, `META_PIXEL_ID`).
- [ ] Test a call click and confirm the conversion fires in Google Ads / GA4 / Meta.
- [ ] Verify `/robots.txt` and `/sitemap.xml` return correct production URLs.
- [ ] Connect **Google Search Console** and submit the sitemap.
- [ ] Confirm no airline brand names appear anywhere in copy or metadata.
- [ ] Run Lighthouse (target: Performance 95+, SEO 100, Accessibility 95+, Best Practices 100) on mobile.
- [ ] Have `Terms` and `Privacy Policy` reviewed for your business by a professional.
