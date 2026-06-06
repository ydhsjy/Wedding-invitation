"use client";

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
        <MotionReveal className="relative mx-auto mt-10 max-w-3xl overflow-hidden rounded-lg border border-clay/15 bg-white px-5 py-8 shadow-soft sm:px-8">
          <div
            className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-45"
            style={{ backgroundImage: `url("${wedding.images.countdown}")` }}
            aria-hidden="true"
          />
          <div className="pointer-events-none absolute inset-0 z-0 bg-white/62" aria-hidden="true" />
          <div className="relative z-10 grid grid-cols-4 gap-3 sm:gap-5">
            <CountdownCard value={time.days} label="Hari" />
            <CountdownCard value={time.hours} label="Jam" />
            <CountdownCard value={time.minutes} label="Menit" />
            <CountdownCard value={time.seconds} label="Detik" />
          </div>
        </MotionReveal>
      </Container>
    </section>
  );
}
