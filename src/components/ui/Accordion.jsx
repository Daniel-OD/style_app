import { useState } from "react";
import { T } from "../../design/tokens";
import Icon from "./Icon";

const itemStyle = {
  background: T.bgCard,
  borderRadius: T.rMd,
  padding: T.sp4,
  boxShadow: T.shadowRaised,
};

/**
 * @param {{items: Array<{id: string, title: string, body: string}>}} props
 */
const Accordion = ({ items }) => {
  const [open, setOpen] = useState(items[0]?.id || null);

  return (
    <div style={{ display: "grid", gap: T.sp3 }}>
      {items.map((item) => {
        const isOpen = open === item.id;
        return (
          <div key={item.id} style={itemStyle}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : item.id)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: T.sp3,
                border: "none",
                background: "transparent",
                padding: 0,
                cursor: "pointer",
                color: T.textPrimary,
                textAlign: "left",
                fontSize: T.textMd,
                fontWeight: T.weightSemi,
                fontFamily: T.fontBody,
              }}
            >
              <span>{item.title}</span>
              <Icon name={isOpen ? "chevronDown" : "chevronRight"} />
            </button>
            {isOpen ? (
              <p
                style={{
                  margin: `${T.sp3}px 0 0`,
                  color: T.textSecondary,
                  lineHeight: 1.55,
                  fontSize: T.textBase,
                }}
              >
                {item.body}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
