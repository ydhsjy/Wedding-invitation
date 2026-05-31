import Image from "next/image";
import { Container } from "@/components/Container";
import { MotionReveal } from "@/components/MotionReveal";
import { PhotoPop } from "@/components/PhotoPop";
import { wedding } from "@/data/wedding";

export function MarriageQuoteSection() {
  return (
    <section className="section-band bg-[#EEE5DA]">
      <div className="pointer-events-none absolute left-[-6rem] top-1/2 h-[82%] w-[84%] -translate-y-1/2 sm:left-[-9rem] sm:w-[58%] lg:left-[-4rem] lg:w-[38%]">
        <Image src={wedding.images.quoteSecondFrame} alt="" fill sizes="(max-width: 768px) 84vw, 420px" className="object-contain object-left opacity-30" />
      </div>
      <Container className="relative z-10">
        <MotionReveal className="mx-auto max-w-3xl text-center lg:mr-0">
          <p className="font-script text-[45px] font-normal leading-none text-ink sm:text-[65px] lg:text-[33px]">Marriage is a beautiful art</p>
          <blockquote className="mx-auto mt-8 max-w-2xl font-quote text-[25px] leading-7 text-clay text-balance sm:text-[42px] sm:leading-none lg:text-[21px]">
            &ldquo;{wedding.marriageQuote}&rdquo;
          </blockquote>
          <PhotoPop className="relative mx-auto mt-12 aspect-[4/5] max-w-md overflow-hidden rounded-lg shadow-premium" delay={0.1}>
            <Image src={wedding.images.marriageQuote} alt="Wedding quote portrait" fill sizes="(max-width: 768px) 90vw, 430px" className="object-cover" />
          </PhotoPop>
        </MotionReveal>
      </Container>
    </section>
  );
}
