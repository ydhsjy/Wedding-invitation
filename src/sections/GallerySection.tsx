import { Container } from "@/components/Container";
import { GallerySlider } from "@/components/GallerySlider";
import { MotionReveal } from "@/components/MotionReveal";
import { ParallaxSection } from "@/components/ParallaxSection";
import { SectionTitle } from "@/components/SectionTitle";
import { wedding } from "@/data/wedding";

export function GallerySection() {
  return (
    <ParallaxSection id="gallery" className="section-band bg-ink text-ivory">
      <Container>
        <MotionReveal>
          <SectionTitle eyebrow="Our Moment" title="Wedding Gallery" description="Fragmen kecil dari cerita kami, disusun dengan lembut untuk dikenang." light />
        </MotionReveal>
        <MotionReveal className="mt-12">
          <GallerySlider images={wedding.gallery} />
        </MotionReveal>
      </Container>
    </ParallaxSection>
  );
}
