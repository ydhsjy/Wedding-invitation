import Image from "next/image";
import { Container } from "@/components/Container";
import { MotionReveal } from "@/components/MotionReveal";
import { wedding } from "@/data/wedding";

export function FooterSection() {
  return (
    <footer className="relative min-h-svh overflow-hidden bg-paper text-ink">
      <div className="relative w-full overflow-hidden bg-paper">
        <div className="relative aspect-video w-full">
          <Image src={wedding.images.closing} alt="" fill sizes="100vw" className="object-contain object-center" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-paper via-paper/80 to-transparent backdrop-blur-[2px]" />
      </div>
      <Container className="relative z-10 -mt-20 flex min-h-[52svh] items-end pb-24 pt-12 text-center sm:-mt-24 sm:min-h-[48svh] sm:pb-28 sm:pt-16 lg:-mt-14 lg:min-h-[34svh] lg:pb-20 lg:pt-8">
        <MotionReveal className="mx-auto w-full max-w-2xl">
          <p className="mx-auto text-[19px] leading-8 text-clay text-balance sm:text-[30px] sm:leading-[1.45] lg:text-[15px] lg:leading-6">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada kami.
          </p>
          <p className="mt-8 font-serif text-[19px] leading-7 text-clay sm:text-[30px] sm:leading-[1.35] lg:mt-6 lg:text-[15px]">Kami yang berbahagia,</p>
          <h2 className="couple-name-titlecase mt-5 whitespace-nowrap font-script text-[50px] font-normal leading-none text-ink sm:text-[66px] lg:text-[34px]">{wedding.coupleNames}</h2>
        </MotionReveal>
      </Container>
    </footer>
  );
}
