"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { wedding } from "@/data/wedding";
import { AnimatedText } from "@/components/AnimatedText";

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], [0, 160]);
  const scale = useTransform(scrollY, [0, 900], [1.01, 1.08]);

  return (
    <section id="home" className="relative min-h-svh overflow-hidden bg-[#d8d6d2] text-ivory">
      <motion.div className="absolute inset-0 flex items-end justify-center" style={{ y, scale }}>
        <Image src={wedding.images.hero} alt="Yudha dan Alda" fill priority sizes="(max-width: 1024px) 100vw, 640px" className="object-contain object-bottom" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/8 to-ink/60" />
      <div className="pointer-events-none absolute inset-x-0 bottom-[-1px] z-10 h-28 bg-paper [clip-path:ellipse(75%_58%_at_50%_100%)]" />
      <div className="relative z-20 mx-auto flex min-h-svh max-w-6xl flex-col items-center justify-end px-5 pb-28 pt-28 text-center sm:px-8 lg:px-10 lg:pb-32">
        <motion.p
          className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-gold"
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          The Wedding of
        </motion.p>
        <h2 className="mt-4 max-w-3xl font-script text-8xl leading-[0.82] sm:text-9xl">
          <AnimatedText text={wedding.coupleNames} />
        </h2>
        <motion.div
          className="mt-8 flex flex-col gap-2 font-sans text-sm font-semibold uppercase tracking-[0.16em] text-ivory sm:flex-row sm:items-center sm:gap-5"
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.7 }}
        >
          <span>{wedding.dateLabel}</span>
          <span className="hidden h-px w-12 bg-gold sm:block" />
          <span>{wedding.location}</span>
        </motion.div>
      </div>
    </section>
  );
}
