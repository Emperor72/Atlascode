import Link from 'next/link';
import type { PostMeta, ProgramMeta } from '@/lib/types';
import { formatDate } from '@/lib/format';
import { findPage } from '@/lib/registry';

export function PostCard({ meta }: { meta: PostMeta }) {
  const href = `/blog/${meta.slug}/`;
  return (
    <article className="card post-card">
      <p className="post-meta">
        <span className="badge">{meta.category}</span> <time dateTime={meta.date}>{formatDate(meta.date)}</time>
      </p>
      <h3>
        <Link href={href}>{meta.h1}</Link>
      </h3>
      <p>{meta.description}</p>
      <Link className="card-link" href={href} aria-label={`Read: ${meta.h1}`}>
        Read the article
      </Link>
    </article>
  );
}

export function ProgramCard({ meta, price, nextStart }: { meta: ProgramMeta; price: string; nextStart: string }) {
  const href = `/programs/${meta.slug}/`;
  return (
    <article className="card program-card">
      <span className="badge">{meta.badge}</span>
      <h3>
        <Link href={href}>{meta.crumb}</Link>
      </h3>
      <p>{meta.summary}</p>
      <dl className="card-facts">
        <div>
          <dt>Tuition</dt>
          <dd>{price}</dd>
        </div>
        <div>
          <dt>Next start</dt>
          <dd>{nextStart}</dd>
        </div>
      </dl>
      <Link className="card-link" href={href} aria-label={`Explore the ${meta.crumb} program`}>
        Explore the program
      </Link>
    </article>
  );
}

/** "Keep exploring" internal-linking block, built from the page registry. */
export function Related({ paths, title = 'Keep exploring' }: { paths?: string[]; title?: string }) {
  const pages = (paths ?? []).map((p) => findPage(p)).filter((p): p is NonNullable<typeof p> => Boolean(p));
  if (!pages.length) return null;
  return (
    <section className="section related" aria-labelledby="related-title">
      <div className="container">
        <h2 id="related-title" className="section-title">
          {title}
        </h2>
        <div className="grid grid-3">
          {pages.map((p) => {
            const label = p.section === 'blog' ? 'Read the article' : p.section === 'programs' ? 'Explore the program' : 'Learn more';
            return (
              <article className="card" key={p.path}>
                <h3>
                  <Link href={p.path}>{p.h1}</Link>
                </h3>
                <p>{p.description}</p>
                <Link className="card-link" href={p.path} aria-label={`${label}: ${p.crumb}`}>
                  {label}
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CtaBand({
  title = 'Ready to write your first line of code?',
  text = 'Applying takes five minutes and commits you to nothing. An advisor will call you to talk through your goals, the right program and financing.',
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="cta-band">
      <div className="container">
        <h2>{title}</h2>
        <p>{text}</p>
        <Link className="btn btn-primary" href="/apply/">
          Start your application
        </Link>{' '}
        <Link className="btn btn-ghost" href="/contact/">
          Talk to an advisor
        </Link>
      </div>
    </section>
  );
}
