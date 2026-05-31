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
        <Image src={wedding.images.opening} alt="" fill priority sizes="100vw" className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-ink/48 to-ink/82" />
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink/55 to-transparent" />
      <motion.div
        className="relative z-10 flex min-h-svh w-full max-w-md flex-col px-6 pb-8 pt-24 sm:pb-20"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div>
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.21em] text-gold sm:text-base lg:text-[8px]">The Wedding of</p>
          <h1 className="couple-name-titlecase mt-4 font-script text-[57px] font-normal leading-none lg:text-[29px]">{wedding.coupleNames}</h1>
          <p className="mt-3 font-sans text-sm font-semibold tracking-[0.12em] text-ivory/75 lg:text-[7px]">{wedding.dateLabel}</p>
        </div>

        <div className="mt-auto">
          <div className="mx-auto w-[82%] translate-y-28 rounded-md border border-ivory/24 bg-ivory/10 px-4 py-4 backdrop-blur-md sm:translate-y-20">
            <p className="text-xs text-ivory/80 lg:text-[6px]">Dear,</p>
            <p className="mt-1.5 font-serif text-[18px] font-semibold leading-none sm:text-[20px] lg:text-[9px]">{guestName}</p>
            <p className="mt-1.5 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-gold lg:text-[5px]">You are invited</p>
          </div>

          <button
            type="button"
            onClick={onOpen}
            className="mx-auto mt-36 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ivory px-7 font-button text-[15px] font-bold tracking-normal text-ink shadow-premium transition hover:bg-gold hover:text-ivory sm:mt-28 lg:text-[8px]"
          >
            <MailOpen className="h-4 w-4" aria-hidden="true" />
            Open Invitation
          </button>
        </div>
      </motion.div>
    </motion.section>
  );
}
