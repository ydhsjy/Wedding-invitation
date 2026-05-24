"use client";

import Image from "next/image";
import { CountdownCard } from "@/components/CountdownCard";
import { Container } from "@/components/Container";
import { MotionReveal } from "@/components/MotionReveal";
import { SectionTitle } from "@/components/SectionTitle";
import { wedding } from "@/data/wedding";
import { useCountdown } from "@/hooks/useCountdown";

export function CountdownSection() {
  const time = useCountdown(wedding.isoDate);

  return (
    <section className="section-band bg-paper">
      <Container>
        <MotionReveal>
          <SectionTitle eyebrow="Menuju Hari Bahagia" title="Save The Date" />
        </MotionReveal>
        <MotionReveal className="relative mx-auto mt-10 max-w-3xl overflow-hidden rounded-lg border border-clay/15 bg-ivory/50 py-8 pl-5 pr-28 shadow-soft sm:px-8 sm:pr-44">
          <div className="grid grid-cols-4 gap-3 sm:gap-5">
            <CountdownCard value={time.days} label="Hari" />
            <CountdownCard value={time.hours} label="Jam" />
            <CountdownCard value={time.minutes} label="Menit" />
            <CountdownCard value={time.seconds} label="Detik" />
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 overflow-hidden sm:w-40">
            <Image src={wedding.images.countdown} alt="" fill sizes="160px" className="object-cover object-right" />
          </div>
        </MotionReveal>
      </Container>
    </section>
  );
}
