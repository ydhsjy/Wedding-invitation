import Image from "next/image";
import { Container } from "@/components/Container";
import { MotionReveal } from "@/components/MotionReveal";
import { wedding } from "@/data/wedding";

export function FooterSection() {
  return (
    <footer className="relative min-h-svh overflow-hidden bg-ink text-ivory">
      <div className="absolute inset-0">
        <Image src={wedding.images.closing} alt="" fill sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/5 via-ink/10 to-[#4f6659]/90" />
        <div className="absolute inset-x-0 bottom-0 h-[58%] bg-[#536c5f]/72 backdrop-blur-sm" />
        <div className="absolute inset-x-0 bottom-[45%] h-28 bg-gradient-to-t from-[#536c5f]/72 to-transparent backdrop-blur-[2px]" />
      </div>
      <Container className="relative z-10 flex min-h-svh items-end pb-24 pt-28 text-center sm:pb-28 lg:pb-20">
        <MotionReveal className="mx-auto w-full max-w-2xl">
          <p className="mx-auto text-[19px] leading-8 text-ivory/92 text-balance sm:text-[30px] sm:leading-[1.45] lg:text-[15px] lg:leading-6">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada kami.
          </p>
          <p className="mt-10 font-serif text-[19px] leading-7 text-ivory/92 sm:text-[30px] sm:leading-[1.35] lg:text-[15px]">Kami yang berbahagia,</p>
          <h2 className="couple-name-titlecase mt-6 font-script text-[64px] font-normal leading-none text-ivory sm:text-[82px] lg:text-[42px]">{wedding.coupleNames}</h2>
        </MotionReveal>
      </Container>
    </footer>
  );
}
