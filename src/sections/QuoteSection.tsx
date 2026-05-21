import Image from "next/image";
import { Container } from "@/components/Container";
import { MotionReveal } from "@/components/MotionReveal";
import { wedding } from "@/data/wedding";

export function QuoteSection() {
  return (
    <section className="section-band bg-ink text-ivory">
      <Image src={wedding.images.quote} alt="" fill sizes="100vw" className="object-cover opacity-25" />
      <div className="absolute inset-0 bg-ink/70" />
      <Container className="relative z-10">
        <MotionReveal className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-8 h-px w-24 bg-gold" />
          <blockquote className="font-serif text-3xl leading-tight text-balance sm:text-5xl">{wedding.quote}</blockquote>
          <cite className="mt-8 block font-sans text-xs font-semibold uppercase not-italic tracking-[0.28em] text-gold">{wedding.quoteSource}</cite>
        </MotionReveal>
      </Container>
    </section>
  );
}
