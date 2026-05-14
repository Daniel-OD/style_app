import { FIG } from "../../design/tokens";

function Figure({ f, size = 130, skin, hair }) {
  const figure = f || {};
  const skinFill = skin || FIG.skin;
  const hairFill = hair || FIG.hair;

  return (
    <svg width={size} height={size * 1.42} viewBox="0 0 120 170" aria-hidden="true" focusable="false" style={{ display: "block" }}>
      <rect x="46" y="6" width="28" height="8" rx="4" fill={hairFill} />
      <circle cx="60" cy="22" r="12" fill={skinFill} />
      <rect x="35" y="36" width="50" height="18" rx="8" fill={figure.top || FIG.neutral} />
      <rect x="38" y="54" width="44" height="36" rx="8" fill={figure.layer || figure.shirt || FIG.neutralSoft} />
      <rect x="40" y="88" width="16" height="52" rx="8" fill={figure.bottom || FIG.neutralDeep} />
      <rect x="64" y="88" width="16" height="52" rx="8" fill={figure.bottom || FIG.neutralDeep} />
      <rect x="36" y="138" width="24" height="10" rx="5" fill={figure.shoes || FIG.neutralDeep} />
      <rect x="60" y="138" width="24" height="10" rx="5" fill={figure.shoes || FIG.neutralDeep} />
      {figure.accent ? <rect x="30" y="58" width="8" height="28" rx="4" fill={figure.accent} /> : null}
    </svg>
  );
}

export default Figure;
