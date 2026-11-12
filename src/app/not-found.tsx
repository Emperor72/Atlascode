import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: { absolute: 'Page not found | Atlas Code' },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container narrow">
        <p className="code">404</p>
        <h1>This page took a wrong turn</h1>
        <p>The page you are looking for doesn’t exist or has moved. Here are some good places to continue:</p>
        <div className="hero-actions" style={{ justifyContent: 'center' }}>
          <Link className="btn btn-primary" href="/">
            Home
          </Link>
          <Link className="btn btn-ghost" href="/programs/">
            Our programs
          </Link>
          <Link className="btn btn-ghost" href="/blog/">
            Blog
          </Link>
          <Link className="btn btn-ghost" href="/sitemap/">
            Sitemap
          </Link>
        </div>
      </div>
    </section>
  );
}
