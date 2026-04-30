/**
 * Shared motion variants for the Apple-style fade-up entrance used across
 * the marketing site. Elements rise into place with a decelerating slide
 * while opacity and blur ramp linearly so they don't read as fully visible
 * before they land.
 *
 * Usage:
 *   <motion.div variants={fadeUpContainer} initial="hidden" animate="visible">
 *     <motion.h2 variants={fadeUpItem}>...</motion.h2>
 *     <motion.div variants={fadeUpItemSlow}>...</motion.div>  // trails behind
 *   </motion.div>
 *
 * For below-the-fold sections, swap `animate="visible"` for
 * `whileInView="visible" viewport={{ once: true, amount: 0.3 }}`.
 */

import type { Variants } from "motion/react";

// easeOutQuart — strong deceleration, settles smoothly into its end position.
export const FADE_UP_EASE = [0.22, 1, 0.36, 1] as const;
export const FADE_UP_DURATION = 0.73;
export const FADE_UP_SLOW_DURATION = 0.93;
export const FADE_UP_SLOW_DELAY = 0.37;

export const fadeUpContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.15,
    },
  },
};

export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      // Slide decelerates (easeOutQuart); opacity/blur ramp linearly so the
      // element doesn't read as fully visible before it lands in place.
      default: { duration: FADE_UP_DURATION, ease: FADE_UP_EASE },
      opacity: { duration: FADE_UP_DURATION, ease: "linear" },
      filter: { duration: FADE_UP_DURATION, ease: "linear" },
    },
  },
};

// Trails the main entrance — used for CTA buttons so they settle in last.
export const fadeUpItemSlow: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      default: {
        duration: FADE_UP_SLOW_DURATION,
        delay: FADE_UP_SLOW_DELAY,
        ease: FADE_UP_EASE,
      },
      opacity: {
        duration: FADE_UP_SLOW_DURATION,
        delay: FADE_UP_SLOW_DELAY,
        ease: "linear",
      },
      filter: {
        duration: FADE_UP_SLOW_DURATION,
        delay: FADE_UP_SLOW_DELAY,
        ease: "linear",
      },
    },
  },
};
