import Link from 'next/link';
import { allPages } from '@/lib/registry';
import { CorePage, coreMetadata } from '@/components/CorePage';
import type { PageEntry } from '@/lib/types';

const PATH = '/sitemap/';
export const metadata = coreMetadata(PATH);

const sections: { key: PageEntry['section']; title: string }[] = [
  { key: 'main', title: 'Main pages' },
  { key: 'programs', title: 'Programs' },
  { key: 'blog', title: 'Blog' },
  { key: 'legal', title: 'Legal & utility' },
];

export default function HtmlSitemapPage() {
  const pages = allPages();
  return (
    <CorePage path={PATH}>
      <section className="section">
        <div className="container">
          <div className="grid grid-2 sitemap-grid">
            {sections.map((s) => (
              <section key={s.key} aria-labelledby={`sm-${s.key}`}>
                <h2 id={`sm-${s.key}`}>{s.title}</h2>
                <ul>
                  {pages
                    .filter((p) => p.section === s.key)
                    .sort((a, b) => b.priority - a.priority)
                    .map((p) => (
                      <li key={p.path}>
                        <Link href={p.path}>{p.h1}</Link>
                      </li>
                    ))}
                </ul>
              </section>
            ))}
          </div>
          <p style={{ marginTop: '2rem' }}>
            Search engines can use the <a href="/sitemap.xml">XML sitemap</a> and the <a href="/blog/feed.xml">blog RSS feed</a>.
          </p>
        </div>
      </section>
    </CorePage>
  );
}
