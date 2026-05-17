/**
 * skinTone.js — Analiză ton piele, 100% local în browser
 *
 * Pipeline:
 *   1. User uploadează poză sau face selfie
 *   2. Canvas extrage pixelii din zona centrală (față)
 *   3. Calculăm media RGB → convertim în HSL
 *   4. Clasificăm în warm / cool / neutral / deep / fair
 *   5. Mapăm la paleta din tokens.js
 *
 * Zero server. Zero API. Zero cost.
 */

/* ── CLASIFICARE TON ──────────────────────────────────────────── */

/**
 * Convertește RGB → HSL
 * @param {number} r 0-255
 * @param {number} g 0-255
 * @param {number} b 0-255
 * @returns {{ h: number, s: number, l: number }}
 */
export function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s;
  const l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
      default: h = 0;
    }
  }
  return { h: h * 360, s: s * 100, l: l * 100 };
}

/**
 * Clasifică tonul pielii pe baza HSL
 * @param {{ h: number, s: number, l: number }} hsl
 * @returns {ToneProfile}
 */
export function classifyTone(hsl) {
  const { h, s, l } = hsl;

  // Fair — foarte deschis, saturation scăzut
  if (l > 72) return TONE_PROFILES.fair;

  // Deep — foarte închis
  if (l < 30) return TONE_PROFILES.deep;

  // Warm — nuanțe galbene/roșii/portocalii (hue 15-50)
  if (h >= 15 && h <= 50 && s > 18) return TONE_PROFILES.warm;

  // Cool — nuanțe roz/roșii (hue 340-360 sau 0-15, sau hue 200-320)
  if ((h >= 340 || h <= 15) && s > 10) return TONE_PROFILES.cool;

  // Olive — nuanțe verzui-galben (hue 50-80, saturation medie)
  if (h >= 50 && h <= 80 && s > 12) return TONE_PROFILES.olive;

  return TONE_PROFILES.neutral;
}

/* ── PROFILE TONE ─────────────────────────────────────────────── */

/**
 * @typedef {Object} ToneProfile
 * @property {string} id
 * @property {string} label
 * @property {string} hex - culoarea reprezentativă
 * @property {string} description
 * @property {string[]} best - hex-uri de culori recomandate
 * @property {string[]} avoid - hex-uri de evitat
 * @property {string[]} outfitIds - outfit IDs recomandate
 * @property {string} tip
 */

export const TONE_PROFILES = {
  warm: {
    id: "warm",
    label: "Warm / Auriu",
    hex: "#d4956a",
    description: "Ten cald, auriu sau bronzat. Subton galben-portocaliu.",
    best: ["#64724b", "#d9c2a8", "#6f4a2b", "#c4956a", "#6b2737", "#8a7a62"],
    avoid: ["#9a9088", "#c8c8d0", "#b0c0d0"],
    outfitIds: ["presenter", "minimal-pro", "layered-casual"],
    tip: "Culorile pământoase — olive, bej, maro, camel, terracotta — sunt perfecte pentru tonul tău. Evită nuanțele reci și gri-albastre.",
    season: "Toamnă",
  },
  cool: {
    id: "cool",
    label: "Cool / Roz",
    hex: "#c4a0a0",
    description: "Ten rece cu subton roz sau albăstrui.",
    best: ["#17243b", "#6b2737", "#8a9478", "#c8c8d0", "#b0c0d0"],
    avoid: ["#d4956a", "#c4956a", "#c49a6c"],
    outfitIds: ["evening-edit", "smart-mover"],
    tip: "Navy, burgundy, gri rece și sage green te avantajează. Evită culorile prea calde sau portocalii.",
    season: "Iarnă / Vară",
  },
  neutral: {
    id: "neutral",
    label: "Neutral / Echilibrat",
    hex: "#c4a882",
    description: "Ten echilibrat — nici prea cald, nici prea rece.",
    best: ["#64724b", "#17243b", "#d9c2a8", "#6b2737", "#c4a882"],
    avoid: [],
    outfitIds: ["presenter", "minimal-pro", "evening-edit", "smart-mover", "layered-casual"],
    tip: "Ești norocos — poți purta atât culori calde cât și reci. Paleta ta earthy actuală funcționează perfect.",
    season: "Primăvară / Toamnă",
  },
  deep: {
    id: "deep",
    label: "Deep / Profund",
    hex: "#7a4a2a",
    description: "Ten închis, bogat. Contrast natural ridicat.",
    best: ["#f0e9d8", "#c4956a", "#17243b", "#c4a882", "#6b2737"],
    avoid: ["#9a9088", "#b0b0b0"],
    outfitIds: ["presenter", "layered-casual"],
    tip: "Contrastul funcționează excepțional pentru tine. Crem, alb și culori saturate dau impact vizual puternic.",
    season: "Iarnă / Toamnă",
  },
  fair: {
    id: "fair",
    label: "Fair / Deschis",
    hex: "#f5d5b8",
    description: "Ten deschis, delicat. Subton poate fi roz sau ivory.",
    best: ["#17243b", "#6b2737", "#8a9478", "#1e2d4a"],
    avoid: ["#f0e9d8", "#d9c2a8"],
    outfitIds: ["evening-edit", "smart-mover"],
    tip: "Culorile profunde și saturate creează contrast frumos. Evită bejurile prea apropiate de culoarea pielii.",
    season: "Primăvară / Iarnă",
  },
  olive: {
    id: "olive",
    label: "Olive / Mediteranean",
    hex: "#b8825a",
    description: "Ten măsliniu cu subton cald-verzui. Specific mediteranean.",
    best: ["#c46a45", "#6b2737", "#17243b", "#64724b"],
    avoid: ["#f5d5b8", "#d4a69a"],
    outfitIds: ["presenter", "minimal-pro", "smart-mover"],
    tip: "Terracotta și burgundy îți prind cel mai bine. Olive și navy sunt aliații tăi naturali.",
    season: "Toamnă / Iarnă",
  },
};

