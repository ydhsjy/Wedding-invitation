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
      initial={{ opacity: 0, scale: 0.82, y: 28, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
