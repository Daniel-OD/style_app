import { useMemo, useState } from "react";
import { T, styles } from "../design/tokens";
import { occasions, weatherOptions } from "../data/occasions";
import { planner } from "../data/planner";
import { outfits } from "../data/outfits";
import { Icon, InfoPanel, LabelRow, PillTabs } from "../components/ui";

function PlannerScreen() {
  const [occasion, setOccasion] = useState("business");
  const [weather, setWeather] = useState("indoor");

  const match = useMemo(
    () => planner.find((item) => item.occasion === occasion && item.weather === weather) || planner[0],
    [occasion, weather],
  );

  const outfit = outfits.find((item) => item.id === match?.outfitId);

  return (
    <section style={{ display: "grid", gap: T.sp5 }}>
      <div style={{ display: "grid", gap: T.sp2 }}>
        <p style={{ margin: 0, color: T.textMuted, fontSize: T.textXs, letterSpacing: T.trackingWidest, textTransform: "uppercase" }}>
          Planner
        </p>
        <h2 style={{ margin: 0, fontFamily: T.fontDisplay, fontSize: T.textXl, fontWeight: T.weightSemi }}>Recomandare ocazie + vreme</h2>
      </div>

      <PillTabs
        ariaLabel="Ocazie"
        options={occasions.filter((item) => item.id !== "all").map((item) => ({ id: item.id, label: item.label }))}
        value={occasion}
        onChange={setOccasion}
      />

      <PillTabs
        ariaLabel="Vreme"
        options={weatherOptions.map((item) => ({ id: item.id, label: item.label }))}
        value={weather}
        onChange={setWeather}
      />

      <article style={{ ...styles.card, display: "grid", gap: T.sp3 }}>
        <h3 style={{ margin: 0, fontSize: T.textLg, fontWeight: T.weightSemi }}>Propunere</h3>
        <LabelRow label="Ținută" value={outfit?.name || "N/A"} size="md" />
        <LabelRow label="Motiv" value={match?.reason || "N/A"} size="sm" />
        {outfit ? (
          <div style={{ display: "inline-flex", alignItems: "center", gap: T.sp2, color: T.textSecondary }}>
            <Icon name={outfit.iconName} size={16} /> {outfit.colorStory}
          </div>
        ) : null}
      </article>

      <InfoPanel variant="success">Verifică încălțămintea și stratul exterior înainte de plecare pentru contextul zilei.</InfoPanel>
    </section>
  );
}

export default PlannerScreen;
