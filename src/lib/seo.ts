import type { Metadata } from 'next';
import { site } from './site';
import type { FaqItem, PostMeta, ProgramMeta } from './types';

export const absoluteUrl = (path = '/') => `${site.url}${path}`;
export const ORG_ID = `${site.url}/#organization`;
export const WEBSITE_ID = `${site.url}/#website`;
export const OG_IMAGE = '/opengraph-image.png';

interface MetaInput {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  noindex?: boolean;
}

/** Builds the full Next.js Metadata object: canonical, hreflang, Open Graph, Twitter and robots. */
export function buildMetadata(m: MetaInput): Metadata {
  return {
    title: { absolute: m.title },
    description: m.description,
    alternates: {
      canonical: m.path,
      languages: { en: m.path, 'x-default': m.path },
      types: { 'application/rss+xml': [{ url: '/blog/feed.xml', title: `${site.name} Blog` }] },
    },
    robots: m.noindex
      ? { index: false, follow: true }
      : { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
    openGraph: {
      type: m.type ?? 'website',
      siteName: site.name,
      locale: site.locale,
      title: m.title,
      description: m.description,
      url: m.path,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${site.name}: ${site.tagline}` }],
      ...(m.type === 'article'
        ? { publishedTime: m.publishedTime, modifiedTime: m.modifiedTime ?? m.publishedTime, section: m.section }
        : {}),
    },
    twitter: { card: 'summary_large_image', title: m.title, description: m.description, images: [OG_IMAGE] },
  };
}

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: site.address.street,
  addressLocality: site.address.city,
  addressRegion: site.address.region,
  postalCode: site.address.postalCode,
  addressCountry: site.address.country,
};

/** Organization + LocalBusiness + WebSite: rendered once, in the root layout. */
export function organizationSchema() {
  const sameAs = Object.values(site.social).filter(Boolean);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['EducationalOrganization', 'LocalBusiness'],
        '@id': ORG_ID,
        name: site.name,
        alternateName: `${site.name} Bootcamp`,
        url: `${site.url}/`,
        logo: absoluteUrl('/icon.png'),
        image: absoluteUrl(OG_IMAGE),
        description: site.description,
        telephone: site.phone,
        email: site.email,
        priceRange: 'MAD',
        address: postalAddress,
        geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
        openingHoursSpecification: [
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '19:00' },
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '09:00', closes: '13:00' },
        ],
        areaServed: ['Agadir', 'Inezgane', 'Aït Melloul', 'Taroudant', 'Tiznit', 'Souss-Massa', 'Morocco'],
        knowsLanguage: ['en', 'fr', 'ar'],
        ...(sameAs.length ? { sameAs } : {}),
      },
      { '@type': 'WebSite', '@id': WEBSITE_ID, url: `${site.url}/`, name: site.name, inLanguage: site.lang, publisher: { '@id': ORG_ID } },
    ],
  };
}

export interface Crumb {
  name: string;
  path: string;
}

export function webPageSchema(opts: { path: string; title: string; description: string; crumbs: Crumb[]; type?: string }) {
  const url = absoluteUrl(opts.path);
  const graph: Record<string, unknown>[] = [
    {
      '@type': opts.type ?? 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: opts.title,
      description: opts.description,
      inLanguage: site.lang,
      isPartOf: { '@id': WEBSITE_ID },
      about: { '@id': ORG_ID },
      ...(opts.crumbs.length > 1 ? { breadcrumb: { '@id': `${url}#breadcrumb` } } : {}),
    },
  ];
  if (opts.crumbs.length > 1) {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: opts.crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: absoluteUrl(c.path) })),
    });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}

export function courseSchema(meta: ProgramMeta) {
  const url = absoluteUrl(`/programs/${meta.slug}/`);
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': `${url}#course`,
    name: meta.course.name,
    description: meta.description,
    url,
    inLanguage: ['en', 'fr'],
    provider: { '@type': 'EducationalOrganization', '@id': ORG_ID, name: site.name, sameAs: `${site.url}/` },
    educationalCredentialAwarded: `${site.name} Certificate of Completion`,
    timeRequired: `PT${meta.course.hours}H`,
    offers: [
      {
        '@type': 'Offer',
        category: 'Paid',
        price: meta.course.price,
        priceCurrency: 'MAD',
        availability: 'https://schema.org/InStock',
        url: absoluteUrl('/apply/'),
      },
    ],
    hasCourseInstance: [
      {
        '@type': 'CourseInstance',
        courseMode: meta.course.mode,
        courseWorkload: `PT${meta.course.hours}H`,
        courseSchedule: { '@type': 'Schedule', duration: `P${meta.course.weeks}W`, repeatFrequency: 'Weekly' },
        location: { '@type': 'Place', name: `${site.name} campus, ${site.address.city}`, address: postalAddress },
      },
    ],
  };
}

export function articleSchema(meta: PostMeta) {
  const url = absoluteUrl(`/blog/${meta.slug}/`);
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: meta.h1,
    description: meta.description,
    datePublished: meta.date,
    dateModified: meta.modified ?? meta.date,
    articleSection: meta.category,
    image: absoluteUrl(OG_IMAGE),
    inLanguage: site.lang,
    mainEntityOfPage: { '@id': `${url}#webpage` },
    author: { '@type': 'Organization', '@id': ORG_ID, name: site.name },
    publisher: { '@type': 'Organization', '@id': ORG_ID, name: site.name },
  };
}

export function faqSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })),
  };
}
