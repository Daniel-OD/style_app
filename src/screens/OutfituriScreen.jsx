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
      <div style={{ display: "flex", flexWrap: "wrap", gap: T.sp1, minWidth: 0 }}>
        {items.map((item) => (
          <span key={item} style={{ ...tagStyle, maxWidth: "100%", overflowWrap: "anywhere" }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function OutfitButton({ item, active, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(item.id)}
      style={{
        minHeight: 76,
        border: `0.5px solid ${active ? T.borderAccent || T.accent : T.border}`,
        borderRadius: T.rMd,
        padding: T.sp3,
        background: active ? T.bgAccent || T.bgSubtle : T.bgCard,
        color: T.textPrimary,
        display: "grid",
        gridTemplateColumns: "44px minmax(0, 1fr) auto",
        alignItems: "center",
        gap: T.sp3,
        cursor: "pointer",
        fontFamily: T.fontBody,
        textAlign: "left",
        boxShadow: active ? T.shadowRaised : T.shadowNone,
        width: "100%",
        minWidth: 0,
      }}
    >
      <span
        style={{
          width: 44,
          height: 44,
          borderRadius: T.rMd,
          background: T.bgSubtle,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          color: T.textPrimary,
        }}
      >
        <Icon name={item.iconName} size={20} />
      </span>
      <span style={{ display: "grid", gap: T.sp1, minWidth: 0 }}>
        <span style={{ fontFamily: T.fontDisplay, fontSize: T.textLg, fontWeight: T.weightSemi, lineHeight: 1.1, overflowWrap: "anywhere" }}>
          {item.name}
        </span>
        {item.energy ? (
          <span style={{ color: T.textSecondary, fontSize: T.textSm, lineHeight: 1.35, overflowWrap: "anywhere" }}>
            {item.energy}
          </span>
        ) : null}
      </span>
      {active ? <Icon name="check" size={20} /> : <Icon name="chevronRight" size={18} />}
    </button>
  );
}

function OutfituriScreen() {
  const { occ, setOcc, activeId, activeV, detailOpen, select, setActiveV, toggleDetail, visibleOutfits: visible } = useOutfitSelection();

  const active = visible.find((item) => item.id === activeId) || visible[0];
  const version = active?.versions.find((item) => item.v === activeV) || active?.versions[0];

  return (
    <section style={{ display: "grid", gap: "var(--app-content-gap)", minWidth: 0 }}>
      <PillTabs
        ariaLabel="Filtru ocazii"
        options={occasions.map((item) => ({ id: item.id, label: item.label, iconName: item.iconName }))}
        value={occ}
        onChange={setOcc}
      />

      {active && version ? (
        <article style={{ ...styles.card, display: "grid", gap: T.sp3, padding: "var(--app-card-padding)", minWidth: 0 }}>
          <div style={{ display: "grid", gap: T.sp2 }}>
            <p style={microLabel}>Ținuta selectată</p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", gap: T.sp2, flexWrap: "wrap" }}>
              <div style={{ display: "grid", gap: T.sp1, minWidth: 0 }}>
                <h2 style={{ margin: 0, fontFamily: T.fontDisplay, fontSize: "var(--app-section-title-size)", fontWeight: T.weightSemi, lineHeight: 1.1, overflowWrap: "anywhere" }}>
                  {active.name}
                </h2>
                {active.energy ? <p style={{ ...bodyText, fontSize: T.textBase }}>{active.energy}</p> : null}
              </div>
              <ScoreBadge score={active.score} />
            </div>
          </div>

          <PillTabs
            ariaLabel="Versiuni ținută"
            options={active.versions.map((item) => ({ id: String(item.v), label: item.label, iconName: active.iconName }))}
            value={String(version.v)}
            onChange={(v) => setActiveV(Number(v))}
          />

          <Figure f={version.fig} />

          <StoryBlock label="Impresie" text={active.impression} />
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
              <StoryBlock label="Voce de stil" text={active.styleVoice} />
              <TagList label="Recomandat pentru" items={active.bestFor} tagStyle={tagFor} />
              <TagList label="Evită dacă" items={active.avoidIf} tagStyle={tagAvoid} />
              <TipList items={version.pieces} variant="tips" />
              <TipList items={version.tips} variant="tips" />
              <TipList items={version.avoid} variant="avoid" />
            </div>
          ) : null}
        </article>
      ) : null}

      <article style={{ ...styles.card, display: "grid", gap: T.sp3, padding: "var(--app-card-padding)", minWidth: 0 }}>
        <div style={{ display: "grid", gap: T.sp1 }}>
          <p style={microLabel}>Ținute</p>
          <h3 style={{ margin: 0, fontFamily: T.fontDisplay, fontSize: T.textLg, fontWeight: T.weightSemi }}>Alege direcția</h3>
        </div>
        <div style={{ display: "grid", gap: T.sp3 }}>
          {visible.map((item) => (
            <OutfitButton key={item.id} item={item} active={item.id === active?.id} onSelect={select} />
          ))}
        </div>
      </article>

      <InfoPanel variant="light">
        Alege întâi ocazia, apoi varianta. Păstrează fit-ul corect și maximum patru culori active.
      </InfoPanel>
    </section>
  );
}

export default OutfituriScreen;
