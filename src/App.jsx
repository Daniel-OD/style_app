import { Suspense, lazy, useState } from "react";
import { AppShell } from "./app/AppShell";
import { T } from "./design/tokens";

const SCREEN_MAP = {
  outfituri: lazy(() => import("./screens/OutfituriScreen")),
  planner: lazy(() => import("./screens/PlannerScreen")),
  upgrade: lazy(() => import("./screens/UpgradeScreen")),
  teorie: lazy(() => import("./screens/TeorieScreen")),
  reguli: lazy(() => import("./screens/ReguliScreen")),
};

export default function App() {
  const [tab, setTab] = useState("outfituri");
  const ActiveScreen = SCREEN_MAP[tab];

  return (
    <AppShell tab={tab} setTab={setTab}>
      <Suspense
        fallback={
          <div style={{ padding: T.sp10, color: T.textMuted, fontFamily: T.fontBody, fontSize: T.textBase }}>
            Se încarcă...
          </div>
        }
      >
        <ActiveScreen />
      </Suspense>
    </AppShell>
  );
}
const SCREEN_MAP = {
  outfituri: lazy(() => import("./screens/OutfituriScreen")),
  planner:   lazy(() => import("./screens/PlannerScreen")),
  ton:       lazy(() => import("./screens/TonPieleScreen")), // ← NOU
  upgrade:   lazy(() => import("./screens/UpgradeScreen")),
  teorie:    lazy(() => import("./screens/TeorieScreen")),
  reguli:    lazy(() => import("./screens/ReguliScreen")),
};
