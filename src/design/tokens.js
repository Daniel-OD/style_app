const LIGHT = {
  textPrimary: "#1a1918",
  textSecondary: "#5d5a52",
  textMuted: "#767676",
  textInverse: "#fdfcfb",

  bg: "#f8f6f3",
  bgCard: "#fdfcfb",
  bgSubtle: "#f5f1ec",
  bgInk: "#252522",

  border: "#e5ddd0",

  success: "#4f7a58",
  danger: "#9f3d3d",
  warning: "#8a7a62",

  successBg: "#eef5ed",
  dangerBg: "#fdf0f0",
  warningBg: "#faf4e8",
};

const DARK = {
  textPrimary: "#f8f6f3",
  textSecondary: "#d9d2c8",
  textMuted: "#a8a29e",
  textInverse: "#1a1918",

  bg: "#1a1918",
  bgCard: "#252522",
  bgSubtle: "#3a372f",
  bgInk: "#f5f1ec",

  border: "#4b4640",

  success: "#8ab88f",
  danger: "#e07a7a",
  warning: "#d4b38f",

  successBg: "#1f2a22",
  dangerBg: "#2a1f1f",
  warningBg: "#2a261f",
};

export const T = {
  ...LIGHT, // default light
  // dark variants will be switched via context or class
};

export const getTokens = (isDark = false) => isDark ? DARK : LIGHT;

export const FIG = {
  skin: "#d4956a",
  hair: "#3a2a1a",
  neutral: "#d9d2c8",
  neutralSoft: "#f0e9d8",
  neutralDeep: "#252522",
};

export const scoreSignal = (score) => {
  if (score >= 9) return { color: "#4f7a58", bg: "#eef5ed", label: "Excelent" };
  if (score >= 8) return { color: "#64724b", bg: "#f2f5ee", label: "Foarte bun" };
  if (score >= 7) return { color: "#8a7a62", bg: "#faf4e8", label: "Bun" };
  return { color: "#767676", bg: "#f5f1ec", label: "Acceptabil" };
};

export const styles = {
  card: {
    background: LIGHT.bgCard,
    borderRadius: 12,
    boxShadow: "0 1px 4px rgba(26,25,24,.04), 0 0 0 0.5px rgba(26,25,24,.06)",
    border: `0.5px solid ${LIGHT.border}`,
    padding: 16,
  },
};
