let reduceQuery;

const getQuery = () => {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") return null;
  if (!reduceQuery) {
    reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  }
  return reduceQuery;
};

const prefersReducedMotion = () => {
  const query = getQuery();
  return Boolean(query && query.matches);
};

const safeTransition = (value) => (prefersReducedMotion() ? "none" : value);

export const motion = {
  safeTransition,
};

export { prefersReducedMotion };
