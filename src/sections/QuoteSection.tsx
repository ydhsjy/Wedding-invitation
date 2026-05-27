import Image from "next/image";
import { Container } from "@/components/Container";
import { MotionReveal } from "@/components/MotionReveal";
import { ParallaxSection } from "@/components/ParallaxSection";
import { wedding } from "@/data/wedding";

export function QuoteSection() {
  return (
    <ParallaxSection className="section-band bg-paper text-ink">
      <Container className="relative z-10">
        <MotionReveal className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-8 h-px w-24 bg-gold" />
          <blockquote className="font-quote text-[25px] leading-7 text-balance text-ink sm:text-[42px] sm:leading-none lg:text-[21px]">{wedding.quote}</blockquote>
          <cite className="mt-8 block font-serif text-base not-italic leading-6 text-clay lg:text-[8px] lg:leading-3">{wedding.quoteSource}</cite>
          <div className="relative mx-auto mt-12 aspect-[4/5] max-w-sm overflow-hidden rounded-t-full rounded-b-lg shadow-premium">
            <Image src={wedding.images.quote} alt="Yudha dan Alda" fill sizes="(max-width: 768px) 82vw, 360px" className="object-cover" />
          </div>
        </MotionReveal>
      </Container>
    </ParallaxSection>
  );
}
