"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type PhotoPopProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function PhotoPop({ children, className, delay = 0 }: PhotoPopProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.92, y: 18 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0
      }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
