import { T } from "../../design/tokens";

const SIZE = {
  sm: { label: T.textXs, value: T.textSm },
  md: { label: T.textSm, value: T.textMd },
};

function LabelRow({ label, value, size = "sm" }) {
  const scale = SIZE[size] || SIZE.sm;
  return (
    <div style={{ display: "grid", gridTemplateColumns: "var(--label-row-columns)", alignItems: "start", gap: T.sp2 }}>
      <span
        style={{
          color: T.textMuted,
          fontSize: scale.label,
          textTransform: "uppercase",
          letterSpacing: T.trackingWidest,
          fontWeight: T.weightMedium,
        }}
      >
        {label}
      </span>
      <strong style={{ margin: 0, color: T.textPrimary, fontSize: scale.value, fontWeight: T.weightSemi, overflowWrap: "anywhere" }}>{value}</strong>
    </div>
  );
}

export default LabelRow;
