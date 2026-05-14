import { T } from "../../design/tokens";
import { motion } from "../../design/motion";

function PillTabs({ options, value, onChange, ariaLabel }) {
  return (
    <div style={{ position: "relative" }}>
      <div
        role="tablist"
        aria-label={ariaLabel}
        style={{
          display: "flex",
          gap: T.sp2,
          overflowX: "auto",
          paddingBottom: T.sp1,
        }}
      >
        {options.map((option) => {
          const active = option.id === value;
          return (
            <button
              key={option.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => onChange(option.id)}
              style={{
                minHeight: 44,
                border: `0.5px solid ${active ? T.bgInk : T.border}`,
                borderRadius: T.rFull,
                whiteSpace: "nowrap",
                padding: `${T.sp2}px ${T.sp3}px`,
                background: active ? T.bgInk : T.bgCard,
                color: active ? T.textInverse : T.textSecondary,
                fontFamily: T.fontBody,
                fontSize: T.textSm,
                fontWeight: T.weightMedium,
                cursor: "pointer",
                transition: motion.safeTransition("background-color 180ms ease, color 180ms ease, border-color 180ms ease"),
              }}
            >
              {option.label}
            </button>
          );
        })}
      </div>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: T.sp1,
          width: 36,
          pointerEvents: "none",
          background: `linear-gradient(to right, rgba(0,0,0,0), ${T.bg})`,
        }}
      />
    </div>
  );
}

export default PillTabs;
