'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { site, whatsappLink } from '@/lib/site';

/**
 * Live chat assistant (demo). Runs entirely in the browser: answers common questions from site data,
 * with quick replies and a hand-off to WhatsApp / the contact page. Nothing typed here is sent anywhere.
 */

type LinkItem = { href: string; label: string; external?: boolean };
type Msg = { from: 'bot' | 'user'; text: string; links?: LinkItem[] };
type Topic = { id: string; label: string; keywords: string[]; answer: () => Omit<Msg, 'from'> };

const P = site.programs;

const topics: Topic[] = [
  {
    id: 'programs',
    label: 'Programs & prices',
    keywords: ['program', 'course', 'price', 'cost', 'tuition', 'fee', 'how much', '$', 'expensive', 'bootcamp'],
    answer: () => ({
      text: `We run five live online programs: Full-Stack Web Development (${P.fullstack.priceLabel}, 12 weeks full-time), Part-Time Web Development (${P.parttime.priceLabel}, 24 weeks), Data Analytics (${P.data.priceLabel}, 10 weeks), UI/UX Design (${P.uxui.priceLabel}, 8 weeks) and the Intro to Coding workshop (${P.intro.priceLabel}).`,
      links: [
        { href: '/programs/', label: 'Compare programs' },
        { href: '/tuition-financing/', label: 'Tuition & financing' },
      ],
    }),
  },
  {
    id: 'dates',
    label: 'Next start dates',
    keywords: ['start', 'date', 'when', 'cohort', 'next', 'begin', 'intake'],
    answer: () => ({
      text: `Next starts: Full-Stack on ${P.fullstack.nextStart}, Part-Time on ${P.parttime.nextStart}, Data Analytics on ${P.data.nextStart} and UI/UX Design on ${P.uxui.nextStart}. Intro to Coding runs ${P.intro.nextStart}.`,
      links: [{ href: '/upcoming-cohorts/', label: 'All upcoming cohorts' }],
    }),
  },
  {
    id: 'timezones',
    label: 'Time zones',
    keywords: ['time zone', 'timezone', 'uk', 'us', 'usa', 'canada', 'eastern', 'gmt', 'bst', 'hours', 'schedule', 'evening'],
    answer: () => ({
      text: `Each cohort runs live in one time zone: ${site.timezones.uk} for the UK and Europe, or ${site.timezones.na} for the US and Canada. Full-time runs Mon–Fri 9:00–17:30; part-time runs Tue & Thu evenings plus Saturday mornings.`,
      links: [{ href: '/online-learning/', label: 'How live online learning works' }],
    }),
  },
  {
    id: 'online',
    label: 'Is it really live?',
    keywords: ['online', 'live', 'remote', 'record', 'video', 'camera', 'in person', 'campus', 'zoom'],
    answer: () => ({
      text: 'Yes. Classes are live on video with an instructor and a small cohort, plus remote pair programming and teaching assistants on call. Key sessions are recorded so you can revisit them.',
      links: [{ href: '/online-learning/', label: 'See a typical day' }],
    }),
  },
  {
    id: 'apply',
    label: 'How do I apply?',
    keywords: ['apply', 'application', 'admission', 'join', 'enrol', 'enroll', 'requirement', 'experience', 'beginner', 'degree'],
    answer: () => ({
      text: `No degree or coding experience needed. Apply online (5 minutes), have a 30-minute video call with an advisor, complete a short challenge, then secure your seat with a ${site.deposit} deposit.`,
      links: [
        { href: '/apply/', label: 'Start an application' },
        { href: '/admissions/', label: 'Admissions process' },
      ],
    }),
  },
  {
    id: 'payment',
    label: 'Payment plans',
    keywords: ['instal', 'payment', 'plan', 'scholarship', 'finance', 'loan', 'employer', 'discount', 'pay'],
    answer: () => ({
      text: `After a ${site.deposit} deposit you can spread tuition over interest-free monthly instalments. Early-bird discounts, partial scholarships and employer sponsorship are also available.`,
      links: [{ href: '/tuition-financing/', label: 'Financing options' }],
    }),
  },
  {
    id: 'jobs',
    label: 'Career support',
    keywords: ['job', 'career', 'hire', 'hired', 'salary', 'cv', 'resume', 'interview', 'work', 'guarantee'],
    answer: () => ({
      text: 'Career support is built into every program: CV/résumé and LinkedIn reviews, portfolio coaching, mock interviews and employer introductions. We don’t guarantee a job, but we support you during and after the bootcamp.',
      links: [{ href: '/career-services/', label: 'Career services' }],
    }),
  },
  {
    id: 'human',
    label: 'Talk to a person',
    keywords: ['human', 'person', 'advisor', 'agent', 'call', 'phone', 'whatsapp', 'email', 'contact', 'talk', 'speak'],
    answer: () => ({
      text: 'Happy to connect you with an admissions advisor. Message us on WhatsApp or use the contact form, and we’ll reply within one working day.',
      links: [
        { href: whatsappLink(), label: 'Open WhatsApp', external: true },
        { href: '/contact/', label: 'Contact form' },
      ],
    }),
  },
];

