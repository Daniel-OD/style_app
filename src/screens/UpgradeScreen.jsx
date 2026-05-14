import { T, styles } from "../design/tokens";
import { upgrade } from "../data/upgrade";
import { Icon, TipList } from "../components/ui";

function UpgradeScreen() {
  return (
    <section style={{ display: "grid", gap: T.sp5 }}>
      <div style={{ display: "grid", gap: T.sp2 }}>
        <p style={{ margin: 0, color: T.textMuted, fontSize: T.textXs, letterSpacing: T.trackingWidest, textTransform: "uppercase" }}>
          Upgrade
        </p>
        <h2 style={{ margin: 0, fontFamily: T.fontDisplay, fontSize: T.textXl, fontWeight: T.weightSemi }}>Pași de upgrade</h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: T.sp4 }}>
        {upgrade.map((item) => (
          <article key={item.id} style={{ ...styles.card, display: "grid", gap: T.sp3 }}>
            <h3 style={{ margin: 0, display: "inline-flex", alignItems: "center", gap: T.sp2, fontSize: T.textMd, fontWeight: T.weightSemi }}>
              <Icon name={item.iconName} size={16} />
              {item.title}
            </h3>
            <TipList items={item.notes} variant="tips" />
          </article>
        ))}
      </div>
    </section>
  );
}

export default UpgradeScreen;
