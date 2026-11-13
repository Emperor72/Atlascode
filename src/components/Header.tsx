'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';

const programLinks = [
  { href: '/programs/full-stack-web-development/', label: 'Full-Stack Web Development', note: 'Full-time · 12 weeks' },
  { href: '/programs/part-time-web-development/', label: 'Part-Time Web Development', note: 'Evenings & Saturdays · 24 weeks' },
  { href: '/programs/data-analytics/', label: 'Data Analytics', note: 'Full-time · 10 weeks' },
  { href: '/programs/ui-ux-design/', label: 'UI/UX Design', note: 'Full-time · 8 weeks' },
  { href: '/programs/intro-to-coding/', label: 'Intro to Coding', note: 'Beginner weekend workshop' },
];

const mainLinks = [
  { href: '/admissions/', label: 'Admissions' },
  { href: '/tuition-financing/', label: 'Tuition' },
  { href: '/career-services/', label: 'Careers' },
  { href: '/online-learning/', label: 'How It Works' },
  { href: '/blog/', label: 'Blog' },
  { href: '/contact/', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname() || '/';
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.classList.toggle('nav-open', open);
  }, [open]);

  const isActive = (href: string) => pathname === href || (href !== '/' && pathname.startsWith(href));
  const current = (href: string) => (pathname === href ? 'page' : undefined);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="logo" aria-label="Atlas Code: home">
          <Logo />
        </Link>
        <div className="header-tools">
          <ThemeToggle />
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>
        <nav id="site-nav" className={`site-nav${open ? ' is-open' : ''}`} aria-label="Main">
          <ul className="nav-list">
            <li className="has-sub">
              <Link href="/programs/" data-active={isActive('/programs/') || undefined} aria-current={current('/programs/')}>
                Programs
              </Link>
              <ul className="sub-menu">
                {programLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} aria-current={current(l.href)}>
                      <span>{l.label}</span>
                      <small>{l.note}</small>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/upcoming-cohorts/" className="sub-all">
                    See upcoming start dates →
                  </Link>
                </li>
              </ul>
            </li>
            {mainLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} data-active={isActive(l.href) || undefined} aria-current={current(l.href)}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/apply/" className="btn btn-primary btn-sm nav-cta">
            Apply now
          </Link>
        </nav>
      </div>
    </header>
  );
}
