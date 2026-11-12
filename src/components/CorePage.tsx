import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { getCorePage } from '@/content/pages';
import { breadcrumbsFor } from '@/lib/registry';
import { buildMetadata, webPageSchema } from '@/lib/seo';
import { JsonLd } from './JsonLd';
import { PageHero } from './PageHero';
import { Related } from './Cards';

export function coreMetadata(path: string, opts: { noindex?: boolean } = {}): Metadata {
  const p = getCorePage(path);
  return buildMetadata({ title: p.title, description: p.description, path: p.path, noindex: opts.noindex });
}

/** Standard layout for hand-built pages: hero, breadcrumbs, WebPage and Breadcrumb schema, content, related links. */
export function CorePage({
  path,
  children,
  heroExtra,
  schemaType,
}: {
  path: string;
  children: ReactNode;
  heroExtra?: ReactNode;
  schemaType?: string;
}) {
  const page = getCorePage(path);
  const crumbs = breadcrumbsFor(path);
  return (
    <>
      <JsonLd data={webPageSchema({ path, title: page.title, description: page.description, crumbs, type: schemaType })} />
      <PageHero crumbs={crumbs} h1={page.h1} lead={page.lead}>
        {heroExtra}
      </PageHero>
      {children}
      <Related paths={page.related} />
    </>
  );
}
