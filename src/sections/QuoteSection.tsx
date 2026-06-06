import Image from "next/image";
import { Container } from "@/components/Container";
import { MotionReveal } from "@/components/MotionReveal";
import { PhotoPop } from "@/components/PhotoPop";
import { wedding } from "@/data/wedding";

export function QuoteSection() {
  return (
    <section className="section-band bg-paper text-ink">
      <Container className="relative z-10">
        <MotionReveal className="mx-auto max-w-4xl text-center">
          <div className="relative mx-auto min-h-[22rem] overflow-hidden rounded-[1.75rem] px-6 py-12 sm:min-h-[26rem] sm:px-14 sm:py-16 lg:min-h-[20rem]">
            <Image
              src={wedding.images.quoteFrame}
              alt=""
              fill
              priority={false}
              sizes="(max-width: 768px) 112vw, 860px"
              className="scale-[1.18] object-contain opacity-75 sm:scale-100"
            />
            <div className="relative z-10 mx-auto flex min-h-[17rem] max-w-2xl flex-col items-center justify-center px-4 py-8 sm:min-h-[20rem] sm:px-8 lg:min-h-[15rem]">
              <span className="font-serif text-[52px] leading-none text-gold/80 sm:text-[70px] lg:text-[35px]">&ldquo;</span>
              <blockquote className="-mt-4 font-serif text-[20px] italic leading-8 text-balance text-ink sm:text-[28px] sm:leading-10 lg:text-[14px] lg:leading-5">
                {wedding.quote}
              </blockquote>
              <div className="mx-auto mt-8 h-px w-24 bg-gold" />
              <cite className="mt-8 block font-serif text-base not-italic leading-6 text-clay lg:text-[8px] lg:leading-3">{wedding.quoteSource}</cite>
            </div>
          </div>
          <PhotoPop className="relative mx-auto mt-8 aspect-[4/5] max-w-sm overflow-hidden rounded-t-full rounded-b-lg shadow-premium sm:mt-10" delay={0.1}>
            <Image src={wedding.images.quote} alt="Yudha dan Alda" fill sizes="(max-width: 768px) 82vw, 360px" className="object-cover" />
          </PhotoPop>
        </MotionReveal>
      </Container>
    </section>
  );
}
