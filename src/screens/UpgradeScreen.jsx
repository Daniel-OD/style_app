import { T } from "../design/tokens";
import { UPGRADE_PATH } from "../data/upgrade";
import { Icon, TipList } from "../components/ui";

const UpgradeScreen = () => {
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
          Upgrade Path
        </p>
        <h2
          style={{
            margin: 0,
            fontFamily: T.fontDisplay,
            fontSize: T.textXl,
            fontWeight: T.weightSemi,
          }}
        >
          Cum crești garderoba
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: T.sp4 }}>
        {UPGRADE_PATH.map((tier) => (
          <article
            key={tier.tier}
            style={{
              background: T.bgCard,
              borderRadius: T.rLg,
              boxShadow: T.shadowRaised,
              padding: T.sp4,
              display: "grid",
              gap: T.sp3,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: T.sp2 }}>
              <Icon name={tier.icon} color={T.textSecondary} />
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
                {tier.budget}
              </p>
            </div>
            <h3
              style={{
                margin: 0,
                fontFamily: T.fontDisplay,
                fontSize: T.textLg,
                fontWeight: T.weightSemi,
              }}
            >
              {tier.tier}
            </h3>
            <TipList items={tier.bullets} />
          </article>
        ))}
      </div>
    </section>
  );
};

export default UpgradeScreen;
