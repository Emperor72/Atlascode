# Atlas Code: website

This is the SEO-optimized website for **Atlas Code, a coding bootcamp in Agadir, Morocco**. It is built with **Next.js 15 (App Router) and TypeScript** and is exported as a fully static site.

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

- domain (`url`), phone, WhatsApp, email, street address, GPS coordinates
- tuition prices and next start dates for each program
- `formEndpoint`: create a free form at [formspree.io](https://formspree.io) (or similar) so the Apply and Contact forms deliver emails
- social profile URLs, and optionally `googleSiteVerification` and `ga4Id`

Business policies that the content describes and that you should confirm or adjust:

- early-bird and pay-in-full discounts
- scholarships
- the loan laptop
- refund rules ([terms](src/app/terms/page.tsx))
- the Intro to Coding fee being deducted from tuition

Have a legal professional review [privacy-policy](src/app/privacy-policy/page.tsx) and [terms](src/app/terms/page.tsx), which follow Moroccan Law 09-08 and the CNDP.

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
- JSON-LD: `EducationalOrganization` + `LocalBusiness` (address, geo, opening hours, area served), `WebSite`, `WebPage`, `BreadcrumbList`, `Course` with `Offer` and `CourseInstance`, `BlogPosting` and `FAQPage`
- Internal linking:
  - mega-menu
  - footer link hub
  - breadcrumbs
  - contextual in-text links
  - "Keep exploring" related cards on every page
  - 0 orphan pages, verified by `npm run audit`
- Static HTML, no web fonts and minimal JS for fast Core Web Vitals; semantic, accessible markup (skip link, ARIA, one H1 per page)

## Deploy

- **Vercel** (recommended): import the GitHub repo. The framework is detected automatically.
- **Netlify / Cloudflare Pages**: build command `npm run build`, output folder `out`.
- **Shared hosting (cPanel)**: upload the contents of `out/`.

After launch, add the domain in **Google Search Console**, submit `https://<domain>/sitemap.xml`, and create or verify a **Google Business Profile** with the same name, address and phone (NAP) as `site.ts`. This is essential for local "coding bootcamp Agadir" searches.

## Next SEO steps (recommended)

1. A French version (`/fr/`), since many searches in Agadir are in French (e.g. "formation développeur web Agadir"). The hreflang tags are already in place.
2. Real photos of the campus and team, plus genuine student testimonials once you have graduates.
3. One or two new articles per month, and local backlinks (universities, incubators, local media, partner companies).
