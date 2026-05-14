import { T } from "../../design/tokens";

const VARIANTS = {
  dark: { bg: T.bgInk, color: T.textInverse, border: T.bgInk },
  light: { bg: T.bgCard, color: T.textPrimary, border: T.border },
  success: { bg: T.successBg, color: T.success, border: T.success },
  danger: { bg: T.dangerBg, color: T.danger, border: T.danger },
  warning: { bg: T.warningBg, color: T.warning, border: T.warning },
};

function InfoPanel({ children, variant = "dark" }) {
  const theme = VARIANTS[variant] || VARIANTS.dark;
  return (
    <aside
      style={{
        background: theme.bg,
        color: theme.color,
        borderRadius: T.rMd,
        border: `0.5px solid ${theme.border}`,
        padding: T.sp4,
      }}
    >
      {children}
    </aside>
  );
}

export default InfoPanel;
