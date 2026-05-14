import { useEffect, useMemo, useState } from "react";
import { OUTFITS } from "../data/outfits";

/**
 * @returns {{occasion: string, setOccasion: (id: string) => void, outfits: typeof OUTFITS, selected: typeof OUTFITS[number] | null, setSelectedId: (id: string) => void}}
 */
export const useOutfitSelection = () => {
  const [occasion, setOccasion] = useState("all");
  const [selectedId, setSelectedId] = useState(OUTFITS[0]?.id || "");

  const outfits = useMemo(() => {
    const filtered =
      occasion === "all"
        ? OUTFITS
        : OUTFITS.filter((outfit) => outfit.occasion === occasion);
    return [...filtered].sort((a, b) => b.score - a.score);
  }, [occasion]);

  const selected = outfits.find((item) => item.id === selectedId) || outfits[0] || null;

  useEffect(() => {
    if (!selected) return;
    if (selected.id !== selectedId) {
      setSelectedId(selected.id);
    }
  }, [selected, selectedId]);

  return {
    occasion,
    setOccasion,
    outfits,
    selected,
    setSelectedId,
  };
};
