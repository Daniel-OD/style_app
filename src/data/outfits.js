export const OUTFITS = [
  {
    id: "presenter",
    name: "The Presenter",
    occasion: "office",
    season: "all-season",
    score: 9,
    items: [
      "Cămașă guler mandarin olive",
      "Pantalon chino bej",
      "Desert boots maro suede",
      "Curea maro",
    ],
    notes:
      "Gulerul mandarin dă autoritate vizuală fără să fie corporate. Chino bej + boots maro = paletă terestră perfectă.",
    palette: ["#64724b", "#d9c2a8", "#6f4a2b", "#f0e9d8"],
    figure: {
      top: "#64724b",
      shirt: "#d9c2a8",
      bottom: "#d9c2a8",
      shoes: "#6f4a2b",
    },
    tips: [
      "Cămașa călcată obligatoriu — ridurile o sabotează complet",
      "Mâneci rulate la jumătate pentru look mai relaxat",
      "French tuck pentru siluetă mai curată",
    ],
    avoid: ["Sneakers sport", "Cămașă șifonată"],
  },
  {
    id: "minimal-pro",
    name: "The Minimal Pro",
    occasion: "casual",
    season: "all-season",
    score: 8.5,
    items: [
      "Polo knit olive",
      "Pantalon chino bej",
      "Desert boots maro suede",
    ],
    notes: "Cea mai versatilă combinație din garderobă. Polo knit = smart fără efort.",
    palette: ["#5a6844", "#d9c2a8", "#f0e9d8", "#6f4a2b"],
    figure: {
      top: "#5a6844",
      shirt: "#5a6844",
      bottom: "#d9c2a8",
      shoes: "#6f4a2b",
    },
    tips: [
      "1-2 nasturi deschiși — mai relaxat, mai modern",
      "Nu băga polo-ul în pantaloni — lasă-l să cadă natural",
      "Scuturat bine înainte de purtat",
    ],
    avoid: ["Overshirt olive în aceeași nuanță", "Pantaloni jogger gri"],
  },
  {
    id: "evening-edit",
    name: "The Evening Edit",
    occasion: "event",
    season: "all-season",
    score: 8,
    items: [
      "Quarter-zip alb",
      "Pantalon carouri bej/navy",
      "Desert boots maro suede",
    ],
    notes:
      "Caroul preia rolul de statement piece. Albul îl lasă să respire. Boots-urile ancorează în smart casual.",
    palette: ["#f5f5f0", "#1e2d4a", "#d9c2a8", "#6f4a2b"],
    figure: {
      top: "#f0ede8",
      shirt: "#f0ede8",
      bottom: "#7a8a6a",
      shoes: "#6f4a2b",
    },
    tips: [
      "Verifică pata de pe quarter-zip înainte",
      "Nu adăuga alt print sau dungi",
      "Scoate scamele de pe pantaloni",
    ],
    avoid: ["Carouri + dungi simultan", "Sneakers albi sport"],
  },
  {
    id: "layered-casual",
    name: "The Layered Casual",
    occasion: "weekend",
    season: "primăvară-toamnă",
    score: 7.5,
    items: [
      "Tricou dungi alb/caramel",
      "Blugi light blue",
      "Overshirt olive deschis",
      "Sneakers crem suede",
    ],
    notes:
      "Cel mai relaxat outfit. Layering cu overshirt deschis funcționează bine. Paleta caldă și echilibrată.",
    palette: ["#c4956a", "#64724b", "#7a9ab5", "#f0e9d8"],
    figure: {
      top: "#e8d5b8",
      shirt: "#e8d5b8",
      bottom: "#7a9ab5",
      shoes: "#e8e0d0",
    },
    tips: [
      "Rulează mânecile overshirt-ului — arată mai intenționat",
      "Verifică blugi să nu aibă pete vizibile",
      "Șterge sneakers cu o cârpă umedă înainte",
    ],
    avoid: ["Overshirt + polo olive aceeași nuanță", "Dungi + carouri simultan"],
  },
  {
    id: "smart-mover",
    name: "The Smart Mover",
    occasion: "smart-casual",
    season: "all-season",
    score: 7,
    items: [
      "Cămașă mandarin olive",
      "Pantalon carouri bej/navy",
      "Sneakers crem suede",
    ],
    notes:
      "Combinație îndrăzneață dar coerentă. Mandarin olive + carouri funcționează pentru că paleta e terestră.",
    palette: ["#64724b", "#8a9478", "#1e2d4a", "#f0e9d8"],
    figure: {
      top: "#64724b",
      shirt: "#64724b",
      bottom: "#7a8a6a",
      shoes: "#e8e0d0",
    },
    tips: [
      "Cămașa călcată obligatoriu",
      "Lasă cămașa pe afară, nebăgată în pantaloni",
      "Cea mai sensibilă combinație la fier de călcat",
    ],
    avoid: ["Pantofi formali negri", "Dungi cu carouri"],
  },
];

const LEGACY_IDS = ["A", "B", "C", "D", "E"];
const ICON_NAMES = ["presenter", "minimal", "evening", "layered", "mover"];

export const outfits = OUTFITS.map((outfit, index) => ({
  id: LEGACY_IDS[index] || outfit.id,
  iconName: ICON_NAMES[index] || "outfits",
  name: outfit.name,
  score: outfit.score,
  occasion: outfit.occasion,
  season: outfit.season,
  items: outfit.items,
  notes: outfit.notes,
  palette: outfit.palette,
  figure: outfit.figure,
  tips: outfit.tips,
  avoid: outfit.avoid,
  cats: [outfit.occasion],
  colorStory: outfit.notes,
  versions: [
    {
      v: 0,
      label: outfit.name,
      fig: {
        top: outfit.figure.top,
        layer: outfit.figure.shirt,
        shirt: outfit.figure.shirt,
        bottom: outfit.figure.bottom,
        shoes: outfit.figure.shoes,
      },
      pieces: outfit.items,
      tips: outfit.tips,
      avoid: outfit.avoid,
    },
  ],
}));
