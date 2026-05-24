"use client";

import Image from "next/image";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { wedding } from "@/data/wedding";

export function HeroSection() {
  const slides = wedding.images.openingSlides;
  const [slideIndex, setSlideIndex] = useState(0);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], [0, 160]);
  const scale = useTransform(scrollY, [0, 900], [1.01, 1.08]);
  const currentSlide = slides[slideIndex];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSlideIndex((current) => (current + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const nextSlide = slides[(slideIndex + 1) % slides.length];
    const image = new window.Image();
    image.src = nextSlide;
  }, [slideIndex, slides]);

  return (
    <section id="home" className="relative min-h-svh overflow-hidden bg-[#d8d6d2] text-ivory">
      <motion.div className="absolute inset-0 flex items-end justify-center" style={{ y, scale }}>
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1.06 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Image
              src={currentSlide}
              alt="Yudha dan Alda"
              fill
              priority={slideIndex === 0}
              sizes="(max-width: 1024px) 100vw, 640px"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/8 to-ink/60" />
      <div className="pointer-events-none absolute inset-x-0 bottom-[-1px] z-10 h-28 bg-paper [clip-path:ellipse(75%_58%_at_50%_100%)]" />
      <div className="relative z-20 mx-auto flex min-h-svh max-w-6xl flex-col items-center justify-end px-5 pb-20 pt-28 text-center sm:px-8 lg:px-10 lg:pb-24">
        <motion.p
          className="font-sans text-xs font-semibold uppercase leading-none tracking-[0.21em] text-ivory/92 sm:text-[15px] lg:text-[8px]"
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          The Wedding of
        </motion.p>
        <motion.h2
          className="mt-4 max-w-3xl font-script text-[57px] font-normal leading-none tracking-normal text-ivory sm:text-[71px] lg:text-[36px]"
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.38 }}
        >
          {wedding.coupleNames}
        </motion.h2>
        <motion.p
          className="mt-5 font-sans text-sm font-semibold leading-none tracking-[0.21em] text-ivory sm:text-[21px] lg:text-[11px]"
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
