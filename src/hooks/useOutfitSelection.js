import { useMemo, useState } from "react";
import { outfits } from "../data/outfits";

export function useOutfitSelection() {
  const [occ, setOcc] = useState("all");
  const [activeId, setActiveId] = useState(outfits[0]?.id || "");
  const [activeV, setActiveV] = useState(0);
  const [detailOpen, setDetailOpen] = useState(false);

  const visibleOutfits = useMemo(() => {
    if (occ === "all") return outfits;
    return outfits.filter((item) => item.cats.includes(occ));
  }, [occ]);

  const firstVisible = visibleOutfits[0]?.id;
  const selectedId = visibleOutfits.some((item) => item.id === activeId) ? activeId : firstVisible || "";

  const select = (id) => {
    setActiveId(id);
    setActiveV(0);
    setDetailOpen(false);
  };

  const toggleDetail = () => setDetailOpen((value) => !value);

  return {
    occ,
    setOcc,
    activeId: selectedId,
    activeV,
    detailOpen,
    visibleOutfits,
    select,
    setActiveV,
    toggleDetail,
  };
}
