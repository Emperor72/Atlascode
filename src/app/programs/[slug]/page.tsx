import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { programs, getProgram } from '@/content/programs';
import { breadcrumbsFor } from '@/lib/registry';
import { buildMetadata, courseSchema, webPageSchema } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import { HeroActions, PageHero } from '@/components/PageHero';
import { Related } from '@/components/Cards';

export const dynamicParams = false;

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.meta.slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) return {};
  const { meta } = program;
  return buildMetadata({ title: meta.title, description: meta.description, path: `/programs/${meta.slug}/` });
}

export default async function ProgramPage({ params }: Params) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) notFound();
  const { meta, Content } = program;
  const path = `/programs/${meta.slug}/`;
  const crumbs = breadcrumbsFor(path);
  return (
    <>
      <JsonLd data={webPageSchema({ path, title: meta.title, description: meta.description, crumbs })} />
      <JsonLd data={courseSchema(meta)} />
      <PageHero crumbs={crumbs} h1={meta.h1} lead={meta.lead} meta={<p className="post-meta"><span className="badge">{meta.badge}</span></p>}>
        <HeroActions />
      </PageHero>
      <Content />
      <Related paths={meta.related} />
    </>
  );
}
