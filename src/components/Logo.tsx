/** Atlas Code mark: an Atlas peak framed by code brackets. */
export function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true" focusable="false">
      <rect width="40" height="40" rx="10" fill="#0f2a44" />
      <path d="M5 32 16 15l6 9 4-6 9 14Z" fill="#e8743b" />
      <path d="M14.5 6.5 10 11l4.5 4.5M25.5 6.5 30 11l-4.5 4.5" fill="none" stroke="#f6c453" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Logo() {
  return (
    <span className="logo-inner">
      <LogoMark />
      <span className="logo-text">
        Atlas<strong>Code</strong>
      </span>
    </span>
  );
}
