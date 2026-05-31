import Image from "next/image";
import { Container } from "@/components/Container";
import { MotionReveal } from "@/components/MotionReveal";
import { PhotoPop } from "@/components/PhotoPop";
import { wedding } from "@/data/wedding";

export function QuoteSection() {
  return (
    <section className="section-band bg-paper text-ink">
      <Container className="relative z-10">
        <MotionReveal className="mx-auto max-w-3xl text-center">
          <div className="relative mx-auto overflow-hidden rounded-[1.5rem] px-7 py-12 shadow-soft sm:px-14 sm:py-16">
            <Image src={wedding.images.quoteFrame} alt="" fill sizes="(max-width: 768px) 90vw, 720px" className="object-contain opacity-55" />
            <div className="relative z-10 mx-auto max-w-2xl">
              <div className="mx-auto mb-8 h-px w-24 bg-gold" />
              <blockquote className="font-serif text-[20px] italic leading-8 text-balance text-ink sm:text-[28px] sm:leading-10 lg:text-[14px] lg:leading-5">
                &ldquo;{wedding.quote}&rdquo;
              </blockquote>
              <cite className="mt-8 block font-serif text-base not-italic leading-6 text-clay lg:text-[8px] lg:leading-3">{wedding.quoteSource}</cite>
            </div>
          </div>
          <PhotoPop className="relative mx-auto mt-12 aspect-[4/5] max-w-sm overflow-hidden rounded-t-full rounded-b-lg shadow-premium" delay={0.1}>
            <Image src={wedding.images.quote} alt="Yudha dan Alda" fill sizes="(max-width: 768px) 82vw, 360px" className="object-cover" />
          </PhotoPop>
        </MotionReveal>
      </Container>
    </section>
  );
}
