import { T } from "../design/tokens";
import { teorieSections } from "../data/teorie";
import { Accordion } from "../components/ui";

function TeorieScreen() {
  return (
    <section style={{ display: "grid", gap: T.sp4 }}>
      <div style={{ display: "grid", gap: T.sp2 }}>
        <p style={{ margin: 0, color: T.textMuted, fontSize: T.textXs, letterSpacing: T.trackingWidest, textTransform: "uppercase" }}>
          Teorie
        </p>
        <h2 style={{ margin: 0, fontFamily: T.fontDisplay, fontSize: "var(--app-section-title-size)", fontWeight: T.weightSemi, lineHeight: 1.15 }}>Fundamente de stil</h2>
      </div>

      {teorieSections.slice(0, 5).map((section, index) => (
        <Accordion key={section.id} title={section.title} icon={section.iconName} defaultOpen={index === 0}>
          {section.body}
        </Accordion>
      ))}
    </section>
  );
}

export default TeorieScreen;
