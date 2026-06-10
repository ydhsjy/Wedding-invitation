import Image from "next/image";
import { wedding } from "@/data/wedding";

type SectionDividerProps = {
  image?: string;
  position?: "top" | "bottom";
};

export function SectionDivider({ image = wedding.images.sectionDivider, position = "top" }: SectionDividerProps) {
  return (
    <section className="relative h-32 overflow-hidden bg-white sm:h-40 lg:h-28" aria-hidden="true">
      {image ? (
        <Image
          src={image}
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 640px"
          className={`object-cover ${position === "bottom" ? "object-bottom" : "object-top"}`}
        />
      ) : null}
    </section>
  );
}
