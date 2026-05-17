import { FIG } from "../../design/tokens";

function Figure({ f, size = 130 }) {
  const figure = f || {};
  const layerFill = figure.layer || figure.shirt || FIG.neutralSoft;
  const topFill = figure.top || FIG.neutral;
  const bottomFill = figure.bottom || FIG.neutralDeep;
  const shoesFill = figure.shoes || FIG.neutralDeep;
  const fillTransition = { transition: "fill 300ms ease" };

  return (
    <svg width={size} height={size * 1.42} viewBox="0 0 120 180" aria-hidden="true" focusable="false" style={{ display: "block", margin: "0 auto" }}>
      <rect x="30" y="20" width="60" height="112" rx="30" fill={layerFill} style={fillTransition} />
      <rect x="38" y="34" width="44" height="58" rx="20" fill={topFill} style={fillTransition} />
      <rect x="42" y="96" width="16" height="48" rx="8" fill={bottomFill} style={fillTransition} />
      <rect x="62" y="96" width="16" height="48" rx="8" fill={bottomFill} style={fillTransition} />
      <rect x="36" y="140" width="24" height="9" rx="4.5" fill={shoesFill} style={fillTransition} />
      <rect x="60" y="140" width="24" height="9" rx="4.5" fill={shoesFill} style={fillTransition} />
      <rect x="34" y="23" width="52" height="16" rx="8" fill="#ffffff" opacity="0.16" />
      <rect x="41" y="103" width="38" height="1.5" rx="0.75" fill="#ffffff" opacity="0.14" />
      {figure.accent ? <rect x="34" y="46" width="6" height="44" rx="3" fill={figure.accent} style={fillTransition} /> : null}
    </svg>
  );
}

export default Figure;