/* ── EXTRACȚIE CULOARE DIN IMAGINE ───────────────────────────── */

/**
 * Extrage culoarea medie a pielii dintr-un element <img> sau <canvas>
 * Analizează zona centrală (70% din imagine) pentru a evita fundalul
 *
 * @param {HTMLImageElement|HTMLCanvasElement} source
 * @returns {{ r: number, g: number, b: number, hex: string } | null}
 */
export function extractSkinColor(source) {
  try {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const w = source.naturalWidth || source.width;
    const h = source.naturalHeight || source.height;

    if (!w || !h) return null;

    canvas.width = w;
    canvas.height = h;
    ctx.drawImage(source, 0, 0);

    // Zona centrală — 60% din imagine (evităm fundalul)
    const margin = 0.2;
    const x = Math.floor(w * margin);
    const y = Math.floor(h * margin);
    const cropW = Math.floor(w * (1 - margin * 2));
    const cropH = Math.floor(h * (1 - margin * 2));

    const data = ctx.getImageData(x, y, cropW, cropH).data;

    let rSum = 0, gSum = 0, bSum = 0, count = 0;

    // Sample fiecare al 4-lea pixel pentru viteză
    for (let i = 0; i < data.length; i += 16) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const a = data[i + 3];

      if (a < 128) continue; // skip transparent

      // Filtrăm pixelii care sunt probabil piele (nu fundal alb/negru)
      const brightness = (r + g + b) / 3;
      if (brightness < 40 || brightness > 230) continue;

      rSum += r; gSum += g; bSum += b; count++;
    }

    if (count === 0) return null;

    const r = Math.round(rSum / count);
    const g = Math.round(gSum / count);
    const b = Math.round(bSum / count);
    const hex = `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;

    return { r, g, b, hex };

  } catch {
    return null;
  }
}

/**
 * Pipeline complet: imagine → profil ton
 * @param {HTMLImageElement|HTMLCanvasElement} source
 * @returns {ToneProfile | null}
 */
export function analyzeImage(source) {
  const color = extractSkinColor(source);
  if (!color) return null;
  const hsl = rgbToHsl(color.r, color.g, color.b);
  return { ...classifyTone(hsl), detectedHex: color.hex };
}

/* ── MANUAL SELECTOR ─────────────────────────────────────────── */
// Pentru useri care nu vor să uploadeze poză

export const MANUAL_TONES = [
  { id: "fair",    hex: "#f5d5b8", label: "Deschis" },
  { id: "warm",    hex: "#d4956a", label: "Cald / Bronzat" },
  { id: "neutral", hex: "#c4a882", label: "Neutru" },
  { id: "olive",   hex: "#b8825a", label: "Olive" },
  { id: "cool",    hex: "#c4a0a0", label: "Roz / Rece" },
  { id: "deep",    hex: "#7a4a2a", label: "Profund / Închis" },
];
