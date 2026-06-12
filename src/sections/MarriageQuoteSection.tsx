import Image from "next/image";
import { Container } from "@/components/Container";
import { MotionReveal } from "@/components/MotionReveal";
import { wedding } from "@/data/wedding";

export function MarriageQuoteSection() {
  return (
    <section id="marriage-quote" className="relative overflow-hidden bg-white py-12 sm:py-14 lg:py-10">
      <Image
        src={wedding.images.marriageQuote}
        alt=""
        fill
        sizes="(max-width: 640px) 92vw, (max-width: 1024px) 62vw, 520px"
        className="pointer-events-none select-none object-contain object-left-bottom opacity-35"
      />
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
