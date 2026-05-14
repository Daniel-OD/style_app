import { useMemo } from "react";
import { T, styles } from "../design/tokens";
import { occasions } from "../data/occasions";
import { outfits } from "../data/outfits";
import { useOutfitSelection } from "../hooks/useOutfitSelection";
import { Figure, InfoPanel, LabelRow, PillTabs, ScoreBadge, SwatchGrid, TipList, Icon } from "../components/ui";

function OutfituriScreen() {
  const { occ, setOcc, activeId, activeV, detailOpen, select, setActiveV, toggleDetail } = useOutfitSelection();

  const visible = useMemo(() => (occ === "all" ? outfits : outfits.filter((item) => item.cats.includes(occ))), [occ]);
  const active = visible.find((item) => item.id === activeId) || visible[0];
  const version = active?.versions.find((item) => item.v === activeV) || active?.versions[0];

  return (
    <section style={{ display: "grid", gap: T.sp5 }}>
      <div style={{ display: "grid", gap: T.sp2 }}>
        <p style={{ margin: 0, color: T.textMuted, fontSize: T.textXs, letterSpacing: T.trackingWidest, textTransform: "uppercase" }}>
          Outfituri
        </p>
        <h2 style={{ margin: 0, fontFamily: T.fontDisplay, fontSize: T.textXl, fontWeight: T.weightSemi }}>Browser de ținute</h2>
      </div>

      <PillTabs
        ariaLabel="Filtru ocazii"
        options={occasions.map((item) => ({ id: item.id, label: item.label }))}
        value={occ}
        onChange={setOcc}
      />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: T.sp4 }}>
        <article style={{ ...styles.card, display: "grid", gap: T.sp2 }}>
          <h3 style={{ margin: 0, fontSize: T.textMd, fontWeight: T.weightSemi }}>Ținute</h3>
          {visible.map((item) => {
            const activeItem = item.id === active?.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => select(item.id)}
                style={{
                  minHeight: 44,
                  border: `0.5px solid ${activeItem ? T.bgInk : T.border}`,
                  borderRadius: T.rSm,
                  padding: `${T.sp2}px ${T.sp3}px`,
                  background: activeItem ? T.bgSubtle : T.bgCard,
                  color: T.textPrimary,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: T.sp2,
                  cursor: "pointer",
                  fontFamily: T.fontBody,
                }}
              >
                <span style={{ display: "inline-flex", alignItems: "center", gap: T.sp2 }}>
                  <Icon name={item.iconName} size={16} />
                  {item.name}
                </span>
                <ScoreBadge score={item.score} />
              </button>
            );
          })}
        </article>

        {active && version ? (
          <article style={{ ...styles.card, display: "grid", gap: T.sp3 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: T.sp2 }}>
              <h3 style={{ margin: 0, fontSize: T.textLg, fontWeight: T.weightSemi }}>{active.name}</h3>
              <ScoreBadge score={active.score} />
            </div>

            <PillTabs
              ariaLabel="Versiuni ținută"
              options={active.versions.map((item) => ({ id: String(item.v), label: item.label }))}
              value={String(version.v)}
              onChange={(v) => setActiveV(Number(v))}
            />

            <Figure f={version.fig} />
            <LabelRow label="Categorie" value={active.cats.join(", ")} size="md" />
            <LabelRow label="Poveste cromatică" value={active.colorStory} size="sm" />
            <SwatchGrid colors={active.palette} columns={4} />

            <button
              type="button"
              onClick={toggleDetail}
              style={{
                minHeight: 44,
                border: `0.5px solid ${T.border}`,
                borderRadius: T.rSm,
                background: T.bgCard,
                color: T.textSecondary,
                cursor: "pointer",
                fontFamily: T.fontBody,
              }}
            >
              {detailOpen ? "Ascunde detalii" : "Arată detalii"}
            </button>

            {detailOpen ? (
              <div style={{ display: "grid", gap: T.sp3 }}>
                <TipList items={version.pieces} variant="tips" />
                <TipList items={version.tips} variant="tips" />
                <TipList items={version.avoid} variant="avoid" />
              </div>
            ) : null}
          </article>
        ) : null}
      </div>

      <InfoPanel variant="light">
        Alege întâi ocazia, apoi varianta. Păstrează fit-ul corect și maximum patru culori active.
      </InfoPanel>
    </section>
  );
}

export default OutfituriScreen;
