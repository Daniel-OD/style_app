import { T } from "../../design/tokens";

/**
 * @param {{colors: string[]}} props
 */
const SwatchGrid = ({ colors }) => (
  <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: T.sp2 }}>
    {colors.map((color) => (
      <div
        key={color}
        title={color}
        style={{
          height: 24,
          borderRadius: T.rSm,
          background: color,
        }}
      />
    ))}
  </div>
);

export default SwatchGrid;
