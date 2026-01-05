// ============================================
// Shared Animation Variants for Framer Motion
// ============================================

import type { Variants, Transition } from "framer-motion";

// ============================================
// Container Animations (Stagger Children)
// ============================================

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const staggerContainerVariants = (staggerDelay = 0.1): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
    },
  },
});

// ============================================
// Item/Card Animations
// ============================================

export const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const cardVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

// ============================================
// Fade Animations
// ============================================

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInDownVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

// ============================================
// Slide Animations
// ============================================

export const slideInLeftVariants: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

export const slideInRightVariants: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

// ============================================
// Scale Animations
// ============================================

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: { opacity: 1, scale: 1 },
};

export const popInVariants: Variants = {
  hidden: { opacity: 0, scale: 0, y: 100 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0, y: 100 },
};

// ============================================
// Hover Animations
// ============================================

export const hoverScaleTransition: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 20,
};

export const hoverLift = {
  whileHover: { y: -5 },
  whileTap: { scale: 0.95 },
};

export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};

export const hoverScaleLarge = {
  whileHover: { y: -10, scale: 1.02 },
};

// ============================================
// Glow/Pulse Animations
// ============================================

export const glowPulseAnimation = {
  boxShadow: [
    "0 0 20px rgba(34, 197, 94, 0.3)",
    "0 0 40px rgba(34, 197, 94, 0.5)",
    "0 0 20px rgba(34, 197, 94, 0.3)",
  ],
};

export const glowPulseTransition: Transition = {
  duration: 2,
  repeat: Infinity,
  ease: "easeInOut",
};

// ============================================
// Loading Animations
// ============================================

export const spinnerAnimation = {
  rotate: 360,
};

export const spinnerTransition: Transition = {
  repeat: Infinity,
  duration: 1,
  ease: "linear",
};

// ============================================
// Carousel/Slider Animations
// ============================================

export const carouselVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
  }),
};

// ============================================
// Viewport Options for whileInView
// ============================================

export const defaultViewportOptions = {
  once: true,
  amount: 0.2,
};

export const viewportOnce = {
  once: true,
};

// ============================================
// Default Transitions
// ============================================

export const defaultTransition: Transition = {
  duration: 0.3,
};

export const smoothTransition: Transition = {
  duration: 0.5,
  ease: "easeOut",
};

export const springTransition: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 15,
};