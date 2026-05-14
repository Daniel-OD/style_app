import { T } from "../../design/tokens";

/**
 * @param {{items: string[]}} props
 */
const TipList = ({ items }) => (
  <ul
    style={{
      margin: 0,
      padding: 0,
      listStyle: "none",
      display: "grid",
      gap: T.sp2,
    }}
  >
    {items.map((tip, index) => (
      <li
        key={`${tip}-${index}`}
        style={{
          color: T.textSecondary,
          fontSize: T.textBase,
          lineHeight: 1.55,
          paddingLeft: T.sp3,
          position: "relative",
        }}
      >
        <span
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            color: T.textMuted,
          }}
          aria-hidden="true"
        >
          •
        </span>
        {tip}
      </li>
    ))}
  </ul>
);

export default TipList;
