import { ImageResponse } from 'next/og';
import { site } from '@/lib/site';

/** Brand images rendered to PNG at build time (served by the *.png route handlers in src/app). */

function MarkSvg({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40">
      <path d="M5 32 16 15l6 9 4-6 9 14Z" fill="#6366f1" />
      <path d="M14.5 6.5 10 11l4.5 4.5M25.5 6.5 30 11l-4.5 4.5" fill="none" stroke="#22d3ee" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function iconResponse(size: number) {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', background: '#0b1020' }}>
        <MarkSvg size={size} />
      </div>
    ),
    { width: size, height: size },
  );
}

export function ogResponse() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 80px',
          background: 'linear-gradient(160deg, #070b16, #1e1b4b)',
          color: '#fff',
          borderBottom: '16px solid #6366f1',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
          <MarkSvg size={220} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 88, fontWeight: 700 }}>{site.name}</div>
            <div style={{ fontSize: 44, color: '#22d3ee' }}>Live Online Coding Bootcamp · UK · US · Canada</div>
          </div>
        </div>
        <div style={{ fontSize: 34, marginTop: 70 }}>Full-Stack Web Development · Data Analytics · UI/UX Design</div>
        <div style={{ fontSize: 30, marginTop: 16, color: '#6366f1' }}>Full-time & part-time · Career support · Learn from anywhere</div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
