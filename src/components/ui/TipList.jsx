import { T } from "../../design/tokens";
import { Icon } from "./Icon";

const THEME = {
  tips: { color: T.success, bg: T.successBg, icon: "check" },
  avoid: { color: T.danger, bg: T.dangerBg, icon: "close" },
};

function TipList({ items, variant = "tips" }) {
  const theme = THEME[variant] || THEME.tips;

  return (
    <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: T.sp2 }}>
      {items.map((item, index) => (
        <li
          key={`${item}-${index}`}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: T.sp2,
            background: theme.bg,
            color: T.textSecondary,
            border: `0.5px solid ${theme.color}`,
            borderRadius: T.rSm,
            padding: `${T.sp2}px ${T.sp3}px`,
            lineHeight: 1.5,
            fontSize: T.textSm,
            minWidth: 0,
            overflowWrap: "anywhere",
          }}
        >
          <Icon name={theme.icon} size={14} color={theme.color} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default TipList;
