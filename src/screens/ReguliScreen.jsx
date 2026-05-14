import { T } from "../design/tokens";
import { rules } from "../data/rules";
import { Accordion, InfoPanel } from "../components/ui";

function ReguliScreen() {
  return (
    <section style={{ display: "grid", gap: T.sp4 }}>
      <div style={{ display: "grid", gap: T.sp2 }}>
        <p style={{ margin: 0, color: T.textMuted, fontSize: T.textXs, letterSpacing: T.trackingWidest, textTransform: "uppercase" }}>
          Reguli
        </p>
        <h2 style={{ margin: 0, fontFamily: T.fontDisplay, fontSize: T.textXl, fontWeight: T.weightSemi }}>Reguli de aur</h2>
      </div>

      {rules.map((item, index) => (
        <Accordion key={item.id} title={item.title} icon="rules" defaultOpen={index === 0}>
          {item.body}
        </Accordion>
      ))}

      <InfoPanel variant="warning">Aplică întâi fit-ul, apoi culoarea, apoi accesoriile.</InfoPanel>
    </section>
  );
}

export default ReguliScreen;
