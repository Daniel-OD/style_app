import { FIG, T } from "../../design/tokens";
import { motion } from "../../design/motion";

const blockMotion = {
  transition: motion.safeTransition("background-color 300ms ease, opacity 300ms ease"),
};

/**
 * Compact editorial outfit board.
 * Keeps the clothing color relationship visible without creating tall mobile whitespace.
 *
 * @param {object} props
 * @param {{top?: string, bottom?: string, socks?: string, shoes?: string, belt?: string, layer?: string | null, accent?: string}} props.f
 */
function Figure({ f }) {
  const figure = f || {};
  const layerFill = figure.layer || null;
  const topFill = figure.top || FIG.neutral;
  const bottomFill = figure.bottom || FIG.neutralDeep;
  const shoesFill = figure.shoes || FIG.neutralDeep;
  const accentFill = figure.belt || figure.accent || shoesFill;

  return (
    <div
      aria-hidden="true"
      style={{
        width: "100%",
        minWidth: 0,
        borderRadius: T.rLg,
        background: T.bgSubtle,
        padding: T.sp3,
        display: "grid",
        gap: T.sp2,
        overflow: "hidden",
      }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: T.sp2, minHeight: 104 }}>
        <div style={{ display: "grid", gap: T.sp2, minWidth: 0 }}>
          {layerFill ? (
            <div
              style={{
                ...blockMotion,
                minHeight: 30,
                borderRadius: T.rMd,
                background: layerFill,
                boxShadow: "inset 0 0 0 999px rgba(255,255,255,.08)",
              }}
            />
          ) : null}
          <div
            style={{
              ...blockMotion,
              minHeight: layerFill ? 44 : 78,
              borderRadius: T.rMd,
              background: topFill,
              boxShadow: "inset 0 0 0 999px rgba(255,255,255,.06)",
            }}
          />
          <div
            style={{
              ...blockMotion,
              height: 8,
              borderRadius: T.rFull,
              background: accentFill,
              opacity: 0.72,
            }}
          />
        </div>
        <div style={{ display: "grid", gap: T.sp2, minWidth: 0 }}>
          <div
            style={{
              ...blockMotion,
              minHeight: 78,
              borderRadius: T.rMd,
              background: bottomFill,
              boxShadow: "inset 0 0 0 999px rgba(255,255,255,.05)",
            }}
          />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: T.sp2 }}>
            <div style={{ ...blockMotion, height: 18, borderRadius: T.rFull, background: shoesFill }} />
            <div style={{ ...blockMotion, height: 18, borderRadius: T.rFull, background: shoesFill }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Figure;
