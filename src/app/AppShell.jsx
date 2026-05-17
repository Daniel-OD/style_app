import { T } from "../design/tokens";
import { TABS } from "../config/navigation";
import { Icon } from "../components/ui";
import { motion } from "../design/motion";

const navButton = (active) => ({
  minHeight: 44,
  border: `0.5px solid ${active ? T.bgInk : T.border}`,
  borderRadius: T.rFull,
  padding: `${T.sp2}px ${T.sp3}px`,
  background: active ? T.bgInk : T.bgCard,
  color: active ? T.textInverse : T.textSecondary,
  display: "inline-flex",
  alignItems: "center",
  gap: T.sp2,
  cursor: "pointer",
  fontSize: T.textSm,
  fontWeight: T.weightMedium,
  fontFamily: T.fontBody,
  transition: motion.safeTransition("background-color 180ms ease, color 180ms ease, border-color 180ms ease"),
});

function AppShell({ tab, setTab, children }) {
  return (
    <div
      style={{
        minHeight: "100dvh",
        background: T.bg,
        color: T.textPrimary,
        fontFamily: T.fontBody,
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 5,
          background: T.bg,
          borderBottom: `0.5px solid ${T.border}`,
          padding: `calc(var(--app-header-padding-block) + var(--app-safe-top)) calc(var(--app-shell-padding-inline) + var(--app-safe-right)) var(--app-header-padding-block) calc(var(--app-shell-padding-inline) + var(--app-safe-left))`,
        }}
      >
        <div style={{ maxWidth: "var(--app-shell-max-width)", margin: "0 auto", display: "grid", gap: T.sp3 }}>
          <h1 style={{ margin: 0, fontFamily: T.fontDisplay, fontSize: "var(--app-title-size)", fontWeight: T.weightSemi, lineHeight: 1.15 }}>
            Asistent de Stil
          </h1>
          <nav className="app-shell__nav" style={{ display: "flex", gap: T.sp2, flexWrap: "wrap" }} aria-label="Navigație principală">
            {TABS.map((item) => {
              const isActive = item.id === tab;
              return (
                <button key={item.id} type="button" aria-current={isActive ? "page" : undefined} onClick={() => setTab(item.id)} style={navButton(isActive)}>
                  <Icon name={item.iconName} size={16} />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      </header>
      <main
        style={{
          maxWidth: "var(--app-shell-max-width)",
          margin: "0 auto",
          padding: `var(--app-shell-padding-top) calc(var(--app-shell-padding-inline) + var(--app-safe-right)) calc(var(--app-shell-padding-bottom) + var(--app-safe-bottom)) calc(var(--app-shell-padding-inline) + var(--app-safe-left))`,
        }}
      >
        {children}
      </main>
    </div>
  );
}

export { AppShell };
