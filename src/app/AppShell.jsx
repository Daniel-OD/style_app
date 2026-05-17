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
    <div style={{ minHeight: "100vh", background: T.bg, color: T.textPrimary, fontFamily: T.fontBody }}>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 5,
          background: T.bg,
          borderBottom: `0.5px solid ${T.border}`,
          padding: `${T.sp4}px ${T.sp5}px`,
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gap: T.sp3 }}>
          <h1 style={{ margin: 0, fontFamily: T.fontDisplay, fontSize: T.textXl, fontWeight: T.weightSemi }}>
            Asistent de Stil
          </h1>
          <nav style={{ display: "flex", gap: T.sp2, flexWrap: "wrap" }} aria-label="Navigație principală">
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
      <main style={{ maxWidth: 1100, margin: "0 auto", padding: `${T.sp6}px ${T.sp5}px ${T.sp8}px` }}>{children}</main>
    </div>
  );
}

export { AppShell };
