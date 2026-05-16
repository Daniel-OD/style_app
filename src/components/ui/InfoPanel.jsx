import { T } from "../../design/tokens";

const VARIANTS = {
  dark: { bg: T.bgInk, color: T.textInverse },
  light: { bg: T.bgSubtle, color: T.textPrimary, accent: T.bgInk },
  success: { bg: T.successBg, color: T.success, accent: T.success },
  danger: { bg: T.dangerBg, color: T.danger, accent: T.danger },
  warning: { bg: T.warningBg, color: T.warning, accent: T.warning },
};

function InfoPanel({ children, variant = "dark" }) {
  const theme = VARIANTS[variant] || VARIANTS.dark;
  return (
    <aside
      style={{
        background: theme.bg,
        color: theme.color,
        borderRadius: T.rMd,
        borderLeft: theme.accent ? `4px solid ${theme.accent}` : "none",
        padding: T.sp4,
      }}
    >
      {children}
    </aside>
  );
}

export default InfoPanel;
