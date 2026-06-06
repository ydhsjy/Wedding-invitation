import Image from "next/image";
import { wedding } from "@/data/wedding";

export function SectionDivider() {
  return (
    <section className="relative h-32 overflow-hidden bg-white sm:h-40 lg:h-28" aria-hidden="true">
      <Image
        src={wedding.images.sectionDivider}
        alt=""
        fill
        sizes="(max-width: 1024px) 100vw, 640px"
        className="object-cover object-top"
      />
    </section>
  );
}
