"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { wedding } from "@/data/wedding";

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], [0, 160]);
  const scale = useTransform(scrollY, [0, 900], [1.01, 1.08]);

  return (
    <section id="home" className="relative min-h-svh overflow-hidden bg-[#d8d6d2] text-ivory">
      <motion.div className="absolute inset-0 flex items-end justify-center" style={{ y, scale }}>
        {wedding.images.openingSlides.map((slide, index) => (
          <Image
            key={slide}
            src={slide}
            alt="Yudha dan Alda"
            fill
            priority={index === 0}
            sizes="(max-width: 1024px) 100vw, 640px"
            className="photo-slide object-cover object-center"
            style={{ animationDelay: `${index * 4}s` }}
          />
        ))}
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/8 to-ink/60" />
      <div className="pointer-events-none absolute inset-x-0 bottom-[-1px] z-10 h-28 bg-paper [clip-path:ellipse(75%_58%_at_50%_100%)]" />
      <div className="relative z-20 mx-auto flex min-h-svh max-w-6xl flex-col items-center justify-end px-5 pb-20 pt-28 text-center sm:px-8 lg:px-10 lg:pb-24">
        <motion.p
          className="font-serif text-2xl font-medium leading-none tracking-[0.18em] text-ivory/92 sm:text-3xl"
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          The Wedding of
        </motion.p>
        <motion.h2
          className="mt-4 max-w-3xl font-serif text-6xl font-medium leading-[0.9] tracking-normal text-ivory sm:text-7xl"
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.38 }}
        >
          {wedding.coupleNames}
        </motion.h2>
        <motion.p
          className="mt-5 font-serif text-2xl font-semibold leading-none tracking-[0.28em] text-ivory sm:text-3xl"
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.56 }}
        >
          26.06.2026
        </motion.p>
      </div>
    </section>
  );
}
