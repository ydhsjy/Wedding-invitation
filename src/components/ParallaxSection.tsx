"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

type ParallaxSectionProps = {
  as?: "section" | "footer";
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  distance?: number;
  id?: string;
};

export function ParallaxSection({ as = "section", children, className, contentClassName = "relative z-10", distance = 34, id }: ParallaxSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const MotionTag = as === "footer" ? motion.footer : motion.section;

  return (
    <MotionTag ref={ref} id={id} className={className}>
      <motion.div className={contentClassName} style={shouldReduceMotion ? undefined : { y }}>
        {children}
      </motion.div>
    </MotionTag>
  );
}
