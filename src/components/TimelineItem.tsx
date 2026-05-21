import type { TimelineStory } from "@/data/wedding";
import { MotionReveal } from "@/components/MotionReveal";

export function TimelineItem({ item, index }: { item: TimelineStory; index: number }) {
  return (
    <MotionReveal delay={index * 0.1} className="relative pl-10">
      <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-gold shadow-[0_0_0_8px_rgba(198,169,105,0.16)]" />
      <span className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-clay">{item.year}</span>
      <h3 className="mt-2 font-serif text-3xl font-medium leading-none text-ink">{item.title}</h3>
      <p className="mt-3 text-lg leading-8 text-clay">{item.description}</p>
    </MotionReveal>
  );
}
