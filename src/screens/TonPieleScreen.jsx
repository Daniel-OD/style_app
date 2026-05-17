import { useState, useRef, useCallback } from "react";
import { T, styles } from "../design/tokens";
import { OUTFITS } from "../data/outfits";
import { Icon, InfoPanel, TipList, SwatchGrid } from "../components/ui";
import {
  TONE_PROFILES,
  MANUAL_TONES,
  extractSkinColor,
  rgbToHsl,
  classifyTone,
} from "../data/skinTone";

/* ── HELPERS ─────────────────────────────────────────────────── */

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}

function getRecommendedOutfits(profile) {
  if (!profile) return [];
  return OUTFITS.filter(o => profile.outfitIds.includes(o.id));
}

/* ── STEP INDICATOR ─────────────────────────────────────────── */
function StepDot({ n, active, done }) {
  return (
    <div style={{
      width: 28, height: 28, borderRadius: T.rFull,
      background: done ? T.bgInk : active ? T.bgInk : T.bgSubtle,
      color: (done || active) ? T.textInverse : T.textMuted,
      display: "grid", placeItems: "center",
      fontSize: T.textXs, fontWeight: T.weightBold,
      flexShrink: 0,
    }}>
      {done ? "✓" : n}
    </div>
  );
}

/* ── IMAGE UPLOAD ZONE ──────────────────────────────────────── */
function UploadZone({ onImage }) {
  const [drag, setDrag] = useState(false);
  const inputRef = useRef(null);

  const processFile = useCallback((file) => {
    if (!file || !file.type.startsWith("image/")) return;
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      onImage(img, url);
      URL.revokeObjectURL(url);
    };
    img.src = url;
  }, [onImage]);

  const onDrop = useCallback((e) => {
    e.preventDefault();
    setDrag(false);
    processFile(e.dataTransfer.files[0]);
  }, [processFile]);

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label="Adaugă o poză — apasă sau trage o imagine"
      onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
      onDragLeave={() => setDrag(false)}
      onDrop={onDrop}
      onClick={() => inputRef.current?.click()}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          inputRef.current?.click();
        }
      }}
      style={{
        border: `2px dashed ${drag ? T.bgInk : T.border}`,
        borderRadius: T.rLg,
        padding: `var(--app-upload-padding-block) var(--app-upload-padding-inline)`,
        textAlign: "center",
        cursor: "pointer",
        background: drag ? T.bgSubtle : T.bgCard,
        transition: "all 200ms ease",
        display: "flex", flexDirection: "column", alignItems: "center", gap: T.sp3,
      }}
    >
      <div style={{
        width: 52, height: 52, borderRadius: T.rFull,
        background: T.bgSubtle, display: "grid", placeItems: "center",
      }}>
        <Icon name="skintone" size={24} color={T.textMuted} />
      </div>
      <div>
        <div style={{ fontSize: T.textBase, fontWeight: T.weightSemi, color: T.textPrimary, marginBottom: T.sp1 }}>
          Adaugă o poză cu fața ta
        </div>
        <div style={{ fontSize: T.textSm, color: T.textMuted }}>
          Trage aici sau apasă pentru a selecta
        </div>
      </div>
      <div style={{ fontSize: T.textXs, color: T.textMuted, fontStyle: "italic" }}>
        Procesare locală — poza nu părăsește dispozitivul tău
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        capture="user"
        style={{ display: "none" }}
        onChange={(e) => processFile(e.target.files[0])}
      />
    </div>
  );
}

/* ── MANUAL TONE SELECTOR ───────────────────────────────────── */
function ManualSelector({ selected, onSelect }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "var(--app-manual-columns)", gap: T.sp2 }}>
      {MANUAL_TONES.map(t => (
        <button
          key={t.id}
          type="button"
          aria-pressed={selected === t.id}
          onClick={() => onSelect(t.id)}
          style={{
            border: `2px solid ${selected === t.id ? T.bgInk : T.border}`,
            borderRadius: T.rMd,
            padding: `${T.sp3}px ${T.sp2}px`,
            background: selected === t.id ? T.bgSubtle : T.bgCard,
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: T.sp2,
            minHeight: 44,
            transition: "all 150ms ease",
          }}
        >
          <div style={{
            width: 36, height: 36, borderRadius: T.rFull,
            background: t.hex,
            border: "2px solid rgba(0,0,0,.08)",
            flexShrink: 0,
          }} />
          <span style={{
            fontSize: T.textXs, fontWeight: T.weightSemi,
            color: selected === t.id ? T.textPrimary : T.textMuted,
          }}>
            {t.label}
          </span>
        </button>
      ))}
    </div>
  );
}

