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
      initial={{ opacity: 0, scale: 0.72, y: 42, filter: "blur(16px)" }}
      whileInView={{
        opacity: [0, 1, 1],
        scale: [0.72, 1.035, 1],
        y: [42, -4, 0],
        filter: ["blur(16px)", "blur(0px)", "blur(0px)"]
      }}
      viewport={{ once: true, margin: "-110px" }}
      transition={{ duration: 1.12, times: [0, 0.72, 1], ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
