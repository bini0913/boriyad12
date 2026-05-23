import type { Transition, Variants } from "framer-motion";

export const heroEase: Transition = {
  duration: 8,
  repeat: Infinity,
  ease: "easeInOut",
};

export const backgroundMotion = {
  scale: [1, 1.03, 1],
  y: [0, -5, 0],
};

export const studentFloat = {
  y: [0, -8, 0],
};

export const studentTransition: Transition = {
  duration: 4,
  repeat: Infinity,
  ease: "easeInOut",
};

export const headlineVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 + i * 0.12,
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export function iconFloat(duration: number) {
  return {
    y: [0, -6, 0],
    transition: {
      duration,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };
}
