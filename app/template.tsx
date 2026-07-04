"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

// ルート遷移ごとに再マウントされるテンプレートでページ遷移アニメーションを実現
export default function Template({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.21, 0.65, 0.35, 1] }}
    >
      {children}
    </motion.div>
  );
}
