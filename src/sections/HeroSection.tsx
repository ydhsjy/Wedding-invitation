"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { wedding } from "@/data/wedding";
import { AnimatedText } from "@/components/AnimatedText";

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], [0, 160]);
  const scale = useTransform(scrollY, [0, 900], [1.04, 1.14]);

  return (
    <section id="home" className="relative min-h-svh overflow-hidden bg-ink text-ivory">
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <Image src={wedding.images.hero} alt="Yudha dan Alda" fill priority sizes="100vw" className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-ink/28 to-ink/82" />
      <div className="relative z-10 mx-auto flex min-h-svh max-w-6xl flex-col justify-end px-5 pb-24 pt-28 sm:px-8 lg:px-10 lg:pb-28">
        <motion.p
          className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-gold"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
        >
          The Wedding of
        </motion.p>
        <h2 className="mt-4 max-w-3xl font-script text-8xl leading-[0.82] sm:text-9xl lg:text-[10rem]">
          <AnimatedText text={wedding.coupleNames} />
        </h2>
        <motion.div
          className="mt-8 flex flex-col gap-2 font-sans text-sm uppercase tracking-[0.22em] text-ivory/80 sm:flex-row sm:items-center sm:gap-5"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
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
