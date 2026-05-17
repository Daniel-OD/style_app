import { useId } from "react";
import { FIG, T } from "../../design/tokens";
import { motion } from "../../design/motion";

const fillMotion = {
  transition: motion.safeTransition("fill 300ms ease, opacity 300ms ease"),
};

/**
 * Compact editorial outfit board.
 * Keeps the clothing color relationship visible without creating tall mobile whitespace.
 *
 * @param {object} props
 * @param {{top?: string, bottom?: string, socks?: string, shoes?: string, belt?: string, layer?: string | null, accent?: string}} props.f
 */
function Figure({ f }) {
  const id = useId().replace(/:/g, "");
  const figure = f || {};
  const layerFill = figure.layer || null;
  const topFill = figure.top || FIG.neutral;
  const bottomFill = figure.bottom || FIG.neutralDeep;
  const shoesFill = figure.shoes || FIG.neutralDeep;
  const accentFill = figure.belt || figure.accent || shoesFill;
  const torsoId = `torsoGradient-${id}`;
  const legId = `legGradient-${id}`;
  const grainId = `grainOverlay-${id}`;

  return (
    <div
      aria-hidden="true"
      style={{
        width: "100%",
        minWidth: 0,
        borderRadius: T.rLg,
        background: T.bgSubtle,
        padding: T.sp2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <svg
        viewBox="28 34 124 168"
        role="presentation"
        style={{
          width: "min(100%, var(--app-figure-size))",
          maxHeight: "var(--app-figure-size)",
          height: "auto",
          display: "block",
        }}
      >
        <defs>
          <linearGradient id={torsoId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,.12)" />
            <stop offset="100%" stopColor="rgba(26,25,24,.16)" />
          </linearGradient>
          <linearGradient id={legId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,.1)" />
            <stop offset="100%" stopColor="rgba(26,25,24,.18)" />
          </linearGradient>
          <radialGradient id={grainId} cx="50%" cy="30%" r="75%">
            <stop offset="0%" stopColor="rgba(255,255,255,.08)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>

        <circle cx="90" cy="49" r="9" style={{ ...fillMotion, fill: "#cdb8a3" }} />
        <rect x="84" y="57" width="12" height="7" rx="4" style={{ ...fillMotion, fill: "#c2ad97" }} />

        <path d="M62 72 L56 106 Q55 111 60 112 L67 108 L71 78 Z" style={{ ...fillMotion, fill: FIG.neutral, opacity: 0.55 }} />
        <path d="M118 72 L124 106 Q125 111 120 112 L113 108 L109 78 Z" style={{ ...fillMotion, fill: FIG.neutral, opacity: 0.55 }} />

        {layerFill ? (
          <path
            d="M57 72 Q90 58 123 72 L120 118 Q112 126 90 128 Q68 126 60 118 Z"
            style={{ ...fillMotion, fill: layerFill, opacity: 0.92 }}
          />
        ) : null}

        <path d="M63 71 Q90 63 117 71 L114 120 Q90 129 66 120 Z" style={{ ...fillMotion, fill: topFill }} />
        <path d="M63 71 Q90 63 117 71 L114 120 Q90 129 66 120 Z" fill={`url(#${torsoId})`} style={{ opacity: 0.7 }} />
        <rect x="66" y="97" width="48" height="6" rx="3" style={{ ...fillMotion, fill: accentFill, opacity: 0.86 }} />

        <path d="M66 103 L114 103 L108 140 L96 150 L84 150 L72 140 Z" style={{ ...fillMotion, fill: bottomFill }} />
        <path d="M66 103 L114 103 L108 140 L96 150 L84 150 L72 140 Z" fill={`url(#${legId})`} style={{ opacity: 0.68 }} />

        <path d="M82 150 L95 150 L93 188 Q90 191 86 188 Z" style={{ ...fillMotion, fill: bottomFill, opacity: 0.94 }} />
        <path d="M98 150 L111 150 L108 188 Q104 191 100 188 Z" style={{ ...fillMotion, fill: bottomFill, opacity: 0.94 }} />

        <ellipse cx="88" cy="193" rx="11" ry="4.6" style={{ ...fillMotion, fill: shoesFill }} />
        <ellipse cx="104" cy="193" rx="11" ry="4.6" style={{ ...fillMotion, fill: shoesFill }} />

        <path d="M70 103 Q90 99 110 103" stroke="rgba(255,255,255,.3)" strokeWidth="0.8" fill="none" />
        <path d="M95 150 L96 188" stroke="rgba(255,255,255,.28)" strokeWidth="0.75" />
        <rect x="60" y="66" width="60" height="126" rx="32" fill={`url(#${grainId})`} opacity="0.35" />
      </svg>
    </div>
  );
}

export default Figure;
