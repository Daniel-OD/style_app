import { T } from "../../design/tokens";
import { TEORIE_CONTENT } from "../../data/teorie";
import { InfoPanel, TipList } from "../../components/ui";

const PsihologieContent = () => {
  const section = TEORIE_CONTENT.psihologie;
  return (
    <div style={{ display: "grid", gap: T.sp3 }}>
      <InfoPanel title={section.title} text={section.intro} icon="brain" />
      <TipList items={section.bullets} />
    </div>
  );
};

export default PsihologieContent;
