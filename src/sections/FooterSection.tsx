import Image from "next/image";
import { Container } from "@/components/Container";
import { MotionReveal } from "@/components/MotionReveal";
import { wedding } from "@/data/wedding";

export function FooterSection() {
  return (
    <footer className="relative overflow-hidden bg-ink text-ivory">
      <div className="absolute inset-0">
        <Image src={wedding.images.closing} alt="" fill sizes="100vw" className="object-cover opacity-[0.36]" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/68 to-ink/92" />
      </div>
      <Container className="relative z-10 py-24 text-center sm:py-32">
        <MotionReveal>
          <p className="mx-auto max-w-2xl text-2xl leading-9 text-ivory/84">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
          </p>
          <h2 className="mt-10 font-script text-7xl leading-none text-ivory">{wedding.coupleNames}</h2>
          <p className="mt-6 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-gold">Terima kasih</p>
        </MotionReveal>
      </Container>
    </footer>
  );
}
