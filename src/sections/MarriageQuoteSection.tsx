import Image from "next/image";
import { Container } from "@/components/Container";
import { MotionReveal } from "@/components/MotionReveal";
import { wedding } from "@/data/wedding";

export function MarriageQuoteSection() {
  return (
    <section className="relative overflow-hidden bg-[#EEE5DA] pb-0 pt-10 sm:pt-12 lg:pt-8">
      <div className="pointer-events-none absolute right-[-110rem] top-1/2 h-[1440%] w-[1160%] -translate-y-1/2 sm:right-[-140rem] sm:w-[840%] lg:right-[-60rem] lg:w-[600%]">
        <Image src={wedding.images.marriageQuote} alt="" fill sizes="(max-width: 768px) 1160vw, 6000px" className="object-contain object-right opacity-20" />
      </div>
      <Container className="relative z-10">
        <MotionReveal className="mx-auto max-w-2xl text-center">
          <p className="font-script text-[42px] font-normal leading-none text-ink sm:text-[56px] lg:text-[30px]">Marriage is a beautiful art</p>
          <blockquote className="mx-auto mt-6 max-w-xl font-quote text-[23px] leading-7 text-clay text-balance sm:text-[34px] sm:leading-[1.05] lg:mt-4 lg:text-[18px]">
            &ldquo;{wedding.marriageQuote}&rdquo;
          </blockquote>
        </MotionReveal>
      </Container>
    </section>
  );
}
