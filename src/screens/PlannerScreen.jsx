import { T } from "../design/tokens";
import { WEEK_PLANNER } from "../data/planner";
import { OCCASIONS } from "../data/occasions";
import { Icon, TipList } from "../components/ui";

const PlannerScreen = () => {
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
          Weekly Flow
        </p>
        <h2
          style={{
            margin: 0,
            fontFamily: T.fontDisplay,
            fontSize: T.textXl,
            fontWeight: T.weightSemi,
          }}
        >
          Planner săptămânal
        </h2>
      </div>

      <div style={{ display: "grid", gap: T.sp3 }}>
        {WEEK_PLANNER.map((entry) => {
          const occasionLabel = OCCASIONS.find((item) => item.id === entry.occasion)?.label || "General";
          return (
            <article
              key={entry.day}
              style={{
                background: T.bgCard,
                borderRadius: T.rLg,
                boxShadow: T.shadowRaised,
                padding: T.sp4,
                display: "grid",
                gap: T.sp2,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: T.sp3 }}>
                <h3 style={{ margin: 0, fontSize: T.textMd, fontWeight: T.weightSemi }}>{entry.day}</h3>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: T.sp1,
                    color: T.textMuted,
                    fontSize: T.textSm,
                    textTransform: "uppercase",
                    letterSpacing: T.trackingWidest,
                  }}
                >
                  <Icon name="calendar" size={14} /> {occasionLabel}
                </span>
              </div>
              <p style={{ margin: 0, color: T.textPrimary, fontSize: T.textBase, fontWeight: T.weightMedium }}>
                {entry.focus}
              </p>
              <TipList items={entry.tips} />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default PlannerScreen;
