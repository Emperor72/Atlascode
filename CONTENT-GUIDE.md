# Atlas Code website: content guide (Next.js + TypeScript)

Stack: Next.js 15 (App Router) with TypeScript and static export. Content lives in typed TSX modules.

## 1. Where content lives

| Content | File | URL |
|---|---|---|
| Blog post | `src/content/blog/<slug>.tsx` | `/blog/<slug>/` |
| Program | `src/content/programs/<slug>.tsx` | `/programs/<slug>/` |
| Core pages | `src/app/<route>/page.tsx` | `/<route>/` |

Blog and program modules are registered in `src/content/blog/index.ts` and `src/content/programs/index.ts`. Routes, the sitemap, breadcrumbs, related cards and schema are all generated from them.

## 2. Module format

```tsx
import Link from 'next/link';
import { site } from '@/lib/site';
import { Faq } from '@/components/Faq';
import type { PostMeta } from '@/lib/types';   // or ProgramMeta

export const meta: PostMeta = {
  slug: 'how-to-become-web-developer-uk',
  title: 'How to Become a Web Developer in the UK (2026) | Atlas Code',
  description: '140–160 characters…',
  h1: 'How to Become a Web Developer in the UK: A Step-by-Step Roadmap',
  lead: 'Intro shown under the H1.',
  crumb: 'Become a Web Developer',
  date: '2026-09-01', modified: '2026-10-20', category: 'Careers', readTime: '11 min read',
  related: ['/programs/full-stack-web-development/', '/blog/online-coding-bootcamp-guide/'],
};

export default function Content() {
  return (
    <>
      <section className="section"><div className="container"> … </div></section>
    </>
  );
}
```

`ProgramMeta` also needs `summary`, `badge` and `course: { name, price, hours, weeks, mode }`. Set `price` from `site.programs.<key>.price`.

The layout renders the hero (breadcrumbs, H1, lead, date) and the "Keep exploring" cards from `related`. **Don't write an `<h1>`.**

## 3. Values: never hard-code these

`site.phone`, `site.email`, `site.deposit`, `site.timezones.uk|na`, `site.marketsLabel`,
`site.programs.fullstack|parttime|data|uxui|intro` → `.priceLabel`, `.price`, `.nextStart`.

Example: `<dd>{site.programs.fullstack.priceLabel}</dd>`.

## 4. JSX rules

- Use `className`, not `class`. Self-close void tags (`<br />`).
- Write internal links as `<Link href="/admissions/">descriptive anchor</Link>`, with a root-relative URL and a trailing slash.
- Use typographic apostrophes and quotes in text (’ “ ”) so that `react/no-unescaped-entities` never fires. Never put a bare `{` or `}` in text.
- Give `id` attributes to the H2s that the table of contents links to.
- For an FAQ, use `<Faq items={[{ q: 'Question?', a: 'Plain-text answer.' }]} />`. It renders the accordion and the FAQPage JSON-LD.

## 5. CSS components (`src/app/globals.css`)

```
section.section > div.container             section.section.alt (tinted)
div.container.narrow                        div.prose (long-form typography)
div.layout-sidebar > div.prose + aside.sidebar > div.sidebar-box (h2.h4 inside)
p.eyebrow   h2.section-title   p.section-intro
div.grid.grid-2|grid-3|grid-4 > article.card > h3, p, a.card-link
dl.key-facts > div > dt + dd
ol.timeline > li > h3 + p
ul.checklist > li          div.callout > p        div.table-wrap > table
nav.toc[aria-label="On this page"] > p.toc-title + ol > li > a[href="#id"]
section.cta-band > div.container > h2, p, a.btn.btn-primary, a.btn.btn-ghost
span.badge
```

## 6. URL map (link only to these)

```
/  /programs/
/programs/full-stack-web-development/  /programs/part-time-web-development/
/programs/data-analytics/  /programs/ui-ux-design/  /programs/intro-to-coding/
/admissions/  /tuition-financing/  /upcoming-cohorts/  /career-services/
/hiring-partners/  /corporate-training/  /online-learning/  /about/  /faq/  /contact/  /apply/
/blog/
/blog/how-to-become-web-developer-uk/       /blog/coding-bootcamp-vs-university-degree/
/blog/junior-tech-jobs-uk-us-canada/        /blog/online-coding-bootcamp-guide/
/blog/javascript-vs-python-beginners/       /blog/remote-developer-jobs-guide/
/blog/how-to-prepare-for-coding-bootcamp/    /blog/career-change-to-tech-after-30/
/privacy-policy/  /terms/  /sitemap/
```

## 7. Editorial rules

- Write in British English, in a warm and concrete voice, for learners in the UK, the US and Canada. Atlas Code is a live online bootcamp (cohorts in UK time or US Eastern Time); never describe a campus or in-person classes.
- Don't give legal, visa or tax advice: right to work is the learner's responsibility.
- **Don't invent** testimonials, graduate names, placement rates, Atlas Code salary data or partner companies.
- Each page links to its programs, to admissions/apply, and to 2–4 related pages, with descriptive anchors.
