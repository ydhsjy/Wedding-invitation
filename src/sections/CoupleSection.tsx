import Image from "next/image";
import { Container } from "@/components/Container";
import { MotionReveal } from "@/components/MotionReveal";
import { SectionTitle } from "@/components/SectionTitle";
import { wedding } from "@/data/wedding";

export function CoupleSection() {
  return (
    <section id="couple" className="section-band bg-paper">
      <Container>
        <MotionReveal>
          <SectionTitle
            eyebrow="Salve"
            title="Bride & Groom"
            description="Tuhan membuat segala sesuatu indah pada waktunya. Dengan penuh syukur, kami mengundang Bapak/Ibu/Saudara/i untuk berbagi kebahagiaan dalam pernikahan kudus kami."
          />
        </MotionReveal>

        <div className="relative mt-14 grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          {wedding.couples.map((person, index) => (
            <MotionReveal key={person.name} delay={index * 0.12}>
              <article className="text-center">
                <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-lg shadow-premium">
                  <Image src={person.image} alt={person.name} fill sizes="(max-width: 768px) 90vw, 360px" className="object-cover" />
                </div>
                <p className="mt-7 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-clay">{person.role}</p>
                <h3 className="mt-3 font-serif text-4xl font-medium leading-none text-ink sm:text-5xl">{person.name}</h3>
                <p className="mx-auto mt-4 max-w-xs text-lg leading-8 text-clay">{person.parents}</p>
              </article>
            </MotionReveal>
          ))}
          <div className="pointer-events-none absolute left-1/2 top-36 hidden -translate-x-1/2 font-script text-8xl text-gold lg:block">&</div>
        </div>
      </Container>
    </section>
  );
}
