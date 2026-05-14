import { motion as framerMotion, useReducedMotion } from "framer-motion";

export const motion = framerMotion;

export const duration = {
  fast: 0.18,
  base: 0.28,
  slow: 0.42,
};

export const easing = {
  smooth: [0.2, 0.8, 0.2, 1],
  out: [0.16, 1, 0.3, 1],
};

export const transition = {
  base: { duration: duration.base, ease: easing.smooth },
  quick: { duration: duration.fast, ease: easing.out },
};

export const variants = {
  fadeIn: {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0, transition: transition.base },
    exit: { opacity: 0, y: 4, transition: transition.quick },
  },
  liftIn: {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1, transition: transition.base },
    exit: { opacity: 0, scale: 0.99, transition: transition.quick },
  },
};

export const reducedMotion = useReducedMotion;

/**
 * @param {boolean} prefersReduced
 * @param {object} config
 * @returns {object}
 */
export const safeTransition = (prefersReduced, config = transition.base) => {
  if (prefersReduced) {
    return { duration: 0 };
  }
  return config;
};
