import { T, styles } from "../design/tokens";
import { occasions } from "../data/occasions";
import { useOutfitSelection } from "../hooks/useOutfitSelection";
import { Figure, InfoPanel, LabelRow, PillTabs, ScoreBadge, SwatchGrid, TipList, Icon } from "../components/ui";

const microLabel = {
  margin: 0,
  color: T.textMuted,
  fontSize: T.textXs,
  letterSpacing: T.trackingWidest,
  textTransform: "uppercase",
};

const bodyText = {
  margin: 0,
  fontSize: T.textSm,
  color: T.textSecondary,
  lineHeight: 1.6,
};

const tagBase = {
  borderRadius: T.rFull,
  padding: `${T.sp1}px ${T.sp3}px`,
  fontSize: T.textXs,
  fontWeight: T.weightMedium,
  letterSpacing: "0.03em",
};

const tagFor = {
  ...tagBase,
  background: T.successBg,
  color: T.success,
  border: `0.5px solid ${T.success}`,
};

const tagAvoid = {
  ...tagBase,
  background: T.dangerBg,
  color: T.danger,
  border: `0.5px solid ${T.danger}`,
};

function StoryBlock({ label, text }) {
  if (!text) return null;
  return (
    <div style={{ display: "grid", gap: T.sp1 }}>
      <p style={microLabel}>{label}</p>
      <p style={bodyText}>{text}</p>
    </div>
  );
}

function TagList({ label, items, tagStyle }) {
  if (!items?.length) return null;
  return (
    <div style={{ display: "grid", gap: T.sp2 }}>
      <p style={microLabel}>{label}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: T.sp1 }}>
        {items.map((item) => (
          <span key={item} style={tagStyle}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function OutfituriScreen() {
  const { occ, setOcc, activeId, activeV, detailOpen, select, setActiveV, toggleDetail, visibleOutfits: visible } = useOutfitSelection();

  const active = visible.find((item) => item.id === activeId) || visible[0];
  const version = active?.versions.find((item) => item.v === activeV) || active?.versions[0];

  return (
    <section style={{ display: "grid", gap: T.sp5 }}>
      <div style={{ display: "grid", gap: T.sp2 }}>
        <p style={microLabel}>Outfituri</p>
        <h2 style={{ margin: 0, fontFamily: T.fontDisplay, fontSize: "var(--app-section-title-size)", fontWeight: T.weightSemi, lineHeight: 1.15 }}>Browser de ținute</h2>
      </div>

      <PillTabs
        ariaLabel="Filtru ocazii"
        options={occasions.map((item) => ({ id: item.id, label: item.label, iconName: item.iconName }))}
        value={occ}
        onChange={setOcc}
      />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(280px,100%),1fr))", gap: T.sp4 }}>
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
              options={active.versions.map((item) => ({ id: String(item.v), label: item.label, iconName: active.iconName }))}
              value={String(version.v)}
              onChange={(v) => setActiveV(Number(v))}
            />

            <Figure f={version.fig} />

            {active.energy ? (
              <div style={{ textAlign: "center" }}>
                <p
                  style={{
                    margin: 0,
                    fontFamily: T.fontDisplay,
                    fontSize: T.textMd,
                    fontWeight: T.weightSemi,
                    color: T.textPrimary,
                    lineHeight: 1.3,
                  }}
                >
                  {active.energy}
                </p>
              </div>
            ) : null}

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
                <StoryBlock label="Impresie" text={active.impression} />
                <StoryBlock label="Voce de stil" text={active.styleVoice} />
                <TagList label="Recomandat pentru" items={active.bestFor} tagStyle={tagFor} />
                <TagList label="Evita la" items={active.avoidIf} tagStyle={tagAvoid} />
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

