import Image from "next/image";
import { MapPin } from "lucide-react";
import { Container } from "@/components/Container";
import { MotionReveal } from "@/components/MotionReveal";
import { SectionTitle } from "@/components/SectionTitle";
import { wedding } from "@/data/wedding";

export function EventSection() {
  return (
    <section id="event" className="section-band bg-[#607566]">
      <Container>
        <MotionReveal>
          <SectionTitle
            eyebrow="Rangkaian Acara"
            title="Wedding Day"
            description="Dengan kerendahan hati, kami mengharapkan kehadiran dan doa restu pada rangkaian acara berikut."
            light
          />
        </MotionReveal>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {wedding.events.map((event, index) => (
            <MotionReveal key={event.title} delay={index * 0.12}>
              <article className="relative min-h-[34rem] overflow-hidden rounded-[3.25rem] bg-[#F5F0EA] px-7 py-10 text-center text-ink shadow-[0_28px_70px_rgba(27,38,31,0.34)] sm:px-10 lg:min-h-[38rem]">
                <div className="pointer-events-none absolute inset-x-0 top-[-3.25rem] flex justify-center opacity-20 blur-[1.5px]">
                  <Image src={event.image} alt="" width={220} height={160} className="h-32 w-44 object-contain" />
                </div>
                <div className="relative z-10 mx-auto flex min-h-[29rem] max-w-md flex-col items-center justify-center lg:min-h-[33rem]">
                  <Image
                    src={event.image}
                    alt=""
                    width={132}
                    height={112}
                    sizes="132px"
                    className="mb-7 h-24 w-28 object-contain opacity-75 blur-[0.35px] sm:h-28 sm:w-32"
                  />
                  <h3 className="font-serif text-[48px] font-normal uppercase leading-none tracking-[0.04em] text-ink sm:text-[58px]">
                    {event.title}
                  </h3>
                  <div className="mt-7 h-px w-full max-w-[22rem] bg-ink/70" />
                  <p className="mt-8 font-serif text-[20px] leading-7 text-ink">{event.date}</p>
                  <p className="mt-5 font-serif text-[20px] leading-7 text-ink">{event.time}</p>
                  <p className="mt-5 font-serif text-[20px] font-semibold leading-7 text-ink">{event.venue}</p>
                  <p className="mt-2 max-w-xs font-serif text-[20px] leading-7 text-ink/88">{event.address}</p>
                  <a
                    href={event.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#607566] px-6 font-serif text-[18px] font-semibold text-ivory transition hover:bg-ink"
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
