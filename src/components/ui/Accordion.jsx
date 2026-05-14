import { useState } from "react";
import { T } from "../../design/tokens";
import { Icon } from "./Icon";
import { motion } from "../../design/motion";

const bodyStyle = (open) => ({
  display: "grid",
  gridTemplateRows: open ? "1fr" : "0fr",
  transition: motion.safeTransition("grid-template-rows 220ms ease"),
});

function Accordion({ title, icon, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section
      style={{
        background: T.bgCard,
        borderRadius: T.rMd,
        border: `0.5px solid ${T.border}`,
        boxShadow: T.shadowRaised,
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        style={{
          width: "100%",
          minHeight: 44,
          border: "none",
          background: "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: T.sp3,
          padding: T.sp4,
          cursor: "pointer",
          color: T.textPrimary,
          fontFamily: T.fontBody,
          fontSize: T.textMd,
          fontWeight: T.weightSemi,
          textAlign: "left",
        }}
      >
        <span style={{ display: "inline-flex", alignItems: "center", gap: T.sp2 }}>
          {icon ? <Icon name={icon} size={16} /> : null}
          {title}
        </span>
        <Icon name={open ? "chevronDown" : "chevronRight"} size={16} />
      </button>
      <div style={bodyStyle(open)}>
        <div style={{ overflow: "hidden" }}>
          <div style={{ padding: `0 ${T.sp4}px ${T.sp4}px`, color: T.textSecondary, lineHeight: 1.6, fontSize: T.textBase }}>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Accordion;
