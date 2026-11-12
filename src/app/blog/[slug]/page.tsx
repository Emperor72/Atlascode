import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { posts, getPost } from '@/content/blog';
import { breadcrumbsFor } from '@/lib/registry';
import { articleSchema, buildMetadata, webPageSchema } from '@/lib/seo';
import { formatDate } from '@/lib/format';
import { JsonLd } from '@/components/JsonLd';
import { PageHero } from '@/components/PageHero';
import { Related } from '@/components/Cards';

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.meta.slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const { meta } = post;
  return buildMetadata({
    title: meta.title,
    description: meta.description,
    path: `/blog/${meta.slug}/`,
    type: 'article',
    publishedTime: meta.date,
    modifiedTime: meta.modified,
    section: meta.category,
  });
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const { meta, Content } = post;
  const path = `/blog/${meta.slug}/`;
  const crumbs = breadcrumbsFor(path);
  const updated = meta.modified && meta.modified !== meta.date ? meta.modified : undefined;
  return (
    <>
      <JsonLd data={webPageSchema({ path, title: meta.title, description: meta.description, crumbs })} />
      <JsonLd data={articleSchema(meta)} />
      <PageHero
        crumbs={crumbs}
        h1={meta.h1}
        lead={meta.lead}
        meta={
          <p className="post-meta">
            <span className="badge">{meta.category}</span> <time dateTime={meta.date}>{formatDate(meta.date)}</time> · {meta.readTime}
            {updated && (
              <>
                {' '}
                · Updated <time dateTime={updated}>{formatDate(updated)}</time>
              </>
            )}
          </p>
        }
      />
      <Content />
      <Related paths={meta.related} title="Related reading" />
    </>
  );
}
