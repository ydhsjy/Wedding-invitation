import { Container } from "@/components/Container";
import { MotionReveal } from "@/components/MotionReveal";
import { wedding } from "@/data/wedding";

export function MarriageQuoteSection() {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-8">
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
