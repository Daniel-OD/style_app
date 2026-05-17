export const OUTFITS = [
  {
    id: "presenter",
    name: "The Presenter",
    energy: "Autoritate calmă",
    impression:
      "Pare competent fără rigiditate și relaxat fără neglijență.",
    styleVoice:
      "Italian smart casual cu tonuri terestre și contrast moale.",
    bestFor: ["Workshop", "Prezentare", "Cină business casual"],
    avoidIf: ["Eveniment black tie", "Caniculă agresivă"],
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
      "Olive + bej + suede maro creează autoritate caldă fără rigiditate corporate.",
    palette: ["#64724b", "#d9c2a8", "#6f4a2b", "#f0e9d8"],
    figure: {
      top: "#64724b",
      shirt: "#d9c2a8",
      bottom: "#d9c2a8",
      shoes: "#6f4a2b",
    },
    tips: [
      "Cămașa călcată obligatoriu",
      "Mâneci rulate la jumătate",
      "French tuck pentru siluetă mai curată",
    ],
    avoid: ["Sneakers sport", "Cămașă șifonată"],
  },
  {
    id: "minimal-pro",
    name: "The Minimal Pro",
    energy: "Competență liniștită",
    impression:
      "Transmite control și claritate fără să pară că încearcă prea mult.",
    styleVoice:
      "Minimalism masculin modern cu influențe nordice și layering discret.",
    bestFor: ["Brunch", "Office casual", "Întâlniri relaxate"],
    avoidIf: ["Evenimente foarte formale"],
    occasion: "casual",
    season: "all-season",
    score: 8.5,
    items: [
      "Polo knit olive",
      "Pantalon chino bej",
      "Desert boots maro suede",
    ],
    notes: "Polo knit olive creează un smart casual foarte controlat și modern.",
    palette: ["#5a6844", "#d9c2a8", "#f0e9d8", "#6f4a2b"],
    figure: {
      top: "#5a6844",
      shirt: "#5a6844",
      bottom: "#d9c2a8",
      shoes: "#6f4a2b",
    },
    tips: ["1-2 nasturi deschiși", "Lasă polo-ul să cadă natural"],
    avoid: ["Joggeri sport", "Overshirt identic cromatic"],
  },
  {
    id: "evening-edit",
    name: "The Evening Edit",
    energy: "Atenție controlată",
    impression:
      "Atrage atenția prin contrast și proporții, nu prin agresivitate vizuală.",
    styleVoice:
      "Evening smart casual european cu accent pe textură și ritm cromatic.",
    bestFor: ["Cină", "Date", "Petrecere elegantă"],
    avoidIf: ["Evenimente ultra conservative"],
    occasion: "event",
    season: "all-season",
    score: 8,
    items: [
      "Quarter-zip alb",
      "Pantalon carouri bej/navy",
      "Desert boots maro suede",
    ],
    notes:
      "Caroul devine statement piece, iar quarter-zip-ul păstrează echilibrul vizual.",
    palette: ["#f5f5f0", "#1e2d4a", "#d9c2a8", "#6f4a2b"],
    figure: {
      top: "#f0ede8",
      shirt: "#f0ede8",
      bottom: "#7a8a6a",
      shoes: "#6f4a2b",
    },
    tips: ["Nu adăuga alt print", "Curăță scamele înainte"],
    avoid: ["Sneakers sport foarte chunky"],
  },
  {
    id: "layered-casual",
    name: "The Layered Casual",
    energy: "Relaxare creativă",
    impression:
      "Pare spontan și creativ fără să alunece în dezordine vizuală.",
    styleVoice:
      "Layering relaxat inspirat din editorialele de weekend contemporane.",
    bestFor: ["City Break", "Cafe hopping", "Weekend urban"],
    avoidIf: ["Meeting formal"],
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
      "Overshirt-ul olive aduce structură peste o bază foarte relaxată.",
    palette: ["#c4956a", "#64724b", "#7a9ab5", "#f0e9d8"],
    figure: {
      top: "#e8d5b8",
      shirt: "#e8d5b8",
      bottom: "#7a9ab5",
      shoes: "#e8e0d0",
    },
    tips: ["Rulează mânecile", "Curăță sneakers înainte"],
    avoid: ["Prea multe pattern-uri simultan"],
  },
  {
    id: "smart-mover",
    name: "The Smart Mover",
    energy: "Flexibilitate inteligentă",
    impression:
      "Se adaptează ușor între casual și smart fără să piardă coerența.",
    styleVoice:
      "Smart casual mobil cu contrast soft și energie contemporană.",
    bestFor: ["Business Casual", "Conferință", "Networking"],
    avoidIf: ["Dress code ultra formal"],
    occasion: "smart-casual",
    season: "all-season",
    score: 7,
    items: [
      "Cămașă mandarin olive",
      "Pantalon carouri bej/navy",
      "Sneakers crem suede",
    ],
    notes:
      "Mandarin olive + carouri funcționează datorită paletei calde și controlate.",
    palette: ["#64724b", "#8a9478", "#1e2d4a", "#f0e9d8"],
    figure: {
      top: "#64724b",
      shirt: "#64724b",
      bottom: "#7a8a6a",
      shoes: "#e8e0d0",
    },
    tips: ["Cămașa trebuie impecabil călcată"],
    avoid: ["Pantofi formali negri"],
  },
];

const LEGACY_META = {
  presenter: { id: "A", iconName: "presenter" },
  "minimal-pro": { id: "B", iconName: "minimal" },
  "evening-edit": { id: "C", iconName: "evening" },
  "layered-casual": { id: "D", iconName: "layered" },
  "smart-mover": { id: "E", iconName: "mover" },
};

const OCCASION_MAP = {
  office: "Prezentare",
  casual: "Teambuilding",
  event: "Petrecere",
  weekend: "City Break",
  "smart-casual": "Business Casual",
};

export const outfits = OUTFITS.map((outfit) => ({
  id: LEGACY_META[outfit.id]?.id || outfit.id,
  iconName: LEGACY_META[outfit.id]?.iconName || "outfits",
  name: outfit.name,
  energy: outfit.energy,
  impression: outfit.impression,
  styleVoice: outfit.styleVoice,
  bestFor: outfit.bestFor,
  avoidIf: outfit.avoidIf,
  score: outfit.score,
  occasion: outfit.occasion,
  season: outfit.season,
  items: outfit.items,
  notes: outfit.notes,
  palette: outfit.palette,
  figure: outfit.figure,
  tips: outfit.tips,
  avoid: outfit.avoid,
  cats: [OCCASION_MAP[outfit.occasion] || outfit.occasion],
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
