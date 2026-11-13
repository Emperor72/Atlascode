/** Shared content types. */

export interface BaseMeta {
  /** URL slug (no slashes). */
  slug: string;
  /** <title>: 50–60 chars, keyword first, ends with " | Atlas Code". */
  title: string;
  /** Meta description: 140–160 chars. */
  description: string;
  /** The single visible H1. */
  h1: string;
  /** Intro paragraph shown under the H1. */
  lead?: string;
  /** Short label for breadcrumbs and the HTML sitemap. */
  crumb: string;
  /** Internal URLs (with trailing slash) rendered as "Keep exploring" cards. */
  related?: string[];
}

export interface PostMeta extends BaseMeta {
  /** YYYY-MM-DD */
  date: string;
  modified?: string;
  category: 'Careers' | 'Guides' | 'Learning';
  readTime: string;
}

export interface ProgramMeta extends BaseMeta {
  /** Short card blurb for listings (1–2 sentences). */
  summary: string;
  /** Badge shown on cards, e.g. "Full-time · 12 weeks". */
  badge: string;
  course: {
    name: string;
    price: number; // USD (site.currency)
    hours: number;
    weeks: number;
    mode: 'Onsite' | 'Blended' | 'Online';
  };
}

export interface FaqItem {
  q: string;
  /** Plain text: also used verbatim in the FAQPage JSON-LD. */
  a: string;
}

export interface PageEntry {
  path: string;
  title: string;
  description: string;
  h1: string;
  crumb: string;
  priority: number;
  changeFrequency: 'weekly' | 'monthly' | 'yearly';
  lastModified?: string;
  section: 'main' | 'programs' | 'blog' | 'legal';
}
