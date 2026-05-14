import { T } from "../../design/tokens";
import Icon from "./Icon";

/**
 * @param {{title: string, text: string, icon?: string}} props
 */
const InfoPanel = ({ title, text, icon = "sparkles" }) => {
  return (
    <aside
      style={{
        background: T.bgCard,
        borderRadius: T.rLg,
        boxShadow: T.shadowRaised,
        padding: T.sp4,
        display: "grid",
        gap: T.sp2,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: T.sp2 }}>
        <Icon name={icon} color={T.textSecondary} />
        <p
          style={{
            margin: 0,
            color: T.textSecondary,
            fontSize: T.textXs,
            textTransform: "uppercase",
            letterSpacing: T.trackingWidest,
            fontWeight: T.weightSemi,
          }}
        >
          Context
        </p>
      </div>
      <h3
        style={{
          margin: 0,
          fontFamily: T.fontDisplay,
          fontSize: T.textLg,
          fontWeight: T.weightSemi,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          margin: 0,
          color: T.textSecondary,
          lineHeight: 1.55,
          fontSize: T.textBase,
        }}
      >
        {text}
      </p>
    </aside>
  );
};

export default InfoPanel;
