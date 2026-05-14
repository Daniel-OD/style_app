import { T } from "../design/tokens";
import { RULES } from "../data/rules";
import { Accordion, InfoPanel } from "../components/ui";

const ReguliScreen = () => {
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
          Rulebook
        </p>
        <h2
          style={{
            margin: 0,
            fontFamily: T.fontDisplay,
            fontSize: T.textXl,
            fontWeight: T.weightSemi,
          }}
        >
          Reguli operaționale
        </h2>
      </div>

      <Accordion items={RULES} />

      <InfoPanel
        title="Aplicare rapidă"
        text="Verifică fit, paleta și contextul înainte de a ieși din casă. Dacă toate trei sunt aliniate, ținuta va funcționa în majoritatea situațiilor."
        icon="badgeCheck"
      />
    </section>
  );
};

export default ReguliScreen;
