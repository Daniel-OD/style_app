import { T } from "../../design/tokens";

const PillTabs = ({ items, options, active, value, onChange, ariaLabel = "Filtre" }) => {
  const tabs = items || options || [];
  const selected = active ?? value;

  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      style={{
        display: "flex",
        gap: T.sp2,
        flexWrap: "wrap",
      }}
    >
      {tabs.map((item) => {
        const isActive = item.id === selected;

        return (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange?.(item.id)}
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
              transition: "background-color 160ms ease, color 160ms ease",
              minHeight: 44,
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