/* ── RESULT CARD ────────────────────────────────────────────── */
function ResultCard({ profile, detectedHex }) {
  const recommended = getRecommendedOutfits(profile);

  return (
    <div style={{ display: "grid", gap: T.sp4 }}>

      {/* Tone header */}
      <div style={{
        ...styles.cardRaised,
        padding: "var(--app-card-padding)",
        display: "grid",
        gridTemplateColumns: "var(--tone-result-header-columns)",
        gap: T.sp4,
        alignItems: "center",
      }}>
        <div style={{
          width: 64, height: 64, borderRadius: T.rFull,
          background: profile.hex,
          border: "3px solid rgba(0,0,0,.08)",
        }} />
        <div>
          <div style={{ fontSize: T.textXs, ...styles.microLabel, marginBottom: T.sp1 }}>
            Tonul tău
          </div>
          <div style={{
            fontFamily: T.fontDisplay,
            fontSize: T.textLg,
            fontWeight: T.weightSemi,
            color: T.textPrimary,
            marginBottom: T.sp1,
          }}>
            {profile.label}
          </div>
          <div style={{ fontSize: T.textSm, color: T.textMuted }}>
            {profile.description}
          </div>
          {detectedHex && (
            <div style={{
              marginTop: T.sp2, display: "flex", alignItems: "center", gap: T.sp2,
            }}>
              <div style={{
                width: 16, height: 16, borderRadius: T.rFull,
                background: detectedHex, border: "1px solid rgba(0,0,0,.1)",
              }} />
              <span style={{ fontSize: T.textXs, color: T.textMuted, fontFamily: "monospace" }}>
                {detectedHex}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Tip */}
      <InfoPanel variant="light">
        <div style={{ fontSize: T.textSm, color: T.textSecondary, lineHeight: 1.6 }}>
          💡 {profile.tip}
        </div>
        <div style={{ marginTop: T.sp2, fontSize: T.textXs, color: T.textMuted }}>
          Sezon cromatic: <strong>{profile.season}</strong>
        </div>
      </InfoPanel>

      {/* Culori recomandate */}
      <div style={{ ...styles.cardRaised, padding: T.sp4 }}>
        <div style={{ ...styles.microLabel, marginBottom: T.sp3 }}>Culori care te avantajează</div>
        <div style={{ display: "flex", gap: T.sp2, flexWrap: "wrap" }}>
          {profile.best.map((hex, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{
                width: 40, height: 40, borderRadius: T.rSm,
                background: hex, border: "0.5px solid rgba(0,0,0,.08)",
                marginBottom: 4,
              }} />
              <div style={{ fontSize: 10, color: T.textMuted, fontFamily: "monospace" }}>
                {hex}
              </div>
            </div>
          ))}
        </div>
        {profile.avoid.length > 0 && (
          <>
            <div style={{ ...styles.microLabel, marginTop: T.sp4, marginBottom: T.sp3 }}>
              De evitat
            </div>
            <div style={{ display: "flex", gap: T.sp2 }}>
              {profile.avoid.map((hex, i) => (
                <div key={i} style={{ textAlign: "center", opacity: 0.5 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: T.rSm,
                    background: hex,
                    border: "2px dashed rgba(0,0,0,.2)",
                    marginBottom: 4,
                  }} />
                  <div style={{ fontSize: 10, color: T.textMuted, fontFamily: "monospace" }}>
                    {hex}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Outfit-uri recomandate */}
      {recommended.length > 0 && (
        <div style={{ display: "grid", gap: T.sp3 }}>
          <div style={{ ...styles.microLabel }}>
            Outfit-uri recomandate pentru tonul tău
          </div>
          {recommended.map(o => (
            <div key={o.id} style={{
              ...styles.cardRaised,
              padding: "var(--app-card-padding)",
              display: "grid",
              gridTemplateColumns: "var(--tone-recommendation-columns)",
              gap: T.sp3,
              alignItems: "center",
            }}>
              <div>
                <div style={{
                  fontFamily: T.fontDisplay, fontSize: T.textMd,
                  fontWeight: T.weightSemi, color: T.textPrimary, marginBottom: T.sp1,
                }}>
                  {o.name}
                </div>
                <div style={{ fontSize: T.textSm, color: T.textMuted, marginBottom: T.sp2 }}>
                  {o.notes}
                </div>
                <div style={{ display: "flex", gap: T.sp1 }}>
                  {o.palette.map((hex, i) => (
                    <div key={i} style={{
                      width: 18, height: 18, borderRadius: T.rFull,
                      background: hex, border: "0.5px solid rgba(0,0,0,.08)",
                    }} />
                  ))}
                </div>
              </div>
              <div style={{
                padding: `${T.sp1}px ${T.sp2}px`,
                background: T.bgSubtle, borderRadius: T.rSm,
                fontSize: T.textXs, fontWeight: T.weightBold,
                color: T.textMuted,
              }}>
                {o.occasion}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   MAIN SCREEN
══════════════════════════════════════════════════════════════ */

export default function TonPieleScreen() {
  const [step, setStep] = useState(1); // 1=input, 2=result
  const [mode, setMode] = useState("upload"); // "upload" | "manual"
  const [manualTone, setManualTone] = useState(null);
  const [profile, setProfile] = useState(null);
  const [detectedHex, setDetectedHex] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [error, setError] = useState(null);

  /* Analiză imagine */
  const handleImage = useCallback((imgEl, url) => {
    setError(null);
    setAnalyzing(true);
    setPreviewUrl(url);

    // Timeout mic pentru a lăsa UI-ul să se actualizeze
    setTimeout(() => {
      try {
        const color = extractSkinColor(imgEl);
        if (!color) {
          setError("Nu am putut detecta culoarea pielii. Încearcă o poză mai clară sau selectează manual.");
          setAnalyzing(false);
          return;
        }
        const hsl = rgbToHsl(color.r, color.g, color.b);
        const detected = classifyTone(hsl);
        setProfile({ ...detected, detectedHex: color.hex });
        setDetectedHex(color.hex);
        setStep(2);
      } catch {
        setError("Eroare la procesarea imaginii. Încearcă din nou.");
      }
      setAnalyzing(false);
    }, 300);
  }, []);

  /* Selecție manuală */
  const handleManualConfirm = useCallback(() => {
    if (!manualTone) return;
    setProfile(TONE_PROFILES[manualTone]);
    setDetectedHex(null);
    setStep(2);
  }, [manualTone]);

  /* Reset */
  const reset = useCallback(() => {
    setStep(1);
    setProfile(null);
    setDetectedHex(null);
    setPreviewUrl(null);
    setManualTone(null);
    setError(null);
  }, []);

  return (
    <section style={{ display: "grid", gap: T.sp5 }}>

      {/* Header */}
      <div style={{ display: "grid", gap: T.sp2 }}>
        <p style={{ margin: 0, ...styles.microLabel }}>Analiză Stil</p>
        <h2 style={{ margin: 0, ...styles.sectionTitle, fontSize: "var(--app-section-title-size)", lineHeight: 1.15 }}>Tonul pielii tale</h2>
        <p style={{ margin: 0, fontSize: T.textSm, color: T.textMuted }}>
          Descoperă ce culori te avantajează. Totul se procesează local — nicio poză nu pleacă de pe dispozitivul tău.
        </p>
      </div>

      {/* Steps */}
      <div style={{ display: "flex", alignItems: "center", gap: T.sp2 }}>
        <StepDot n={1} active={step === 1} done={step > 1} />
        <div style={{ flex: 1, height: 1, background: step > 1 ? T.bgInk : T.border }} />
        <StepDot n={2} active={step === 2} done={false} />
      </div>

      {/* ── STEP 1: INPUT ── */}
      {step === 1 && (
        <div style={{ display: "grid", gap: T.sp4 }}>

          {/* Mode toggle */}
          <div style={{ display: "flex", flexDirection: "var(--tone-mode-toggle-direction, row)", gap: T.sp2, background: T.bgSubtle, borderRadius: T.rMd, padding: T.sp1 }}>
            {[
              { id: "upload", label: "Uploadează o poză" },
              { id: "manual", label: "Selectează manual" },
            ].map(m => (
              <button
                key={m.id}
                type="button"
                onClick={() => { setMode(m.id); setError(null); }}
                style={{
                  flex: 1, border: "none",
                  borderRadius: T.rSm,
                  padding: `${T.sp2}px ${T.sp3}px`,
                  background: mode === m.id ? T.bgCard : "transparent",
                  color: mode === m.id ? T.textPrimary : T.textMuted,
                  cursor: "pointer", fontFamily: T.fontBody,
                  fontSize: T.textSm, fontWeight: T.weightMedium,
                  boxShadow: mode === m.id ? T.shadowRaised : "none",
                  transition: "all 150ms ease",
                  minHeight: 44,
                }}
              >
                {m.label}
              </button>
            ))}
          </div>

          {/* Upload mode */}
          {mode === "upload" && (
            <>
              <UploadZone onImage={handleImage} />
              {analyzing && (
                <div style={{
                  textAlign: "center", padding: T.sp4,
                  color: T.textMuted, fontSize: T.textSm,
                }}>
                  Analizez tonul pielii...
                </div>
              )}
              {error && (
                <InfoPanel variant="danger">
                  <div role="alert" style={{ fontSize: T.textSm }}>{error}</div>
                </InfoPanel>
              )}
              <div style={{
                display: "grid", gridTemplateColumns: "auto 1fr",
                gap: T.sp2, alignItems: "flex-start",
                padding: T.sp3, background: T.bgSubtle, borderRadius: T.rMd,
              }}>
                <Icon name="info" size={14} color={T.textMuted} style={{ marginTop: 1 }} />
                <div style={{ fontSize: T.textXs, color: T.textMuted, lineHeight: 1.6 }}>
                  Pentru cel mai bun rezultat, folosește o poză cu fața clar vizibilă,
                  iluminare naturală și fără filtre. Funcționează complet offline.
                </div>
              </div>
            </>
          )}

          {/* Manual mode */}
          {mode === "manual" && (
            <>
              <div style={{ fontSize: T.textSm, color: T.textMuted }}>
                Selectează tonul cel mai apropriat de culoarea ta naturală:
              </div>
              <ManualSelector selected={manualTone} onSelect={setManualTone} />
              <button
                type="button"
                onClick={handleManualConfirm}
                disabled={!manualTone}
                style={{
                  border: "none", borderRadius: T.rMd,
                  padding: `${T.sp3}px ${T.sp5}px`,
                  background: manualTone ? T.bgInk : T.bgSubtle,
                  color: manualTone ? T.textInverse : T.textMuted,
                  cursor: manualTone ? "pointer" : "not-allowed",
                  fontFamily: T.fontBody, fontSize: T.textBase,
                  fontWeight: T.weightSemi, minHeight: 44,
                  transition: "all 150ms ease",
                }}
              >
                Vezi recomandările
              </button>
            </>
          )}
        </div>
      )}

      {/* ── STEP 2: RESULT ── */}
      {step === 2 && profile && (
        <>
          {previewUrl && (
            <div style={{
              borderRadius: T.rLg, overflow: "hidden",
              maxHeight: 200, display: "flex", justifyContent: "center",
              background: T.bgSubtle,
            }}>
              <img
                src={previewUrl}
                alt="Poza analizată"
                style={{ width: "100%", maxWidth: 360, height: "min(200px, 56vw)", objectFit: "cover", display: "block" }}
              />
            </div>
          )}

          <ResultCard profile={profile} detectedHex={detectedHex} />

          <button
            type="button"
            onClick={reset}
            style={{
              border: `0.5px solid ${T.border}`,
              borderRadius: T.rMd,
              padding: `${T.sp3}px ${T.sp5}px`,
              background: T.bgCard, color: T.textSecondary,
              cursor: "pointer", fontFamily: T.fontBody,
              fontSize: T.textSm, fontWeight: T.weightMedium,
              minHeight: 44,
            }}
          >
            Analizează din nou
          </button>
        </>
      )}
    </section>
  );
}
