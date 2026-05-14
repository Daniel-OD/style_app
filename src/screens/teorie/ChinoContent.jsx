import { T } from "../../design/tokens";
import { TEORIE_CONTENT } from "../../data/teorie";
import { InfoPanel, TipList } from "../../components/ui";

const ChinoContent = () => {
  const section = TEORIE_CONTENT.chino;
  return (
    <div style={{ display: "grid", gap: T.sp3 }}>
      <InfoPanel title={section.title} text={section.intro} icon="target" />
      <TipList items={section.bullets} />
    </div>
  );
};

export default ChinoContent;
