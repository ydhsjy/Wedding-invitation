import Image from "next/image";
import { Container } from "@/components/Container";
import { MotionReveal } from "@/components/MotionReveal";
import { wedding } from "@/data/wedding";

export function MarriageQuoteSection() {
  return (
    <section className="section-band bg-[#EEE5DA]">
      <Container>
        <MotionReveal className="mx-auto max-w-3xl text-center">
          <p className="font-script text-[45px] font-normal leading-none text-ink sm:text-[65px] lg:text-[33px]">Marriage is a beautiful art</p>
          <blockquote className="mx-auto mt-8 max-w-2xl font-serif text-base italic leading-6 text-clay text-balance sm:text-[32px] sm:leading-none lg:text-[16px]">
            &ldquo;{wedding.marriageQuote}&rdquo;
          </blockquote>
          <div className="relative mx-auto mt-12 aspect-[4/5] max-w-md overflow-hidden rounded-lg shadow-premium">
            <Image src={wedding.images.marriageQuote} alt="Wedding quote portrait" fill sizes="(max-width: 768px) 90vw, 430px" className="object-cover" />
          </div>
        </MotionReveal>
      </Container>
    </section>
  );
}
