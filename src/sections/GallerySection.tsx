import { Container } from "@/components/Container";
import { GallerySlider } from "@/components/GallerySlider";
import { MotionReveal } from "@/components/MotionReveal";
import { SectionTitle } from "@/components/SectionTitle";
import { wedding } from "@/data/wedding";

export function GallerySection() {
  return (
    <section id="gallery" className="section-band bg-[#315f9f] text-ivory">
      <Container>
        <MotionReveal>
          <SectionTitle eyebrow="Our Moment" title="Wedding Gallery" description="Fragmen kecil dari cerita kami, disusun dengan lembut untuk dikenang." light />
        </MotionReveal>
        <MotionReveal className="mt-12">
          <GallerySlider images={wedding.gallery} />
        </MotionReveal>
      </Container>
    </section>
  );
}
