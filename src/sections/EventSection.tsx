import Image from "next/image";
import { MapPin } from "lucide-react";
import { Container } from "@/components/Container";
import { MotionReveal } from "@/components/MotionReveal";
import { SectionTitle } from "@/components/SectionTitle";
import { wedding } from "@/data/wedding";

export function EventSection() {
  return (
    <section id="event" className="section-band bg-[#EEE5DA]">
      <Container>
        <MotionReveal>
          <SectionTitle eyebrow="Rangkaian Acara" title="Wedding Day" description="Dengan kerendahan hati, kami mengharapkan kehadiran dan doa restu pada rangkaian acara berikut." />
        </MotionReveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {wedding.events.map((event, index) => (
            <MotionReveal key={event.title} delay={index * 0.12}>
              <article className="relative min-h-[28rem] overflow-hidden rounded-lg p-7 text-ivory shadow-premium sm:p-9">
                <Image src={event.image} alt="" fill sizes="(max-width: 1024px) 100vw, 560px" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-ink/35 via-ink/45 to-ink/86" />
                <div className="relative z-10 flex min-h-[24rem] flex-col justify-end">
                  <p className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-gold">{event.title}</p>
                  <h3 className="mt-3 font-serif text-4xl font-medium leading-none sm:text-5xl">{event.date}</h3>
                  <p className="mt-4 font-sans text-sm uppercase tracking-[0.16em] text-ivory/80">{event.time}</p>
                  <p className="mt-5 text-xl leading-8 text-ivory/85">
                    {event.venue}
                    <br />
                    {event.address}
                  </p>
                  <a
                    href={event.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex min-h-11 w-fit items-center gap-2 rounded-full bg-ivory px-5 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-ink transition hover:bg-gold hover:text-ivory"
                  >
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                    Lihat Lokasi
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
