import { T } from "../../design/tokens";

/**
 * @param {{items: Array<{id: string, label: string}>, active: string, onChange: (id: string) => void}} props
 */
const PillTabs = ({ items, active, onChange }) => {
  return (
    <div style={{ display: "flex", gap: T.sp2, flexWrap: "wrap" }}>
      {items.map((item) => {
        const isActive = item.id === active;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onChange(item.id)}
            style={{
              border: "none",
              borderRadius: T.rFull,
              background: isActive ? T.bgInk : T.bgSubtle,
              color: isActive ? T.textInverse : T.textSecondary,
              padding: `${T.sp2}px ${T.sp4}px`,
              cursor: "pointer",
              fontSize: T.textSm,
              fontWeight: T.weightMedium,
              fontFamily: T.fontBody,
              transition: "all 160ms ease",
            }}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
};

export default PillTabs;
