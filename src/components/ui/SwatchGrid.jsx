import { T } from "../../design/tokens";

function SwatchGrid({ colors, columns = 4 }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`, gap: T.sp2 }}>
      {colors.map((color) => (
        <div
          key={color}
          title={color}
          style={{
            height: 24,
            borderRadius: T.rSm,
            border: `0.5px solid ${T.border}`,
            background: color,
          }}
        />
      ))}
    </div>
  );
}

export default SwatchGrid;
