import Image from "next/image";
import { Container } from "@/components/Container";
import { MotionReveal } from "@/components/MotionReveal";
import { PhotoPop } from "@/components/PhotoPop";
import { SectionTitle } from "@/components/SectionTitle";
import { wedding } from "@/data/wedding";

export function CoupleSection() {
  return (
    <section id="couple" className="section-band bg-white">
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
            <div key={person.name}>
              <article className="relative grid min-h-[18rem] overflow-hidden rounded-[1.75rem] bg-[#edf5f8] p-5 shadow-soft ring-1 ring-[#9bb8c8]/35 sm:grid-cols-[0.9fr_1.1fr] sm:items-center sm:p-7">
                <Image src={person.background} alt="" fill sizes="(max-width: 768px) 95vw, 760px" className={`scale-105 object-cover opacity-14 ${index === 0 ? "object-left" : ""}`} />
                <div className="absolute inset-0 bg-[#edf5f8]/78" aria-hidden="true" />
                <div className={`relative z-10 mx-auto w-full max-w-[16rem] text-center sm:max-w-[18rem] ${index === 0 ? "sm:order-2 sm:mr-0" : "sm:order-1 sm:ml-0"}`}>
                  <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.21em] text-[#4e7085] lg:text-[6px]">{person.role}</p>
                  <PhotoPop className="relative aspect-[3/4] transform-gpu overflow-hidden rounded-[52%_48%_47%_53%/42%_43%_57%_58%] bg-ivory shadow-soft" delay={0.04}>
                    <Image src={person.image} alt={person.name} fill sizes="(max-width: 768px) 70vw, 260px" className="object-cover object-top" />
                  </PhotoPop>
                  <div className="nickname-titlecase mx-auto mt-4 w-fit border-b border-[#5d8195]/70 px-5 pb-1 text-[42px] font-normal leading-none text-[#31566b] sm:text-[52px] lg:text-[26px]">
                    {person.nickname}
                  </div>
                </div>
                <div className={`relative z-10 mt-6 text-center sm:mt-0 sm:px-3 ${index === 0 ? "sm:order-1 sm:text-left" : "sm:order-2 sm:text-right"}`}>
                  <h3 className="font-serif text-[25px] font-semibold leading-none text-[#1f3340] sm:text-[32px] lg:text-[16px]">{person.name}</h3>
                  <p className={`mx-auto mt-5 max-w-sm text-[15px] leading-[21px] text-[#3f5f72] sm:text-base sm:leading-6 lg:text-[8px] lg:leading-3 ${index === 0 ? "sm:ml-0" : "sm:mr-0"}`}>{person.parents}</p>
                </div>
              </article>
              {index === 0 ? <div className="my-1 text-center font-script text-[57px] font-normal leading-none text-ink lg:text-[29px]">&</div> : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
