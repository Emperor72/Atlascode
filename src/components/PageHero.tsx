import Link from 'next/link';
import type { ReactNode } from 'react';
import type { Crumb } from '@/lib/seo';

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  if (crumbs.length < 2) return null;
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {crumbs.map((c, i) => (
          <li key={c.path}>
            {i === crumbs.length - 1 ? <span aria-current="page">{c.name}</span> : <Link href={c.path}>{c.name}</Link>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

interface Props {
  crumbs: Crumb[];
  h1: string;
  lead?: string;
  /** Extra line above the H1 (e.g. post date). */
  meta?: ReactNode;
  /** Buttons or facts under the lead. */
  children?: ReactNode;
}

export function PageHero({ crumbs, h1, lead, meta, children }: Props) {
  return (
    <section className="page-hero">
      <div className="container">
        <Breadcrumbs crumbs={crumbs} />
        {meta}
        <h1>{h1}</h1>
        {lead && <p className="lead">{lead}</p>}
        {children}
      </div>
    </section>
  );
}

export function HeroActions() {
  return (
    <div className="hero-actions">
      <Link className="btn btn-primary" href="/apply/">
        Apply now
      </Link>
      <Link className="btn btn-ghost" href="/contact/">
        Talk to an advisor
      </Link>
    </div>
  );
}
