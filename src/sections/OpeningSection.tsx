"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MailOpen } from "lucide-react";
import { wedding } from "@/data/wedding";

type OpeningSectionProps = {
  guestName: string;
  onOpen: () => void;
  isOpen: boolean;
};

export function OpeningSection({ guestName, onOpen, isOpen }: OpeningSectionProps) {
  return (
    <motion.section
      className="fixed inset-0 z-50 grid min-h-svh place-items-center overflow-hidden bg-ink text-center text-ivory"
      initial={false}
      animate={isOpen ? { opacity: 0, y: -22, pointerEvents: "none" } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden={isOpen}
    >
      <div className="absolute inset-0">
        {wedding.images.openingSlides.map((slide, index) => (
          <Image
            key={slide}
            src={slide}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className="opening-slide object-cover"
            style={{ animationDelay: `${index * 4}s` }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-ink/48 to-ink/82" />
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink/55 to-transparent" />
      <motion.div
        className="relative z-10 grid min-h-svh w-full max-w-md content-between px-6 py-14"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div>
          <p className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-gold">The Wedding of</p>
          <h1 className="mt-4 font-script text-7xl leading-none">{wedding.coupleNames}</h1>
          <p className="mt-3 font-sans text-xs uppercase tracking-[0.22em] text-ivory/75">{wedding.dateLabel}</p>
        </div>

        <div className="mx-auto w-full rounded-lg border border-ivory/24 bg-ivory/10 p-6 backdrop-blur-md">
          <p className="text-xl text-ivory/80">Dear,</p>
          <p className="mt-2 font-serif text-3xl font-semibold leading-tight">{guestName}</p>
          <p className="mt-2 font-sans text-xs uppercase tracking-[0.24em] text-gold">You are invited</p>
        </div>

        <button
          type="button"
          onClick={onOpen}
          className="mx-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ivory px-7 font-sans text-sm font-semibold uppercase tracking-[0.16em] text-ink shadow-premium transition hover:bg-gold hover:text-ivory"
        >
          <MailOpen className="h-4 w-4" aria-hidden="true" />
          Open Invitation
        </button>
      </motion.div>
    </motion.section>
  );
}
