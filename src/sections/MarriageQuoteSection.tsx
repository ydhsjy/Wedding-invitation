import Image from "next/image";
import { Container } from "@/components/Container";
import { MotionReveal } from "@/components/MotionReveal";
import { wedding } from "@/data/wedding";

export function MarriageQuoteSection() {
  return (
    <section className="relative overflow-hidden bg-[#EEE5DA] pb-0 pt-10 sm:pt-12 lg:pt-8">
      <Container className="relative z-10">
        <MotionReveal className="relative mx-auto max-w-2xl text-center">
          <p className="font-script text-[42px] font-normal leading-none text-ink sm:text-[56px] lg:text-[30px]">Marriage is a beautiful art</p>
          <div className="pointer-events-none relative z-0 mx-auto -mt-2 h-40 w-[150vw] max-w-[36rem] sm:h-52 sm:max-w-[48rem] lg:h-28 lg:max-w-[24rem]">
            <Image src={wedding.images.marriageQuote} alt="" fill sizes="(max-width: 768px) 150vw, 768px" className="object-contain object-center opacity-20" />
          </div>
          <blockquote className="relative z-10 mx-auto -mt-28 max-w-xl font-quote text-[23px] leading-7 text-clay text-balance sm:-mt-36 sm:text-[34px] sm:leading-[1.05] lg:-mt-20 lg:text-[18px]">
            &ldquo;{wedding.marriageQuote}&rdquo;
          </blockquote>
        </MotionReveal>
      </Container>
    </section>
  );
}
