import { T } from "../design/tokens";
import { Icon } from "../components/ui";

/**
 * @param {{title: string, navItems: Array<{key: string, label: string, icon: string}>, active: string, onNavigate: (key: string) => void, children: import('react').ReactNode}} props
 */
const AppShell = ({ title, navItems, active, onNavigate, children }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
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
          background: `${T.bg}F2`,
          backdropFilter: "blur(8px)",
          padding: `${T.sp4}px ${T.sp5}px`,
          borderBottom: `0.5px solid ${T.border}`,
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: T.sp3,
          }}
        >
          <h1
            style={{
              margin: 0,
              fontFamily: T.fontDisplay,
              fontSize: T.textXl,
              fontWeight: T.weightSemi,
              lineHeight: 1.1,
            }}
          >
            {title}
          </h1>
          <nav style={{ display: "flex", gap: T.sp2, flexWrap: "wrap" }}>
            {navItems.map((item) => {
              const isActive = item.key === active;
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => onNavigate(item.key)}
                  style={{
                    border: "none",
                    borderRadius: T.rFull,
                    padding: `${T.sp2}px ${T.sp3}px`,
                    background: isActive ? T.bgInk : T.bgSubtle,
                    color: isActive ? T.textInverse : T.textSecondary,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: T.sp2,
                    cursor: "pointer",
                    fontSize: T.textSm,
                    fontWeight: T.weightMedium,
                    fontFamily: T.fontBody,
                  }}
                >
                  <Icon name={item.icon} size={15} />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      </header>
      <main style={{ maxWidth: 1100, margin: "0 auto", padding: `${T.sp6}px ${T.sp5}px ${T.sp8}px` }}>
        {children}
      </main>
    </div>
  );
};

export default AppShell;
