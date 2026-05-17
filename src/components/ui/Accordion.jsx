import { useState } from "react";
import { T } from "../../design/tokens";
import { Icon } from "./Icon";

const shellStyle = {
  background: T.bgCard,
  borderRadius: T.rMd,
  border: `0.5px solid ${T.border}`,
  boxShadow: T.shadowRaised,
};

const triggerStyle = {
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
  whiteSpace: "normal",
};

const bodyStyle = (isOpen) => ({
  display: "grid",
  gridTemplateRows: isOpen ? "1fr" : "0fr",
  transition: "grid-template-rows 220ms ease",
});

const contentStyle = {
  overflow: "hidden",
};

const copyStyle = {
  padding: `0 ${T.sp4}px ${T.sp4}px`,
  color: T.textSecondary,
  lineHeight: 1.6,
  fontSize: T.textBase,
};

const normalizeItems = ({ items, title, icon, children, defaultOpen }) => {
  if (Array.isArray(items) && items.length > 0) {
    return items.map((item, index) => ({
      id: item.id || `accordion-item-${index}`,
      title: item.title || item.label || "",
      icon: item.icon || item.iconName,
      content: item.content ?? item.body ?? item.children ?? null,
    }));
  }

  return [
    {
      id: "accordion-item-0",
      title: title || "",
      icon,
      content: children,
      defaultOpen,
    },
  ];
};

const getInitialOpen = (items, defaultOpen) => {
  if (items.length > 1) {
    return items[0]?.id || null;
  }

  return defaultOpen ? items[0]?.id || null : null;
};

const AccordionItem = ({ id, title, icon, content, isOpen, onToggle }) => (
  <section style={shellStyle}>
    <button
      id={`${id}-trigger`}
      type="button"
      aria-expanded={isOpen}
      aria-controls={`${id}-content`}
      onClick={onToggle}
      style={triggerStyle}
    >
      <span style={{ display: "inline-flex", alignItems: "center", gap: T.sp2, minWidth: 0, flex: 1, overflowWrap: "anywhere" }}>
        {icon ? <Icon name={icon} size={16} /> : null}
        {title}
      </span>
      <Icon name={isOpen ? "chevronDown" : "chevronRight"} size={16} />
    </button>
    <div style={bodyStyle(isOpen)}>
      <div
        id={`${id}-content`}
        role="region"
        aria-labelledby={`${id}-trigger`}
        style={contentStyle}
      >
        <div style={copyStyle}>{content}</div>
      </div>
    </div>
  </section>
);

const Accordion = ({ items, title, icon, children, defaultOpen = false }) => {
  const normalizedItems = normalizeItems({ items, title, icon, children, defaultOpen });
  const [open, setOpen] = useState(getInitialOpen(normalizedItems, defaultOpen));

  return (
    <div style={{ display: "grid", gap: T.sp3 }}>
      {normalizedItems.map((item) => {
        const isOpen = item.id === open;

        return (
          <AccordionItem
            key={item.id}
            id={item.id}
            title={item.title}
            icon={item.icon}
            content={item.content}
            isOpen={isOpen}
            onToggle={() => setOpen((current) => (current === item.id ? null : item.id))}
          />
        );
      })}
    </div>
  );
};

export default Accordion;
