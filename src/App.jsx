import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { NAVIGATION } from "./config/navigation";
import AppShell from "./app/AppShell";
import OutfituriScreen from "./screens/OutfituriScreen";
import PlannerScreen from "./screens/PlannerScreen";
import UpgradeScreen from "./screens/UpgradeScreen";
import TeorieScreen from "./screens/TeorieScreen";
import ReguliScreen from "./screens/ReguliScreen";
import { motion, reducedMotion, safeTransition, variants } from "./design/motion";

const SCREEN_MAP = {
  outfituri: OutfituriScreen,
  planner: PlannerScreen,
  upgrade: UpgradeScreen,
  teorie: TeorieScreen,
  reguli: ReguliScreen,
};

const App = () => {
  const [active, setActive] = useState(NAVIGATION[0].key);
  const ActiveScreen = useMemo(() => SCREEN_MAP[active] || OutfituriScreen, [active]);
  const shouldReduce = reducedMotion();

  return (
    <AppShell title="Wardrobe Intelligence" navItems={NAVIGATION} active={active} onNavigate={setActive}>
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={variants.fadeIn.initial}
          animate={variants.fadeIn.animate}
          exit={variants.fadeIn.exit}
          transition={safeTransition(shouldReduce, variants.fadeIn.animate.transition)}
        >
          <ActiveScreen />
        </motion.div>
      </AnimatePresence>
    </AppShell>
  );
};

export default App;
