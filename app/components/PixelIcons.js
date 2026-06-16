export function PixelHeart({ className = "w-6 h-6", color = "#e8a0a8" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} style={{ imageRendering: "pixelated" }}>
      <g fill={color}>
        <rect x="20" y="0" width="20" height="20"/>
        <rect x="60" y="0" width="20" height="20"/>
        <rect x="0" y="20" width="20" height="20"/>
        <rect x="20" y="20" width="20" height="20"/>
        <rect x="40" y="20" width="20" height="20"/>
        <rect x="60" y="20" width="20" height="20"/>
        <rect x="80" y="20" width="20" height="20"/>
        <rect x="0" y="40" width="20" height="20"/>
        <rect x="20" y="40" width="20" height="20"/>
        <rect x="40" y="40" width="20" height="20"/>
        <rect x="60" y="40" width="20" height="20"/>
        <rect x="80" y="40" width="20" height="20"/>
        <rect x="20" y="60" width="20" height="20"/>
        <rect x="40" y="60" width="20" height="20"/>
        <rect x="60" y="60" width="20" height="20"/>
        <rect x="40" y="80" width="20" height="20"/>
      </g>
    </svg>
  );
}

export function PixelSparkle({ className = "w-6 h-6", color = "#c4c4c0" }) {
  return (
    <svg viewBox="0 0 80 90" className={className} style={{ imageRendering: "pixelated" }}>
      <g fill={color}>
        <rect x="36" y="0" width="8" height="8"/>
        <rect x="28" y="8" width="8" height="8"/>
        <rect x="44" y="8" width="8" height="8"/>
        <rect x="36" y="16" width="8" height="8"/>
        <rect x="0" y="36" width="8" height="8"/>
        <rect x="8" y="36" width="8" height="8"/>
        <rect x="16" y="44" width="8" height="8"/>
        <rect x="24" y="36" width="8" height="8"/>
        <rect x="36" y="36" width="8" height="8"/>
        <rect x="28" y="44" width="8" height="8"/>
        <rect x="44" y="44" width="8" height="8"/>
        <rect x="60" y="36" width="8" height="8"/>
        <rect x="68" y="36" width="8" height="8"/>
        <rect x="56" y="44" width="8" height="8"/>
        <rect x="36" y="60" width="8" height="8"/>
        <rect x="28" y="68" width="8" height="8"/>
        <rect x="44" y="68" width="8" height="8"/>
        <rect x="36" y="76" width="8" height="8"/>
      </g>
    </svg>
  );
}

export function PixelCamera({ className = "w-6 h-6", color = "#2c2c2a" }) {
  return (
    <svg viewBox="0 0 160 140" className={className} style={{ imageRendering: "pixelated" }}>
      <g fill={color}>
        <rect x="0" y="40" width="160" height="80" rx="4"/>
        <rect x="50" y="20" width="60" height="20"/>
      </g>
      <circle cx="80" cy="80" r="22" fill="#fafaf8"/>
      <circle cx="80" cy="80" r="14" fill={color}/>
    </svg>
  );
}