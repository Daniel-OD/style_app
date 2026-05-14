export const T = {
  textPrimary: "#111827",
  textSecondary: "#374151",
  textMuted: "#6B7280",
  textInverse: "#F9FAFB",

  bg: "#F7F7F5",
  bgCard: "#FFFFFF",
  bgSubtle: "#ECEBE7",
  bgInk: "#1F2937",

  border: "#D1D5DB",

  sp1: 4,
  sp2: 8,
  sp3: 12,
  sp4: 16,
  sp5: 20,
  sp6: 24,
  sp7: 28,
  sp8: 32,
  sp9: 36,
  sp10: 40,
  sp11: 44,
  sp12: 48,

  rSm: 8,
  rMd: 12,
  rLg: 18,
  rFull: 999,

  shadowRaised: "0 8px 24px rgba(17, 24, 39, 0.08)",
  shadowFloat: "0 14px 30px rgba(17, 24, 39, 0.14)",

  weightNormal: 400,
  weightMedium: 500,
  weightSemi: 600,
  weightBold: 700,

  textXs: 12,
  textSm: 13,
  textBase: 14,
  textMd: 16,
  textLg: 20,
  textXl: 30,

  fontBody: '"DM Sans", system-ui, sans-serif',
  fontDisplay: '"Playfair Display", Georgia, serif',

  trackingWidest: "0.16em",
};

export const FIG = {
  width: 120,
  height: 180,
};

/**
 * @param {number} score
 * @returns {'low'|'mid'|'high'}
 */
export const scoreSignal = (score) => {
  if (score >= 80) return "high";
  if (score >= 60) return "mid";
  return "low";
};

/**
 * @param {number} score
 * @returns {string}
 */
export const scoreColor = (score) => {
  const signal = scoreSignal(score);
  if (signal === "high") return "#0F766E";
  if (signal === "mid") return "#9A6A00";
  return "#9F1239";
};

export const styles = {
  page: {
    minHeight: "100vh",
    background: T.bg,
    color: T.textPrimary,
    fontFamily: T.fontBody,
  },
  sectionTitle: {
    fontFamily: T.fontDisplay,
    fontSize: T.textLg,
    fontWeight: T.weightSemi,
    color: T.textPrimary,
    margin: 0,
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
  },
};
