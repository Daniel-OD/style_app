import React from "react";
import {
  Armchair,
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Brain,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  Crown,
  Gem,
  Layers,
  Palette,
  Shirt,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

export const ICON_MAP = {
  armchair: Armchair,
  arrowRight: ArrowRight,
  badgeCheck: BadgeCheck,
  bookOpen: BookOpen,
  brain: Brain,
  calendar: CalendarDays,
  chevronDown: ChevronDown,
  chevronRight: ChevronRight,
  clipboard: ClipboardList,
  crown: Crown,
  gem: Gem,
  layers: Layers,
  palette: Palette,
  shirt: Shirt,
  sparkles: Sparkles,
  target: Target,
  trend: TrendingUp,
};

/**
 * @param {{name: keyof typeof ICON_MAP, size?: number, color?: string, strokeWidth?: number, style?: object}} props
 */
export const Icon = ({
  name,
  size = 18,
  color = "currentColor",
  strokeWidth = 1.9,
  style,
}) => {
  const Comp = ICON_MAP[name];
  if (!Comp) return null;
  return React.createElement(Comp, {
    size,
    color,
    strokeWidth,
    "aria-hidden": "true",
    style,
  });
};
