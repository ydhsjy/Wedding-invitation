import Image from "next/image";
import { Container } from "@/components/Container";
import { MotionReveal } from "@/components/MotionReveal";
import { wedding } from "@/data/wedding";

export function QuoteSection() {
  return (
    <section className="section-band bg-paper text-ink">
      <Container className="relative z-10">
        <MotionReveal className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-8 h-px w-24 bg-gold" />
          <blockquote className="font-serif text-base leading-6 text-balance text-ink sm:text-[32px] sm:leading-none">{wedding.quote}</blockquote>
          <cite className="mt-8 block font-serif text-base not-italic leading-6 text-clay">{wedding.quoteSource}</cite>
          <div className="relative mx-auto mt-12 aspect-[4/5] max-w-sm overflow-hidden rounded-t-full rounded-b-lg shadow-premium">
            <Image src={wedding.images.quote} alt="Yudha dan Alda" fill sizes="(max-width: 768px) 82vw, 360px" className="object-cover" />
          </div>
        </MotionReveal>
      </Container>
    </section>
  );
}
