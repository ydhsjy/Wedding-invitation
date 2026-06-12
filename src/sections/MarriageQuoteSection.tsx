import { Container } from "@/components/Container";
import { MotionReveal } from "@/components/MotionReveal";
import { wedding } from "@/data/wedding";

export function MarriageQuoteSection() {
  return (
    <section id="marriage-quote" className="section-band relative bg-white">
      <Container className="relative z-10">
        <MotionReveal>
          <article className="relative mx-auto min-h-[21rem] w-full max-w-[20rem] overflow-hidden rounded-[1.75rem] bg-white px-5 py-8 text-center text-[#1f3340] shadow-[0_18px_36px_rgba(45,80,100,0.12)] ring-1 ring-[#d8d6d2]/80 sm:max-w-[23rem] sm:px-7 sm:py-9 lg:min-h-[22rem] lg:max-w-[26rem] lg:rounded-[2rem] lg:px-8 lg:py-7">
            <div className="relative z-10 mx-auto flex min-h-[16rem] max-w-[18rem] flex-col items-center justify-center lg:min-h-[17rem] lg:max-w-sm">
              <p className="font-script text-[42px] font-normal leading-none text-[#1f3340] sm:text-[56px] lg:text-[30px]">Marriage is a beautiful art</p>
              <div className="mt-4 h-px w-full max-w-[14rem] bg-[#5d8195]/75 sm:max-w-[16rem]" />
              <blockquote className="mx-auto mt-6 max-w-xl font-quote text-[23px] leading-7 text-clay text-balance sm:text-[34px] sm:leading-[1.05] lg:mt-4 lg:text-[18px]">
                &ldquo;{wedding.marriageQuote}&rdquo;
              </blockquote>
            </div>
          </article>
        </MotionReveal>
      </Container>
    </section>
  );
}
