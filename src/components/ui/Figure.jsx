import { FIG } from "../../design/tokens";

const T = "fill 300ms ease";

function Figure({ f, size = 130 }) {
  const fig = f || {};
  const layer  = fig.layer  || fig.top   || FIG.neutralSoft;
  const top    = fig.top    || FIG.neutral;
  const bottom = fig.bottom || FIG.neutralDeep;
  const shoes  = fig.shoes  || FIG.neutralDeep;
  const head   = FIG.neutralSoft;

  return (
    <svg
      width={size}
      height={size * 2.15}
      viewBox="0 0 100 215"
      aria-hidden="true"
      focusable="false"
      style={{ display: "block", margin: "0 auto" }}
    >
      {/* ── Bottom — trousers ── */}
      <rect x="27" y="110" width="19" height="86" rx="9.5" fill={bottom} style={{ transition: T }} />
      <rect x="54" y="110" width="19" height="86" rx="9.5" fill={bottom} style={{ transition: T }} />

      {/* ── Top — inner shirt / polo ── */}
      <rect x="28" y="36" width="44" height="78" rx="12" fill={top} style={{ transition: T }} />

      {/* ── Layer — outer jacket / overshirt (widest, over top) ── */}
      <rect x="16" y="34" width="68" height="80" rx="16" fill={layer} style={{ transition: T }} />

      {/* ── Inner collar panel — top visible through open layer ── */}
      <rect x="36" y="34" width="28" height="36" rx="10" fill={top} style={{ transition: T }} />

      {/* ── Neck ── */}
      <rect x="44" y="25" width="12" height="14" rx="5" fill={head} style={{ transition: T }} />

      {/* ── Head — plain abstract oval, no face ── */}
      <ellipse cx="50" cy="16" rx="9" ry="10.5" fill={head} style={{ transition: T }} />

      {/* ── Shoes ── */}
      <rect x="23" y="191" width="25" height="10" rx="5" fill={shoes} style={{ transition: T }} />
      <rect x="52" y="191" width="25" height="10" rx="5" fill={shoes} style={{ transition: T }} />
    </svg>
  );
}

export default Figure;
