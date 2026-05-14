const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const safeTransition = (value) => (prefersReducedMotion() ? "none" : value);

export const motion = {
  safeTransition,
};

export { prefersReducedMotion };
