# Atlas Code: website

This is the SEO-optimized website for **Atlas Code, a live online coding bootcamp targeting the UK, the US and Canada** (team HQ in Agadir, Morocco). It is built with **Next.js 15 (App Router) and TypeScript** and is exported as a fully static site.

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export → /out
npm run audit      # SEO audit of /out (broken links, titles, descriptions, H1s, canonicals, JSON-LD, orphans)
npm run typecheck
```

Requires Node.js 18.18 or later.

## Before going live: replace the placeholders

Every business detail lives in **[`src/lib/site.ts`](src/lib/site.ts)**. Each value marked `TODO` there is a placeholder:

- domain (`url`), phone, WhatsApp, email, registered-office address, cohort time zones
- tuition prices (USD) and next start dates for each program
- `formEndpoint`: create a free form at [formspree.io](https://formspree.io) (or similar) so the Apply and Contact forms deliver emails
- social profile URLs, and optionally `googleSiteVerification` and `ga4Id`

Business policies that the content describes and that you should confirm or adjust:

- early-bird and pay-in-full discounts
- scholarships
- refund rules ([terms](src/app/terms/page.tsx))
- the Intro to Coding fee being deducted from tuition

Have a legal professional review [privacy-policy](src/app/privacy-policy/page.tsx) and [terms](src/app/terms/page.tsx), which reference UK GDPR, EU GDPR, PIPEDA, US state privacy laws and Moroccan Law 09-08.

## Structure

```
src/
  app/                    routes (one folder per page) + sitemap.ts, robots.ts, manifest.ts, blog/feed.xml
  content/
    pages.ts              SEO metadata of all core pages (title, description, H1, breadcrumb label, related links)
    programs/*.tsx        5 program pages (meta + content) → /programs/<slug>/
    blog/*.tsx            8 blog articles (meta + content)  → /blog/<slug>/
  components/             Header, Footer, PageHero/Breadcrumbs, Faq (+FAQ schema), Cards/Related, JsonLd
  lib/
    site.ts               business settings (edit me)
    seo.ts                metadata + JSON-LD builders (Organization/LocalBusiness, Course, BlogPosting, FAQPage, Breadcrumb)
    registry.ts           single index of every URL → sitemap, breadcrumbs, related cards, HTML sitemap
  app/*.png/route.tsx     icon.png, apple-icon.png and opengraph-image.png, rendered at build time
public/                   icon.svg
scripts/seo-audit.mjs     post-build SEO checks
```

To add a blog post, create `src/content/blog/<slug>.tsx` following [CONTENT-GUIDE.md](CONTENT-GUIDE.md) and register it in `src/content/blog/index.ts`. It then appears automatically in the blog index, the home page, the sitemap, the RSS feed and the related links.

## SEO built in

- Unique title, meta description, canonical URL, hreflang, Open Graph and Twitter card on every page
- `sitemap.xml` (priority, changefreq, lastmod), `robots.txt`, a web manifest, an RSS feed and an HTML `/sitemap/` page
- JSON-LD: `EducationalOrganization` (address, area served: UK/US/Canada), `WebSite`, `WebPage`, `BreadcrumbList`, `Course` with `Offer` and `CourseInstance`, `BlogPosting` and `FAQPage`
- Internal linking:
  - mega-menu
  - footer link hub
  - breadcrumbs
  - contextual in-text links
  - "Keep exploring" related cards on every page
  - 0 orphan pages, verified by `npm run audit`
- Light and dark themes (system default + toggle), CSS-only 3D hero and card effects (disabled for reduced-motion users)
- Static HTML, self-hosted Inter font via `next/font` and minimal JS for fast Core Web Vitals; semantic, accessible markup (skip link, ARIA, one H1 per page)

## Deploy

- **Vercel** (recommended): import the GitHub repo. The framework is detected automatically.
- **Netlify / Cloudflare Pages**: build command `npm run build`, output folder `out`.
- **Shared hosting (cPanel)**: upload the contents of `out/`.

After launch, verify the domain in **Google Search Console** (the verification token is already set in `site.ts`), submit `https://<domain>/sitemap.xml`, and set up 301 redirects from the old Morocco/Agadir blog URLs and `/campus/` to their new equivalents if the old site was indexed.

## Next SEO steps (recommended)

1. Market-specific landing pages (e.g. `/uk/`, `/us/`, `/canada/`) with local pricing in GBP/CAD and region-specific search terms ("online coding bootcamp UK", "part-time coding bootcamp USA").
2. Real photos of the team and online classroom, plus genuine student reviews (Trustpilot, Course Report, SwitchUp) once you have graduates.
3. One or two new articles per month, and backlinks from UK/US/Canadian tech communities, career-change sites and bootcamp review platforms.
