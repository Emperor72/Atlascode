'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Progressive 3D enhancements. Content is fully visible without JS (SEO-safe);
 * effects are skipped for users who prefer reduced motion.
 * - Scroll reveal: cards, section titles and timeline steps tilt up into place.
 * - Tilt: cards rotate in 3D toward the pointer (mouse / pen only).
 * - Hero parallax: the home 3D scene follows the pointer.
 */
export function Effects() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    document.documentElement.classList.add('js-fx');

    // Scroll reveal
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>('main .card, main .section-title, main .timeline > li, main .key-facts, main .table-wrap'),
    ).filter((el) => el.getBoundingClientRect().top > window.innerHeight * 0.9);
    targets.forEach((el) => el.classList.add('reveal'));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          const siblings = el.parentElement ? Array.from(el.parentElement.children) : [];
          el.style.transitionDelay = `${Math.min(siblings.indexOf(el), 5) * 70}ms`;
          el.classList.add('is-visible');
          io.unobserve(el);
          // Drop reveal classes afterwards so hover tilt can take over the transform.
          window.setTimeout(() => {
            el.classList.remove('reveal', 'is-visible');
            el.style.transitionDelay = '';
          }, 1200);
        });
      },
      { rootMargin: '0px 0px -8% 0px' },
    );
    targets.forEach((el) => io.observe(el));

    // Card tilt
    const onMove = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return;
      const t = e.target;
      const card = t instanceof Element ? t.closest<HTMLElement>('main .card') : null;
      document.querySelectorAll<HTMLElement>('.card.is-tilting').forEach((c) => {
        if (c !== card) reset(c);
      });
      if (!card) return;
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      card.classList.add('is-tilting');
      card.style.setProperty('--ty', `${(x - 0.5) * 10}deg`);
      card.style.setProperty('--tx', `${(0.5 - y) * 10}deg`);
      card.style.setProperty('--mx', `${x * 100}%`);
      card.style.setProperty('--my', `${y * 100}%`);
    };
    const reset = (c: HTMLElement) => {
      c.classList.remove('is-tilting');
      c.style.removeProperty('--tx');
      c.style.removeProperty('--ty');
    };

    // Hero scene parallax
    const scene = document.querySelector<HTMLElement>('.scene-inner');
    const onHero = (e: PointerEvent) => {
      if (!scene) return;
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      scene.style.setProperty('--ry', `${-14 + x * 16}deg`);
      scene.style.setProperty('--rx', `${8 - y * 12}deg`);
    };

    document.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointermove', onHero, { passive: true });
    return () => {
      io.disconnect();
      document.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointermove', onHero);
    };
  }, [pathname]);

  return null;
}
