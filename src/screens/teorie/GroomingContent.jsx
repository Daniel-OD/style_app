import { T } from "../../design/tokens";
import { TEORIE_CONTENT } from "../../data/teorie";
import { InfoPanel, TipList } from "../../components/ui";

const GroomingContent = () => {
  const section = TEORIE_CONTENT.grooming;
  return (
    <div style={{ display: "grid", gap: T.sp3 }}>
      <InfoPanel title={section.title} text={section.intro} icon="badgeCheck" />
      <TipList items={section.bullets} />
    </div>
  );
};

export default GroomingContent;
