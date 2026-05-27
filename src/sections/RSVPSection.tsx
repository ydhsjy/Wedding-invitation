import { Container } from "@/components/Container";
import { MotionReveal } from "@/components/MotionReveal";
import { ParallaxSection } from "@/components/ParallaxSection";
import { RSVPForm } from "@/components/RSVPForm";
import { wedding } from "@/data/wedding";

export function RSVPSection() {
  return (
    <ParallaxSection id="rsvp" className="section-band bg-[#EEE5DA]">
      <Container>
        <MotionReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.21em] text-clay sm:text-[15px] lg:text-[8px]">Konfirmasi Kehadiran</p>
            <h2 className="mt-3 font-decorative text-[34px] font-normal leading-none text-ink sm:text-[32px] lg:text-[16px]">RSVP</h2>
            <p className="mt-5 text-[15px] leading-[21px] text-clay sm:text-base sm:leading-6 lg:text-[8px] lg:leading-3">
              Kehadiran dan doa Bapak/Ibu/Saudara/i menjadi bagian terindah dari hari bahagia kami.
            </p>
          </div>
        </MotionReveal>
        <MotionReveal className="mt-12">
          <RSVPForm initialWishes={wedding.wishes} />
        </MotionReveal>
      </Container>
    </ParallaxSection>
  );
}
