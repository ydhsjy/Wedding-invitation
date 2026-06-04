import Image from "next/image";
import { Container } from "@/components/Container";
import { MotionReveal } from "@/components/MotionReveal";
import { PhotoPop } from "@/components/PhotoPop";
import { wedding } from "@/data/wedding";

export function MarriageQuoteSection() {
  return (
    <section className="relative overflow-hidden bg-[#EEE5DA] py-10 sm:py-12 lg:py-8">
      <div className="pointer-events-none absolute right-[-22rem] top-1/2 h-[288%] w-[232%] -translate-y-1/2 sm:right-[-28rem] sm:w-[168%] lg:right-[-12rem] lg:w-[120%]">
        <Image src={wedding.images.marriageQuote} alt="" fill sizes="(max-width: 768px) 232vw, 1200px" className="object-contain object-right opacity-20" />
      </div>
      <Container className="relative z-10">
        <MotionReveal className="mx-auto max-w-2xl text-center">
          <p className="font-script text-[42px] font-normal leading-none text-ink sm:text-[56px] lg:text-[30px]">Marriage is a beautiful art</p>
          <blockquote className="mx-auto mt-6 max-w-xl font-quote text-[23px] leading-7 text-clay text-balance sm:text-[34px] sm:leading-[1.05] lg:mt-4 lg:text-[18px]">
            &ldquo;{wedding.marriageQuote}&rdquo;
          </blockquote>
          <PhotoPop className="relative mx-auto mt-7 aspect-[3/4] w-20 overflow-hidden sm:w-24 lg:mt-5 lg:w-14" delay={0.1}>
            <Image src={wedding.images.marriageQuote} alt="" fill sizes="96px" className="object-contain opacity-60" />
          </PhotoPop>
        </MotionReveal>
      </Container>
    </section>
  );
}
