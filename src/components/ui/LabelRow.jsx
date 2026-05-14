import { T } from "../../design/tokens";

/**
 * @param {{label: string, value: string}} props
 */
const LabelRow = ({ label, value }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: T.sp3,
    }}
  >
    <span
      style={{
        color: T.textMuted,
        fontSize: T.textSm,
        textTransform: "uppercase",
        letterSpacing: T.trackingWidest,
      }}
    >
      {label}
    </span>
    <strong
      style={{
        color: T.textPrimary,
        fontWeight: T.weightSemi,
        fontSize: T.textBase,
      }}
    >
      {value}
    </strong>
  </div>
);

export default LabelRow;
