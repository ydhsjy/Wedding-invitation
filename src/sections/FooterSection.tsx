import Image from "next/image";
import { Container } from "@/components/Container";
import { MotionReveal } from "@/components/MotionReveal";
import { ParallaxSection } from "@/components/ParallaxSection";
import { wedding } from "@/data/wedding";

export function FooterSection() {
  return (
    <ParallaxSection as="footer" className="relative overflow-hidden bg-ink text-ivory" distance={26}>
      <div className="absolute inset-0">
        <Image src={wedding.images.closing} alt="" fill sizes="100vw" className="object-cover opacity-[0.36]" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/68 to-ink/92" />
      </div>
      <Container className="relative z-10 py-24 text-center sm:py-32">
        <MotionReveal>
          <p className="mx-auto max-w-2xl text-base leading-6 text-ivory/84 sm:text-[32px] sm:leading-none lg:text-[16px]">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
          </p>
          <h2 className="mt-10 font-script text-[57px] font-normal leading-none text-ivory sm:text-[71px] lg:text-[36px]">{wedding.coupleNames}</h2>
          <p className="mt-6 font-sans text-xs font-semibold uppercase tracking-[0.21em] text-gold sm:text-[15px] lg:text-[8px]">Terima kasih</p>
        </MotionReveal>
      </Container>
    </ParallaxSection>
  );
}
