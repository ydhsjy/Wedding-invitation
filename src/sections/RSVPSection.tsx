import { Container } from "@/components/Container";
import { MotionReveal } from "@/components/MotionReveal";
import { RSVPForm } from "@/components/RSVPForm";
import { SectionTitle } from "@/components/SectionTitle";
import { wedding } from "@/data/wedding";

export function RSVPSection() {
  return (
    <section id="rsvp" className="section-band bg-[#EEE5DA]">
      <Container>
        <MotionReveal>
          <SectionTitle eyebrow="Konfirmasi Kehadiran" title="RSVP & Wishes" description="Kehadiran dan doa Bapak/Ibu/Saudara/i menjadi bagian terindah dari hari bahagia kami." />
        </MotionReveal>
        <MotionReveal className="mt-12">
          <RSVPForm initialWishes={wedding.wishes} />
        </MotionReveal>
      </Container>
    </section>
  );
}
