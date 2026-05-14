import { FIG, T } from "../../design/tokens";

/**
 * @param {{colors: {top: string, shirt: string, bottom: string, shoes: string}}} props
 */
const Figure = ({ colors }) => {
  return (
    <svg
      width={FIG.width}
      height={FIG.height}
      viewBox="0 0 120 180"
      role="img"
      aria-label="Figurină outfit"
      style={{ display: "block", margin: "0 auto" }}
    >
      <circle cx="60" cy="20" r="12" fill={T.bgSubtle} />
      <rect x="34" y="36" width="52" height="20" rx="8" fill={colors.top} />
      <rect x="38" y="52" width="44" height="35" rx="8" fill={colors.shirt} />
      <rect x="40" y="86" width="18" height="52" rx="8" fill={colors.bottom} />
      <rect x="62" y="86" width="18" height="52" rx="8" fill={colors.bottom} />
      <rect x="38" y="138" width="22" height="12" rx="5" fill={colors.shoes} />
      <rect x="60" y="138" width="22" height="12" rx="5" fill={colors.shoes} />
    </svg>
  );
};

export default Figure;
