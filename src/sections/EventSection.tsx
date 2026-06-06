import Image from "next/image";
import { MapPin } from "lucide-react";
import { Container } from "@/components/Container";
import { MotionReveal } from "@/components/MotionReveal";
import { SectionTitle } from "@/components/SectionTitle";
import { wedding } from "@/data/wedding";

export function EventSection() {
  return (
    <section id="event" className="section-band bg-white">
      <Container>
        <MotionReveal>
          <SectionTitle
            eyebrow="Rangkaian Acara"
            title="Wedding Day"
            description="Dengan kerendahan hati, kami mengharapkan kehadiran dan doa restu pada rangkaian acara berikut."
          />
        </MotionReveal>
        <div className="mx-auto mt-5 grid max-w-4xl gap-6">
          {wedding.events.map((event, index) => (
            <MotionReveal key={event.title} delay={index * 0.12}>
              <article className="relative mx-auto min-h-[21rem] w-full max-w-[20rem] overflow-hidden rounded-[1.75rem] bg-[#F7F1EA] px-5 py-5 text-center text-ink shadow-[0_18px_36px_rgba(74,56,46,0.14)] sm:max-w-[23rem] sm:px-7 sm:py-6 lg:min-h-[22rem] lg:max-w-[26rem] lg:rounded-[2rem] lg:px-8 lg:py-6">
                <div className="relative z-10 mx-auto flex min-h-[18rem] max-w-[18rem] flex-col items-center justify-start lg:min-h-[19rem] lg:max-w-sm">
                  <Image
                    src={event.image}
                    alt=""
                    width={180}
                    height={150}
                    sizes="(max-width: 768px) 112px, 96px"
                    className="mb-2 h-20 w-28 object-contain opacity-80 sm:h-24 sm:w-32 lg:h-16 lg:w-24"
                  />
                  <h3 className="max-w-[18rem] break-words font-serif text-[34px] font-normal uppercase leading-[0.98] tracking-[0.04em] text-ink sm:text-[42px] lg:text-[25px]">
                    {event.title}
                  </h3>
                  <div className="mt-3 h-px w-full max-w-[14rem] bg-ink/65 sm:max-w-[16rem]" />
                  <div className="mt-4 flex min-h-[9.5rem] flex-col items-center sm:min-h-[10rem] lg:min-h-[5.5rem]">
                    <p className="font-serif text-[18px] leading-7 text-ink sm:text-[19px] lg:text-[10px] lg:leading-4">{event.date}</p>
                    <p className="mt-3 font-serif text-[18px] leading-7 text-ink sm:text-[19px] lg:text-[10px] lg:leading-4">{event.time}</p>
                    <p className="mt-3 font-serif text-[18px] font-semibold leading-7 text-ink sm:text-[19px] lg:text-[10px] lg:leading-4">{event.venue}</p>
                    <p className="mt-2 max-w-[17rem] font-serif text-[18px] leading-7 text-ink/88 sm:max-w-xs sm:text-[19px] lg:text-[10px] lg:leading-4">{event.address}</p>
                  </div>
                  <a
                    href={event.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-full bg-clay px-6 font-serif text-[17px] font-semibold text-ivory transition hover:bg-ink lg:text-[9px]"
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
