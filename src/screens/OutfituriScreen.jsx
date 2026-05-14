import { T } from "../design/tokens";
import { OCCASIONS } from "../data/occasions";
import { useOutfitSelection } from "../hooks/useOutfitSelection";
import { Figure, InfoPanel, LabelRow, PillTabs, ScoreBadge, SwatchGrid, TipList } from "../components/ui";

const cardStyle = {
  background: T.bgCard,
  borderRadius: T.rLg,
  boxShadow: T.shadowRaised,
  padding: T.sp4,
};

const OutfituriScreen = () => {
  const { occasion, setOccasion, outfits, selected, setSelectedId } = useOutfitSelection();

  return (
    <section style={{ display: "grid", gap: T.sp5 }}>
      <div style={{ display: "grid", gap: T.sp3 }}>
        <p
          style={{
            margin: 0,
            color: T.textMuted,
            textTransform: "uppercase",
            letterSpacing: T.trackingWidest,
            fontSize: T.textXs,
            fontWeight: T.weightSemi,
          }}
        >
          Outfit Engine
        </p>
        <h2
          style={{
            margin: 0,
            fontFamily: T.fontDisplay,
            fontSize: T.textXl,
            fontWeight: T.weightSemi,
          }}
        >
          Recomandări de ținute
        </h2>
        <p style={{ margin: 0, color: T.textSecondary, fontSize: T.textMd, maxWidth: 760 }}>
          Filtrează după context și compară rapid coerența cromatică, nivelul de formalitate și scorul de impact.
        </p>
      </div>

      <PillTabs items={OCCASIONS.map((o) => ({ id: o.id, label: o.label }))} active={occasion} onChange={setOccasion} />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: T.sp4 }}>
        <div style={{ ...cardStyle, display: "grid", gap: T.sp3 }}>
          <h3 style={{ margin: 0, fontSize: T.textMd, fontWeight: T.weightSemi }}>Opțiuni</h3>
          <div style={{ display: "grid", gap: T.sp2 }}>
            {outfits.map((outfit) => {
              const active = outfit.id === selected?.id;
              return (
                <button
                  key={outfit.id}
                  type="button"
                  onClick={() => setSelectedId(outfit.id)}
                  style={{
                    border: "none",
                    background: active ? T.bgSubtle : "transparent",
                    borderRadius: T.rMd,
                    padding: T.sp3,
                    textAlign: "left",
                    cursor: "pointer",
                    display: "grid",
                    gap: T.sp1,
                  }}
                >
                  <span
                    style={{
                      fontFamily: T.fontDisplay,
                      fontSize: T.textMd,
                      fontWeight: T.weightSemi,
                      color: T.textPrimary,
                    }}
                  >
                    {outfit.name}
                  </span>
                  <span style={{ color: T.textMuted, fontSize: T.textSm }}>{outfit.season}</span>
                </button>
              );
            })}
          </div>
        </div>

        {selected ? (
          <div style={{ ...cardStyle, display: "grid", gap: T.sp3 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: T.sp3 }}>
              <h3
                style={{
                  margin: 0,
                  fontFamily: T.fontDisplay,
                  fontSize: T.textLg,
                  fontWeight: T.weightSemi,
                }}
              >
                {selected.name}
              </h3>
              <ScoreBadge score={selected.score} />
            </div>
            <Figure colors={selected.figure} />
            <SwatchGrid colors={selected.palette} />
            <LabelRow label="Ocazie" value={OCCASIONS.find((o) => o.id === selected.occasion)?.label || "General"} />
            <LabelRow label="Sezon" value={selected.season} />
            <TipList items={selected.items} />
            <p style={{ margin: 0, color: T.textSecondary, fontSize: T.textBase, lineHeight: 1.55 }}>{selected.notes}</p>
          </div>
        ) : null}
      </div>

      <InfoPanel
        icon="palette"
        title="Regulă de compoziție"
        text="Pornește de la o bază neutră, adaugă o piesă de structură și închide look-ul cu încălțăminte într-o nuanță apropiată de centură sau ceas."
      />
    </section>
  );
};

export default OutfituriScreen;
