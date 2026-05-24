"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = window.setTimeout(() => setVisible(false), 900);
    return () => window.clearTimeout(id);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <motion.div
      className="fixed inset-0 z-[70] grid place-items-center bg-paper"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-center">
        <p className="font-script text-6xl text-ink lg:text-3xl">Y & A</p>
        <div className="mx-auto mt-5 h-px w-28 overflow-hidden bg-gold/25">
          <motion.span className="block h-full bg-gold" animate={{ x: ["-100%", "100%"] }} transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }} />
        </div>
      </div>
    </motion.div>
  );
}
