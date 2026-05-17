import { FIG } from "../../design/tokens";
import { motion as motionUtils } from "../../design/motion";

const FILL_TRANSITION = { transition: motionUtils.safeTransition("fill 300ms ease") };

function Figure({ f, size = 130 }) {
  const figure = f || {};
  const layerFill = figure.layer || figure.shirt || FIG.neutralSoft;
  const topFill = figure.top || FIG.neutral;
  const bottomFill = figure.bottom || FIG.neutralDeep;
  const shoesFill = figure.shoes || FIG.neutralDeep;

  return (
    <svg width={size} height={size * 1.42} viewBox="0 0 120 180" aria-hidden="true" focusable="false" style={{ display: "block", margin: "0 auto" }}>
      <rect x="30" y="20" width="60" height="112" rx="30" fill={layerFill} style={FILL_TRANSITION} />
      <rect x="38" y="34" width="44" height="58" rx="20" fill={topFill} style={FILL_TRANSITION} />
      <rect x="42" y="96" width="16" height="48" rx="8" fill={bottomFill} style={FILL_TRANSITION} />
      <rect x="62" y="96" width="16" height="48" rx="8" fill={bottomFill} style={FILL_TRANSITION} />
      <rect x="36" y="140" width="24" height="9" rx="4.5" fill={shoesFill} style={FILL_TRANSITION} />
      <rect x="60" y="140" width="24" height="9" rx="4.5" fill={shoesFill} style={FILL_TRANSITION} />
      <rect x="34" y="23" width="52" height="16" rx="8" fill={FIG.neutralSoft} opacity={FIG.overlayOpacity} />
      <rect x="41" y="103" width="38" height="1.5" rx="0.75" fill={FIG.neutralSoft} opacity={FIG.separatorOpacity} />
      {figure.accent ? <rect x="34" y="46" width="6" height="44" rx="3" fill={figure.accent} style={FILL_TRANSITION} /> : null}
    </svg>
  );
}

export default Figure;
