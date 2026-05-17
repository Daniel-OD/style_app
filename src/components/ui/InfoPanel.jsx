import { T } from "../../design/tokens";
import { Icon } from "./Icon";

const VARIANTS = {
  dark: { bg: T.bgInk, color: T.textInverse, border: T.bgInk },
  light: { bg: T.bgCard, color: T.textPrimary, border: T.border },
  success: { bg: T.successBg, color: T.success, border: T.success },
  danger: { bg: T.dangerBg, color: T.danger, border: T.danger },
  warning: { bg: T.warningBg, color: T.warning, border: T.warning },
};

function InfoPanel({ children, variant = "dark", title, text, icon }) {
  const theme = VARIANTS[variant] || VARIANTS.dark;
  return (
    <aside
      style={{
        background: theme.bg,
        color: theme.color,
        borderRadius: T.rMd,
        border: `0.5px solid ${theme.border}`,
        padding: T.sp4,
        minWidth: 0,
        overflowWrap: "anywhere",
      }}
    >
      {(title || text || icon) && (
        <div style={{ display: "flex", gap: T.sp3, alignItems: "flex-start" }}>
          {icon ? <Icon name={icon} size={16} color={theme.color} style={{ marginTop: 2, flexShrink: 0 }} /> : null}
          <div>
            {title ? (
              <div style={{ fontSize: T.textBase, fontWeight: T.weightSemi, marginBottom: text ? T.sp1 : 0 }}>
                {title}
              </div>
            ) : null}
            {text ? <div style={{ fontSize: T.textSm, lineHeight: 1.6, opacity: 0.85 }}>{text}</div> : null}
          </div>
        </div>
      )}
      {children}
    </aside>
  );
}

export default InfoPanel;
