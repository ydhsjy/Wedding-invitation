import Image from "next/image";
import { MapPin } from "lucide-react";
import { Container } from "@/components/Container";
import { MotionReveal } from "@/components/MotionReveal";
import { SectionTitle } from "@/components/SectionTitle";
import { wedding } from "@/data/wedding";

export function EventSection() {
  return (
    <section id="event" className="section-band bg-paper">
      <Container>
        <MotionReveal>
          <SectionTitle
            eyebrow="Rangkaian Acara"
            title="Wedding Day"
            description="Dengan kerendahan hati, kami mengharapkan kehadiran dan doa restu pada rangkaian acara berikut."
          />
        </MotionReveal>
        <div className="mx-auto mt-10 grid max-w-4xl gap-8">
          {wedding.events.map((event, index) => (
            <MotionReveal key={event.title} delay={index * 0.12}>
              <article className="relative mx-auto min-h-[30rem] w-full max-w-[21.25rem] overflow-hidden rounded-[2rem] bg-[#F7F1EA] px-5 py-8 text-center text-ink shadow-[0_20px_45px_rgba(74,56,46,0.16)] sm:max-w-[24rem] sm:px-7 sm:py-9 lg:min-h-[35rem] lg:max-w-[30rem] lg:rounded-[2.75rem] lg:px-9 lg:py-10">
                <div className="pointer-events-none absolute inset-x-0 top-[-5rem] flex justify-center opacity-[0.12] blur-[0.75px]">
                  <Image src={event.image} alt="" width={450} height={354} className="h-72 w-80 object-contain sm:h-80 sm:w-96" />
                </div>
                <div className="relative z-10 mx-auto flex min-h-[26rem] max-w-[19rem] flex-col items-center justify-center lg:min-h-[31rem] lg:max-w-md">
                  <Image
                    src={event.image}
                    alt=""
                    width={324}
                    height={276}
                    sizes="(max-width: 768px) 240px, 288px"
                    className="mb-2 h-48 w-60 object-contain opacity-70 blur-[0.25px] sm:h-60 sm:w-72"
                  />
                  <h3 className="max-w-[18rem] break-words font-serif text-[34px] font-normal uppercase leading-[0.98] tracking-[0.04em] text-ink sm:text-[42px] lg:text-[50px]">
                    {event.title}
                  </h3>
                  <div className="mt-6 h-px w-full max-w-[17rem] bg-ink/65 sm:max-w-[20rem]" />
                  <p className="mt-7 font-serif text-[18px] leading-7 text-ink sm:text-[19px]">{event.date}</p>
                  <p className="mt-4 font-serif text-[18px] leading-7 text-ink sm:text-[19px]">{event.time}</p>
                  <p className="mt-4 font-serif text-[18px] font-semibold leading-7 text-ink sm:text-[19px]">{event.venue}</p>
                  <p className="mt-2 max-w-[17rem] font-serif text-[18px] leading-7 text-ink/88 sm:max-w-xs sm:text-[19px]">{event.address}</p>
                  <a
                    href={event.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-clay px-6 font-serif text-[17px] font-semibold text-ivory transition hover:bg-ink"
                  >
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                    Google Maps
                  </a>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
