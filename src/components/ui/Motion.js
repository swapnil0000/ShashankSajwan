import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const spring = { type: 'spring', stiffness: 380, damping: 32 };

// Fades and lifts children into view once, as they scroll in.
export const Reveal = ({ children, delay = 0, y = 24, ...rest }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
export const staggerItem = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

// Android-style shared-axis page transition.
export const PageTransition = ({ children }) => {
  const reduce = useReducedMotion();
  return (
    <motion.main
      initial={reduce ? false : { opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={reduce ? undefined : { opacity: 0, x: -24 }}
      transition={{ duration: 0.28, ease: [0.2, 0, 0, 1] }}
    >
      {children}
    </motion.main>
  );
};

export const Tap = motion.div;
