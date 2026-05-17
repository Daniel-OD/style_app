import { T } from "../../design/tokens";
import { motion } from "../../design/motion";
import { Icon } from "./Icon";

const PillTabs = ({ options = [], value, onChange, ariaLabel = "Filtre" }) => {
  return (
    <div style={{ position: "relative" }}>
      <div
        className="pill-tabs__list"
        role="tablist"
        aria-label={ariaLabel}
        style={{
          display: "flex",
          gap: T.sp2,
          overflowX: "auto",
          overflowY: "hidden",
          paddingRight: T.sp8,
          paddingBottom: T.sp1,
        }}
      >
        {options.map((item) => {
          const isActive = item.id === value;

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
                transition: motion.safeTransition("background-color 160ms ease, color 160ms ease"),
                minHeight: 44,
                display: "inline-flex",
                alignItems: "center",
                gap: T.sp2,
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              {item.iconName ? <Icon name={item.iconName} size={14} /> : null}
              {item.label}
            </button>
          );
        })}
      </div>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: T.sp8,
          height: "100%",
          background: `linear-gradient(to right, rgba(248,246,243,0), ${T.bg} 70%)`,
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

export default PillTabs;
