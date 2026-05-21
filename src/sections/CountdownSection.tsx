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
        <MotionReveal className="mx-auto mt-10 grid max-w-3xl grid-cols-4 gap-3 sm:gap-5">
          <CountdownCard value={time.days} label="Hari" />
          <CountdownCard value={time.hours} label="Jam" />
          <CountdownCard value={time.minutes} label="Menit" />
          <CountdownCard value={time.seconds} label="Detik" />
        </MotionReveal>
      </Container>
    </section>
  );
}
