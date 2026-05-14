import { scoreColor, T } from "../../design/tokens";

/**
 * @param {{score: number}} props
 */
const ScoreBadge = ({ score }) => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: T.sp1,
      borderRadius: T.rFull,
      background: `${scoreColor(score)}22`,
      color: scoreColor(score),
      padding: `${T.sp1}px ${T.sp3}px`,
      fontSize: T.textXs,
      fontWeight: T.weightSemi,
      letterSpacing: T.trackingWidest,
      textTransform: "uppercase",
    }}
  >
    Scor {score}
  </span>
);

export default ScoreBadge;
