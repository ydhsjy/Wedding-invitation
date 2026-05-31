import Image from "next/image";
import { Container } from "@/components/Container";
import { MotionReveal } from "@/components/MotionReveal";
import { PhotoPop } from "@/components/PhotoPop";
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
                <Image src={person.background} alt="" fill sizes="(max-width: 768px) 95vw, 760px" className="scale-105 object-cover opacity-35 blur-[2px]" />
                <div className="relative z-10 mx-auto w-full max-w-[16rem] text-center sm:max-w-[18rem]">
                  <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.21em] text-clay lg:text-[6px]">{person.role}</p>
                  <PhotoPop className="relative aspect-[3/4] overflow-hidden rounded-[52%_48%_47%_53%/42%_43%_57%_58%] bg-ivory shadow-soft" delay={0.1}>
                    <Image src={person.image} alt={person.name} fill sizes="(max-width: 768px) 70vw, 260px" className="object-cover object-top" />
                  </PhotoPop>
                  <div className="mx-auto mt-4 w-fit border-b border-clay/70 px-5 pb-1 font-script text-[40px] font-normal leading-none text-clay sm:text-[48px] lg:text-[24px]">
                    {person.nickname}
                  </div>
                </div>
                <div className="relative z-10 mt-6 text-center sm:mt-0 sm:px-3">
                  <h3 className="font-serif text-[25px] font-semibold leading-none text-ink sm:text-[32px] lg:text-[16px]">{person.name}</h3>
                  <p className="mx-auto mt-5 max-w-sm text-[15px] leading-[21px] text-clay sm:text-base sm:leading-6 lg:text-[8px] lg:leading-3">{person.parents}</p>
                </div>
              </article>
              {index === 0 ? <div className="my-1 text-center font-script text-[57px] font-normal leading-none text-ink lg:text-[29px]">&</div> : null}
            </MotionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
