import { FIG, T } from "../../design/tokens";
import { motion } from "../../design/motion";

const fillMotion = {
  transition: motion.safeTransition("fill 300ms ease, opacity 300ms ease, transform 300ms ease"),
};

const surfaceMotion = {
  transition: motion.safeTransition("opacity 300ms ease, transform 300ms ease"),
};

/**
 * Editorial modular outfit silhouette.
 * Focuses on garment color relationships rather than a cartoon body.
 *
 * @param {object} props
 * @param {{top?: string, bottom?: string, socks?: string, shoes?: string, belt?: string, layer?: string | null, accent?: string}} props.f
 * @param {number} [props.size=148]
 * @param {string} [props.skin]
 * @param {string} [props.hair]
 */
function Figure({ f, size = 148, skin = FIG.skin, hair = FIG.hair }) {
  const figure = f || {};
  const layerFill = figure.layer || figure.top || FIG.neutral;
  const topFill = figure.top || FIG.neutral;
  const bottomFill = figure.bottom || FIG.neutralDeep;
  const socksFill = figure.socks || FIG.neutralSoft;
  const shoesFill = figure.shoes || FIG.neutralDeep;
  const beltFill = figure.belt || figure.accent || shoesFill;
  const hasLayer = Boolean(figure.layer);
  const uid = `figure-${String(topFill + bottomFill + shoesFill + layerFill).replace(/[^a-zA-Z0-9]/g, "")}`;

  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 180 240"
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
      style={{
        display: "block",
        width: "min(100%, var(--app-figure-size, 168px))",
        maxWidth: size,
        margin: "0 auto",
      }}
    >
      <defs>
        <linearGradient id={`${uid}-top`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={T.bgCard} stopOpacity="0.22" />
          <stop offset="0.42" stopColor={topFill} stopOpacity="1" />
          <stop offset="1" stopColor={T.bgInk} stopOpacity="0.18" />
        </linearGradient>
        <linearGradient id={`${uid}-layer`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={T.bgCard} stopOpacity="0.18" />
          <stop offset="0.48" stopColor={layerFill} stopOpacity="1" />
          <stop offset="1" stopColor={T.bgInk} stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id={`${uid}-bottom`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={T.bgCard} stopOpacity="0.14" />
          <stop offset="0.28" stopColor={bottomFill} stopOpacity="1" />
          <stop offset="1" stopColor={T.bgInk} stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id={`${uid}-shoe`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={T.bgInk} stopOpacity="0.18" />
          <stop offset="0.55" stopColor={shoesFill} stopOpacity="1" />
          <stop offset="1" stopColor={T.bgCard} stopOpacity="0.12" />
        </linearGradient>
        <pattern id={`${uid}-weave`} width="6" height="6" patternUnits="userSpaceOnUse">
          <path d="M0 1.5h6M1.5 0v6" stroke={T.bgCard} strokeWidth="0.45" opacity="0.22" />
        </pattern>
      </defs>

      <ellipse cx="90" cy="224" rx="54" ry="7" fill={T.bgSubtle} opacity="0.82" />

      <path d="M71 42c2-19 35-19 38 0 2 13-6 25-19 25S69 55 71 42Z" fill={skin} style={fillMotion} />
      <path
        d="M70 42c4-18 28-26 40-9 4 6 5 14 2 22-6-8-15-13-29-12-5 0-9 1-13-1Z"
        fill={hair}
        opacity="0.95"
        style={fillMotion}
      />
      <path d="M72 68c10 8 26 8 36 0l6 17H66l6-17Z" fill={skin} opacity="0.88" style={fillMotion} />

      <path
        d="M51 90c9-17 22-25 39-25s30 8 39 25l-8 72H59L51 90Z"
        fill={`url(#${uid}-layer)`}
        opacity={hasLayer ? "1" : "0.2"}
        style={fillMotion}
      />
      <path d="M68 82c6-7 13-10 22-10s16 3 22 10l-8 77H76L68 82Z" fill={`url(#${uid}-top)`} style={fillMotion} />
      <path d="M70 85c7-8 13-11 20-11s13 3 20 11l-2 17H72l-2-17Z" fill={`url(#${uid}-weave)`} opacity="0.22" style={surfaceMotion} />
      {hasLayer ? (
        <>
          <path d="M56 92c7-12 14-19 25-23l-9 90H58L50 96c2-2 4-3 6-4Z" fill={`url(#${uid}-layer)`} opacity="0.94" style={fillMotion} />
          <path d="M124 92c-7-12-14-19-25-23l9 90h14l8-63c-2-2-4-3-6-4Z" fill={`url(#${uid}-layer)`} opacity="0.94" style={fillMotion} />
          <path d="M61 94c5-8 10-14 17-18l-5 78H61l-6-55c2-2 4-4 6-5Z" fill={`url(#${uid}-weave)`} opacity="0.18" style={surfaceMotion} />
          <path d="M119 94c-5-8-10-14-17-18l5 78h12l6-55c-2-2-4-4-6-5Z" fill={`url(#${uid}-weave)`} opacity="0.18" style={surfaceMotion} />
        </>
      ) : null}

      <path d="M73 159h34v9H73z" fill={beltFill} opacity="0.78" style={fillMotion} />
      <path d="M74 168h31l9 48H93l-3-34-5 34H64l10-48Z" fill={`url(#${uid}-bottom)`} style={fillMotion} />
      <path d="M75 172h29l6 39H93l-3-29-5 29H68l7-39Z" fill={`url(#${uid}-weave)`} opacity="0.16" style={surfaceMotion} />
      <path d="M85 183l5-15 3 48h-7l-4-34 3 1Z" fill={socksFill} opacity="0.34" style={fillMotion} />
      <path d="M62 216c8-3 17-3 26 0l-2 9H56c0-4 2-7 6-9Z" fill={`url(#${uid}-shoe)`} style={fillMotion} />
      <path d="M94 216c9-3 19-3 27 0 4 2 6 5 6 9H96l-2-9Z" fill={`url(#${uid}-shoe)`} style={fillMotion} />

      <path d="M68 88c-9 18-13 36-13 55" stroke={T.bgCard} strokeWidth="2" strokeLinecap="round" opacity="0.28" fill="none" />
      <path d="M112 88c9 18 13 36 13 55" stroke={T.bgCard} strokeWidth="2" strokeLinecap="round" opacity="0.28" fill="none" />
      <path d="M76 93h28" stroke={T.bgCard} strokeWidth="2" strokeLinecap="round" opacity="0.34" fill="none" />
      <path d="M78 116c8 4 16 4 24 0" stroke={T.bgCard} strokeWidth="1.3" strokeLinecap="round" opacity="0.2" fill="none" />
    </svg>
  );
}

export default Figure;
