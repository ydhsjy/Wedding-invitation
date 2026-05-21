import Image from "next/image";
import { Instagram } from "lucide-react";
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

        <div className="relative mx-auto mt-14 grid max-w-4xl gap-8">
          {wedding.couples.map((person, index) => (
            <MotionReveal key={person.name} delay={index * 0.12}>
              <article className="relative grid min-h-[18rem] overflow-hidden rounded-[1.75rem] bg-[#f4f1ec] p-5 shadow-soft sm:grid-cols-[0.9fr_1.1fr] sm:items-center sm:p-7">
                <Image src={person.background} alt="" fill sizes="(max-width: 768px) 95vw, 760px" className="object-cover opacity-45" />
                <div className="relative z-10 mx-auto w-full max-w-[16rem] sm:max-w-[18rem]">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[52%_48%_47%_53%/42%_43%_57%_58%] bg-ivory shadow-soft">
                    <Image src={person.image} alt={person.name} fill sizes="(max-width: 768px) 70vw, 260px" className="object-cover object-top" />
                  </div>
                </div>
                <div className="relative z-10 mt-6 text-center sm:mt-0 sm:px-3">
                  <p className="font-sans text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-clay">{person.role}</p>
                  <h3 className="mt-3 font-serif text-3xl font-bold leading-[0.95] text-ink sm:text-4xl">{person.name}</h3>
                  <p className="mx-auto mt-5 max-w-sm text-2xl leading-9 text-clay">{person.parents}</p>
                  <button
                    type="button"
                    className="mt-5 inline-grid h-9 w-9 place-items-center rounded-md bg-ink text-ivory shadow-soft"
                    aria-label={`Instagram ${person.name}`}
                  >
                    <Instagram className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </article>
              {index === 0 ? <div className="my-1 text-center font-serif text-6xl font-semibold leading-none text-ink">&</div> : null}
            </MotionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
