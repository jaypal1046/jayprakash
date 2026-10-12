export default function Logo({ size = 42, className = '' }) {
  return (
    <span
      className={`brand-logo-wrap ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        flexShrink: 0
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id="jp-bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#142c26" />
            <stop offset="50%" stopColor="#0f221d" />
            <stop offset="100%" stopColor="#081411" />
          </linearGradient>
          <linearGradient id="jp-border-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#b7f27d" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#15803d" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.25" />
          </linearGradient>
          <linearGradient id="jp-glyph-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#ecf4f0" />
          </linearGradient>
          <linearGradient id="jp-dot-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d4ff88" />
            <stop offset="100%" stopColor="#8da435" />
          </linearGradient>
          <filter id="jp-dot-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#b7f27d" floodOpacity="0.65" />
          </filter>
        </defs>

        {/* Squircle Base Frame */}
        <rect
          x="1"
          y="1"
          width="46"
          height="46"
          rx="13"
          fill="url(#jp-bg-grad)"
          stroke="url(#jp-border-grad)"
          strokeWidth="1.5"
        />

        {/* Monogram Glyph: J */}
        <path
          d="M18.5 13.5v16c0 3.6-2.9 6.5-6.5 6.5-2.2 0-4.1-1.1-5.3-2.8"
          stroke="url(#jp-glyph-grad)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Monogram Glyph: P */}
        <path
          d="M26.5 35.5V13.5h7.5c4.1 0 7.5 3.1 7.5 7s-3.4 7-7.5 7h-7.5"
          stroke="url(#jp-glyph-grad)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Live Status & Precision Dot */}
        <circle cx="39" cy="10" r="3.2" fill="url(#jp-dot-grad)" filter="url(#jp-dot-glow)" />
      </svg>
    </span>
  );
}
