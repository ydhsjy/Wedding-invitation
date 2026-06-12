import Image from "next/image";
import { Container } from "@/components/Container";
import { MotionReveal } from "@/components/MotionReveal";
import { wedding } from "@/data/wedding";

export function FooterSection() {
  return (
    <footer className="relative min-h-svh overflow-hidden bg-white text-ink">
      <div className="relative w-full overflow-hidden bg-white">
        <div className="relative h-[62svh] w-full sm:aspect-video sm:h-auto">
          <Image src={wedding.images.closing} alt="" fill sizes="100vw" className="object-cover object-center sm:object-contain" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/80 to-transparent backdrop-blur-[2px]" />
      </div>
      <Container className="relative z-10 -mt-20 flex min-h-[52svh] items-end pb-24 pt-12 text-center sm:-mt-24 sm:min-h-[48svh] sm:pb-28 sm:pt-16 lg:-mt-14 lg:min-h-[34svh] lg:pb-20 lg:pt-8">
        <MotionReveal className="mx-auto w-full max-w-2xl">
          <p className="mx-auto text-[17px] leading-7 text-clay text-balance sm:text-[26px] sm:leading-[1.4] lg:text-[14px] lg:leading-6">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada kami.
          </p>
          <p className="mt-8 font-serif text-[17px] leading-7 text-clay sm:text-[26px] sm:leading-[1.3] lg:mt-6 lg:text-[14px]">Kami yang berbahagia,</p>
          <h2 className="couple-name-titlecase mt-5 whitespace-nowrap font-script text-[50px] font-normal leading-none text-ink sm:text-[66px] lg:text-[34px]">{wedding.coupleNames}</h2>
          <p className="mx-auto mt-6 max-w-xl font-serif text-[16px] leading-7 text-clay sm:text-[22px] sm:leading-8 lg:mt-4 lg:text-[12px] lg:leading-5">
            Terima kasih telah menjadi bagian dari doa dan sukacita kami.
          </p>
        </MotionReveal>
      </Container>
      <div className="relative h-36 w-full overflow-hidden bg-white sm:h-44 lg:h-32" aria-hidden="true">
        <Image src={wedding.images.marriageDivider} alt="" fill sizes="100vw" className="object-cover object-bottom" />
      </div>
    </footer>
  );
}
