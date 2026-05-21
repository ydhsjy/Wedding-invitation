import { Container } from "@/components/Container";
import { MotionReveal } from "@/components/MotionReveal";
import { SectionTitle } from "@/components/SectionTitle";
import { TimelineItem } from "@/components/TimelineItem";
import { wedding } from "@/data/wedding";

export function StorySection() {
  return (
    <section id="story" className="section-band bg-paper">
      <Container>
        <MotionReveal>
          <SectionTitle eyebrow="Love Story" title="Our Journey" />
        </MotionReveal>
        <div className="relative mx-auto mt-12 grid max-w-3xl gap-10 before:absolute before:bottom-2 before:left-[5px] before:top-3 before:w-px before:bg-gold/30">
          {wedding.stories.map((item, index) => (
            <TimelineItem item={item} index={index} key={item.title} />
          ))}
        </div>
      </Container>
    </section>
  );
}
