import { useMemo, useState } from "react";
import { T } from "../design/tokens";
import { TEORIE_SECTIONS } from "../data/teorie";
import { PillTabs } from "../components/ui";
import {
  AccesoriiContent,
  CapsuleContent,
  ChinoContent,
  GroomingContent,
  HaineContent,
  IncredereContent,
  MaterialeContent,
  ParfumContent,
  PrincipiiContent,
  PsihologieContent,
  SezoaneContent,
  TonContent,
} from "./teorie";

const CONTENT_MAP = {
  principii: PrincipiiContent,
  ton: TonContent,
  sezoane: SezoaneContent,
  haine: HaineContent,
  materiale: MaterialeContent,
  grooming: GroomingContent,
  parfum: ParfumContent,
  accesorii: AccesoriiContent,
  chino: ChinoContent,
  psihologie: PsihologieContent,
  incredere: IncredereContent,
  capsule: CapsuleContent,
};

const TeorieScreen = () => {
  const [active, setActive] = useState(TEORIE_SECTIONS[0]?.id || "principii");
  const ActiveContent = useMemo(() => CONTENT_MAP[active] || PrincipiiContent, [active]);

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
          Knowledge Base
        </p>
        <h2
          style={{
            margin: 0,
            fontFamily: T.fontDisplay,
            fontSize: T.textXl,
            fontWeight: T.weightSemi,
          }}
        >
          Teorie de stil
        </h2>
      </div>
      <PillTabs
        items={TEORIE_SECTIONS.map((section) => ({ id: section.id, label: section.title }))}
        active={active}
        onChange={setActive}
      />
      <article
        style={{
          background: T.bgCard,
          borderRadius: T.rLg,
          boxShadow: T.shadowRaised,
          padding: T.sp5,
        }}
      >
        <ActiveContent />
      </article>
    </section>
  );
};

export default TeorieScreen;
