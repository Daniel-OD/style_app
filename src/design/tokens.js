const P = {
  ink900: "#1a1918",
  ink800: "#252522",
  ink600: "#5d5a52",
  ink400: "#767676",
  ink200: "#bbb7b0",
  sand50: "#fdfcfb",
  sand100: "#f8f6f3",
  sand200: "#f5f1ec",
  sand400: "#e5ddd0",
  sand500: "#d9d2c8",
  gold400: "#c4a882",
  gold500: "#b5a186",
  gold600: "#8a7a62",
  olive500: "#64724b",
  olive600: "#4f7a58",
  olive700: "#4a5638",
  navy700: "#17243b",
  wine400: "#9f3d3d",
  wine500: "#6b2737",
  figOlive: "#64724b",
  figBej: "#d9c2a8",
  figMaro: "#6f4a2b",
  figCrem: "#f0e9d8",
  figGri: "#b0aba0",
  figSkin: "#d4956a",
  figHair: "#3a2a1a",
  figNavy: "#1e2d4a",
};

export const T = {
  ink: P.ink800,
  inkMid: P.ink600,
  inkSoft: P.ink400,
  paper: P.sand200,
  paper2: P.sand50,
  line: P.sand400,
  gold: P.gold400,
  olive: P.olive500,
  navy: P.navy700,
  wine: P.wine500,
  green: P.olive600,
  red: P.wine400,

  textPrimary: P.ink900,
  textSecondary: P.ink600,
  textMuted: P.ink400,
  textDisabled: P.ink200,
  textInverse: P.sand50,
  textAccent: P.gold500,
  textLink: P.olive600,

  bg: P.sand100,
  bgCard: P.sand50,
  bgSubtle: P.sand200,
  bgInk: P.ink800,
  bgInkDeep: P.ink900,
  bgOlive: "#eef5ed",
  bgDanger: "#fdf0f0",
  bgWarning: "#faf4e8",
  bgInfo: "#f0f4f9",
  bgAccent: "#f7f3ed",

  border: P.sand400,
  borderStrong: P.sand500,
  borderAccent: P.gold400,
  borderDanger: "#f0d4d4",
  borderOlive: "#d0e8d4",
  borderInk: "#3a3a38",

  accent: P.gold500,
  accentAlt: P.gold400,
  brand: P.olive500,
  brandDark: P.olive700,
  success: P.olive600,
  successBg: "#eef5ed",
  warning: "#ba7517",
  warningBg: "#faf4e8",
  danger: P.wine400,
  dangerBg: "#fdf0f0",
  info: "#378add",
  infoBg: "#f0f4f9",

  sp1: 4,
  sp2: 8,
  sp3: 12,
  sp4: 16,
  sp5: 20,
  sp6: 24,
  sp8: 32,
  sp10: 40,
  sp12: 48,

  rXs: 4,
  rSm: 8,
  rMd: 12,
  rLg: 20,
  rXl: 28,
  rFull: 9999,

  shadowNone: "none",
  shadowRaised: "0 1px 4px rgba(26,25,24,.04), 0 0 0 0.5px rgba(26,25,24,.06)",
  shadowFloat: "0 4px 16px rgba(26,25,24,.08), 0 0 0 0.5px rgba(26,25,24,.06)",
  shadowOverlay: "0 20px 48px rgba(26,25,24,.14), 0 0 0 0.5px rgba(26,25,24,.08)",

  fontBody: "'DM Sans', system-ui, sans-serif",
  fontDisplay: "'Playfair Display', Georgia, serif",
  fontMono: "'JetBrains Mono', 'Fira Code', monospace",

  textXs: 10,
  textSm: 12,
  textBase: 13,
  textMd: 15,
  textLg: 18,
  textXl: 22,
  textDisp: 28,

  weightNormal: 400,
  weightMedium: 500,
  weightSemi: 600,
  weightBold: 700,

  leadingTight: 1.2,
  leadingSnug: 1.4,
  leadingNormal: 1.6,
  leadingRelax: 1.8,
  trackingTight: "-0.03em",
  trackingNormal: "0",
  trackingWide: "0.05em",
  trackingWidest: "0.12em",

  zBase: 0,
  zRaised: 10,
  zDropdown: 50,
  zNav: 100,
  zOverlay: 200,
};

export const FIG = P;

export const scoreSignal = (score) => {
  if (score >= 9) return { color: P.olive600, label: "Excepțional", bg: "#eef5ed" };
  if (score >= 8) return { color: P.olive500, label: "Excelent", bg: "#f2f5ee" };
  if (score >= 7) return { color: P.gold600, label: "Bun", bg: "#f7f3ed" };
  return { color: P.ink400, label: "Acceptabil", bg: P.sand200 };
};

export const scoreColor = (s) => scoreSignal(s).color;

export const styles = {
  card: {
    background: T.bgCard,
    borderRadius: T.rMd,
    padding: T.sp4,
    boxShadow: T.shadowRaised,
  },
  cardSubtle: {
    background: T.bgSubtle,
    borderRadius: T.rMd,
    padding: T.sp4,
  },
  cardDark: {
    background: T.bgInk,
    borderRadius: T.rMd,
    padding: T.sp4,
    color: T.textInverse,
  },
  label: {
    fontSize: T.textXs,
    fontWeight: T.weightBold,
    letterSpacing: T.trackingWidest,
    textTransform: "uppercase",
    color: T.textMuted,
  },
  caption: {
    fontSize: T.textSm,
    color: T.textMuted,
    lineHeight: T.leadingNormal,
  },
  body: {
    fontSize: T.textBase,
    color: T.textSecondary,
    lineHeight: T.leadingNormal,
  },
};
