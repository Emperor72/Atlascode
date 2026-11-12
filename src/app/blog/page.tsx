import Link from 'next/link';
import { posts } from '@/content/blog';
import { CorePage, coreMetadata } from '@/components/CorePage';
import { CtaBand, PostCard } from '@/components/Cards';

const PATH = '/blog/';
export const metadata = coreMetadata(PATH);

const categories = ['Guides', 'Careers', 'Learning'] as const;

export default function BlogIndexPage() {
  return (
    <CorePage path={PATH} schemaType="CollectionPage">
      <section className="section">
        <div className="container">
          <nav className="toc" aria-label="Categories">
            <p className="toc-title">Browse by topic</p>
            <ol>
              {categories.map((c) => (
                <li key={c}>
                  <a href={`#${c.toLowerCase()}`}>{c}</a>
                </li>
              ))}
            </ol>
          </nav>
          <h2 className="section-title" id="latest">
            Latest articles
          </h2>
          <div className="grid grid-3">
            {posts.slice(0, 3).map((p) => (
              <PostCard key={p.meta.slug} meta={p.meta} />
            ))}
          </div>
        </div>
      </section>
      {categories.map((cat, i) => {
        const list = posts.filter((p) => p.meta.category === cat);
        if (!list.length) return null;
        return (
          <section className={`section${i % 2 === 0 ? ' alt' : ''}`} key={cat} aria-labelledby={cat.toLowerCase()}>
            <div className="container">
              <h2 className="section-title" id={cat.toLowerCase()}>
                {cat}
              </h2>
              <div className="grid grid-3">
                {list.map((p) => (
                  <PostCard key={p.meta.slug} meta={p.meta} />
                ))}
              </div>
            </div>
          </section>
        );
      })}
      <section className="section">
        <div className="container narrow">
          <p>
            Looking for something specific? Start with our pillar guide to <Link href="/blog/learn-to-code-agadir-guide/">learning to code in Agadir</Link>,
            compare our <Link href="/programs/">bootcamp programs</Link> or browse the <Link href="/sitemap/">full sitemap</Link>.
          </p>
        </div>
      </section>
      <CtaBand />
    </CorePage>
  );
}
