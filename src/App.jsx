import React, { Suspense, lazy, useState } from "react";
import { AppShell } from "./app/AppShell";
import { T } from "./design/tokens";
import { TABS } from "./config/navigation";

const SCREENS = {
  outfituri: lazy(() => import("./screens/OutfituriScreen")),
  planner: lazy(() => import("./screens/PlannerScreen")),
  upgrade: lazy(() => import("./screens/UpgradeScreen")),
  teorie: lazy(() => import("./screens/TeorieScreen")),
  reguli: lazy(() => import("./screens/ReguliScreen")),
};

export default function App() {
  const [tab, setTab] = useState("outfituri");
  const Screen = SCREENS[tab];
  return (
    <AppShell tab={tab} setTab={setTab}>
      <Suspense fallback={<div style={{ padding: T.sp8, color: T.textMuted }}>Se încarcă...</div>}>
        <Screen />
      </Suspense>
    </AppShell>
  );
}

