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
      style={{ willChange: "transform, opacity" }}
      initial={{ opacity: 0, scale: 0.92, y: 18 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0
      }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.48, ease: [0.25, 1, 0.5, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
