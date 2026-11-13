import Link from 'next/link';
import { site, whatsappLink } from '@/lib/site';
import { LogoMark } from './Logo';
import { DEMO_NOTICE } from './DemoNotice';

const columns: { title: string; links: [string, string][] }[] = [
  {
    title: 'Programs',
    links: [
      ['/programs/full-stack-web-development/', 'Full-Stack Web Development'],
      ['/programs/part-time-web-development/', 'Part-Time Web Development'],
      ['/programs/data-analytics/', 'Data Analytics Bootcamp'],
      ['/programs/ui-ux-design/', 'UI/UX Design Bootcamp'],
      ['/programs/intro-to-coding/', 'Intro to Coding Workshop'],
      ['/corporate-training/', 'Corporate Training'],
    ],
  },
  {
    title: 'Join Atlas Code',
    links: [
      ['/admissions/', 'Admissions Process'],
      ['/tuition-financing/', 'Tuition & Financing'],
      ['/upcoming-cohorts/', 'Upcoming Start Dates'],
      ['/apply/', 'Apply Now'],
      ['/faq/', 'FAQ'],
    ],
  },
  {
    title: 'Atlas Code',
    links: [
      ['/about/', 'About Us'],
      ['/online-learning/', 'How Online Learning Works'],
      ['/career-services/', 'Career Services'],
      ['/hiring-partners/', 'Hire Our Graduates'],
      ['/blog/', 'Blog'],
      ['/contact/', 'Contact'],
    ],
  },
  {
    title: 'Popular guides',
    links: [
      ['/blog/online-coding-bootcamp-guide/', 'Online Coding Bootcamp Guide'],
      ['/blog/how-to-become-web-developer-uk/', 'Become a Web Developer in the UK'],
      ['/blog/coding-bootcamp-vs-university-degree/', 'Bootcamp vs Degree'],
      ['/blog/remote-developer-jobs-guide/', 'Remote Developer Jobs'],
    ],
  },
];

export function Footer() {
  const socials = Object.entries(site.social).filter(([, url]) => url);
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Link href="/" className="footer-logo" aria-label="Atlas Code: home">
            <LogoMark size={40} />
            <span>
              Atlas<strong>Code</strong>
            </span>
          </Link>
          <p>
            {site.name} is a live online coding bootcamp for learners in {site.marketsLabel}. We train web developers, data analysts and
            UI/UX designers through intensive, project-based programs.
          </p>
          <address className="nap">
            <strong>{site.name}</strong>
            <br />
            <a href={`tel:${site.phoneHref}`}>{site.phone}</a> · <a href={`mailto:${site.email}`}>{site.email}</a>
            <br />
            {site.hoursText}
          </address>
          {socials.length > 0 && (
            <ul className="socials" aria-label="Social media">
              {socials.map(([name, url]) => (
                <li key={name}>
                  <a href={url} rel="noopener" target="_blank">
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
        {columns.map((col) => (
          <nav className="footer-col" key={col.title} aria-label={col.title}>
            <h2>{col.title}</h2>
            <ul>
              {col.links.map(([href, label]) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="footer-notice">
        <div className="container">
          <p>
            <strong>Fictional business notice:</strong> {DEMO_NOTICE} Names, prices, dates, contact details and policies shown on this
            site are placeholders for demonstration purposes.
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>
            © {new Date().getFullYear()} {site.name}, {site.tagline}. All rights reserved.
          </p>
          <ul>
            <li>
              <Link href="/privacy-policy/">Privacy</Link>
            </li>
            <li>
              <Link href="/terms/">Terms</Link>
            </li>
            <li>
              <Link href="/sitemap/">Sitemap</Link>
            </li>
          </ul>
        </div>
      </div>
      <a className="whatsapp-float" href={whatsappLink()} target="_blank" rel="noopener" aria-label="Chat with Atlas Code on WhatsApp">
        <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
          <path
            fill="currentColor"
            d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.6-1.7A13 13 0 1 0 16 3Zm0 23.7a10.7 10.7 0 0 1-5.5-1.5l-.4-.2-3.9 1 1-3.8-.2-.4A10.7 10.7 0 1 1 16 26.7Zm5.9-8c-.3-.2-1.9-1-2.2-1-.3-.1-.5-.2-.7.1l-1 1.2c-.2.2-.4.3-.7.1a8.8 8.8 0 0 1-4.4-3.8c-.3-.6.3-.5 1-1.8.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.9.4 3.6 3.6 0 0 0-1.1 2.7 6.3 6.3 0 0 0 1.3 3.3 14.4 14.4 0 0 0 5.5 4.9c2 .9 2.9 1 3.9.8a3.3 3.3 0 0 0 2.2-1.5 2.7 2.7 0 0 0 .2-1.6c-.1-.1-.3-.2-.6-.3Z"
          />
        </svg>
      </a>
    </footer>
  );
}