const greeting: Msg = {
  from: 'bot',
  text: `Hi! I’m the ${site.name} assistant. Ask me about programs, prices, start dates or how live online classes work.`,
};

function findTopic(input: string): Topic | undefined {
  const q = input.toLowerCase();
  let best: { t: Topic; score: number } | undefined;
  for (const t of topics) {
    const score = t.keywords.reduce((s, k) => {
      // Short keywords ("us", "uk", "cv") must match a whole word; longer ones may match inside words ("payments").
      const hit = k.length <= 3 ? new RegExp(`(^|[^a-z])${k.replace(/[$]/g, '\\$')}([^a-z]|$)`).test(q) : q.includes(k);
      return hit ? s + k.length : s;
    }, 0);
    if (score > 0 && (!best || score > best.score)) best = { t, score };
  }
  return best?.t;
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([greeting]);
  const [typing, setTyping] = useState(false);
  const [draft, setDraft] = useState('');
  const [unread, setUnread] = useState(true);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, typing]);

  useEffect(() => {
    if (!open) return;
    setUnread(false);
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const reply = (userText: string, topic?: Topic) => {
    setMessages((m) => [...m, { from: 'user', text: userText }]);
    setTyping(true);
    const t = topic ?? findTopic(userText);
    const answer: Omit<Msg, 'from'> = t
      ? t.answer()
      : {
          text: 'I’m not sure about that one. An advisor can help: message us on WhatsApp or send a note through the contact form.',
          links: [
            { href: whatsappLink(userText), label: 'Ask on WhatsApp', external: true },
            { href: '/faq/', label: 'Browse the FAQ' },
          ],
        };
    window.setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { from: 'bot', ...answer }]);
    }, 650 + Math.min(answer.text.length * 6, 900));
  };

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text || typing) return;
    setDraft('');
    reply(text);
  };

  return (
    <div className="chat">
      {open && (
        <section className="chat-panel" id="chat-panel" aria-label={`${site.name} chat assistant`}>
          <header className="chat-head">
            <span className="chat-avatar" aria-hidden="true">
              AC
            </span>
            <div>
              <strong>{site.name} assistant</strong>
              <span className="chat-status">
                <span className="chat-dot" /> Online · automated demo
              </span>
            </div>
            <button type="button" className="chat-close" onClick={() => setOpen(false)} aria-label="Close chat">
              ×
            </button>
          </header>

          <div className="chat-body" ref={listRef} aria-live="polite">
            {messages.map((m, i) => (
              <div key={i} className={`chat-msg ${m.from}`}>
                <p>{m.text}</p>
                {m.links && (
                  <div className="chat-links">
                    {m.links.map((l) =>
                      l.external ? (
                        <a key={l.label} href={l.href} target="_blank" rel="noopener">
                          {l.label} ↗
                        </a>
                      ) : (
                        <Link key={l.label} href={l.href} onClick={() => setOpen(false)}>
                          {l.label} →
                        </Link>
                      ),
                    )}
                  </div>
                )}
              </div>
            ))}
            {typing && (
              <div className="chat-msg bot chat-typing" aria-label="Assistant is typing">
                <span />
                <span />
                <span />
              </div>
            )}
          </div>

          <div className="chat-chips">
            {topics.map((t) => (
              <button key={t.id} type="button" onClick={() => reply(t.label, t)} disabled={typing}>
                {t.label}
              </button>
            ))}
          </div>

          <form className="chat-input" onSubmit={send}>
            <label htmlFor="chat-text" className="sr-only">
              Type your question
            </label>
            <input
              id="chat-text"
              ref={inputRef}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Type your question…"
              autoComplete="off"
              maxLength={300}
            />
            <button type="submit" aria-label="Send" disabled={!draft.trim() || typing}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z" />
              </svg>
            </button>
          </form>
          <p className="chat-foot">Demo assistant: replies are automated and nothing you type is sent or stored.</p>
        </section>
      )}

      <button
        type="button"
        className="chat-launcher"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="chat-panel"
        aria-label={open ? 'Close live chat' : 'Open live chat'}
      >
        {open ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.9A8 8 0 1 1 21 12Z" />
            <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" />
          </svg>
        )}
        {unread && !open && <span className="chat-badge">1</span>}
      </button>
    </div>
  );
}
