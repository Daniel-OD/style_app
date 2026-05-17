export const PALETTE = {
  ink900: "#1a1918",
  ink800: "#252522",
  ink600: "#5d5a52",
  ink400: "#767676",
  sand50: "#fdfcfb",
  sand100: "#f8f6f3",
  sand200: "#f5f1ec",
  sand400: "#e5ddd0",
  sand500: "#d9d2c8",
  gold500: "#b5a186",
  gold600: "#8a7a62",
  olive500: "#64724b",
  olive600: "#4f7a58",
  wine400: "#9f3d3d",
  navy700: "#17243b",
};

export const P = PALETTE;

export const T = {
  textPrimary: PALETTE.ink900,
  textSecondary: PALETTE.ink600,
  textMuted: PALETTE.ink400,
  textInverse: PALETTE.sand50,

  bg: PALETTE.sand100,
  bgCard: PALETTE.sand50,
  bgSubtle: PALETTE.sand200,
  bgInk: PALETTE.ink800,

  border: PALETTE.sand400,

  sp1: 4,
  sp2: 8,
  sp3: 12,
  sp4: 16,
  sp5: 20,
  sp6: 24,
  sp8: 32,
  sp10: 40,
  sp12: 48,

  rSm: 8,
  rMd: 12,
  rLg: 20,
  rFull: 9999,

  shadowRaised: "0 1px 4px rgba(26,25,24,.04), 0 0 0 0.5px rgba(26,25,24,.06)",
  shadowFloat: "0 4px 16px rgba(26,25,24,.08), 0 0 0 0.5px rgba(26,25,24,.06)",

  weightNormal: 400,
  weightMedium: 500,
  weightSemi: 600,
  weightBold: 700,

  textXs: 10,
  textSm: 12,
  textBase: 13,
  textMd: 15,
  textLg: 18,
  textXl: 22,

  fontBody: "'DM Sans', system-ui, sans-serif",
  fontDisplay: "'Playfair Display', Georgia, serif",

  trackingWidest: "0.12em",

  success: PALETTE.olive600,
  danger: PALETTE.wine400,
  warning: PALETTE.gold600,

  successBg: "#eef5ed",
  dangerBg: "#fdf0f0",
  warningBg: "#faf4e8",
  infoBg: "#edf3fa",
};

export const FIG = {
  skin: "#d4956a",
  hair: "#3a2a1a",
  neutral: "#d9d2c8",
  neutralSoft: "#f0e9d8",
  neutralDeep: "#252522",
  overlayOpacity: 0.24,
  separatorOpacity: 0.2,
};

export const scoreSignal = (score) => {
  if (score >= 8) return "high";
  if (score >= 7) return "mid";
  return "low";
};

export const scoreColor = (score) => {
  const level = scoreSignal(score);
  if (level === "high") return T.success;
  if (level === "mid") return T.warning;
  return T.textMuted;
};

export const styles = {
  card: {
    background: T.bgCard,
    borderRadius: T.rMd,
    boxShadow: T.shadowRaised,
    border: `0.5px solid ${T.border}`,
    padding: T.sp4,
  },
  cardRaised: {
    background: T.bgCard,
    borderRadius: T.rLg,
    boxShadow: T.shadowRaised,
  },
  microLabel: {
    fontSize: T.textXs,
    textTransform: "uppercase",
    letterSpacing: T.trackingWidest,
    color: T.textMuted,
    fontWeight: T.weightSemi,
    margin: 0,
  },
  sectionTitle: {
    fontFamily: T.fontDisplay,
    fontSize: T.textLg,
    fontWeight: T.weightSemi,
    color: T.textPrimary,
    margin: 0,
  },
  page: {
    minHeight: "100vh",
    background: T.bg,
    color: T.textPrimary,
    fontFamily: T.fontBody,
  },
};
