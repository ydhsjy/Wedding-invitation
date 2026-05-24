"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { motion, type PanInfo } from "framer-motion";
import { useState } from "react";

export function GallerySlider({ images }: { images: string[] }) {
  const [active, setActive] = useState(0);

  const move = (direction: number) => {
    setActive((current) => (current + direction + images.length) % images.length);
  };

  const onDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -42 || info.velocity.x < -320) {
      move(1);
    }

    if (info.offset.x > 42 || info.velocity.x > 320) {
      move(-1);
    }
  };

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg touch-pan-y">
        <motion.div
          className="flex cursor-grab active:cursor-grabbing"
          animate={{ x: `-${active * 100}%` }}
          transition={{ type: "spring", stiffness: 120, damping: 28, mass: 0.9 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.24}
          onDragEnd={onDragEnd}
        >
          {images.map((image, index) => (
            <div
              key={image}
              className="relative h-[70vh] min-h-[460px] w-full shrink-0 overflow-hidden bg-ink"
            >
              <Image
                src={image}
                alt={`Galeri pernikahan ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 900px"
                className="object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
              <span className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-ink/65 to-transparent" />
            </div>
          ))}
        </motion.div>
      </div>

      <button
        type="button"
        onClick={() => move(1)}
        className="absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-ivory/88 text-ink shadow-soft backdrop-blur transition hover:bg-gold hover:text-ivory"
        aria-label="Foto berikutnya"
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>

      <div className="mt-4 flex flex-wrap justify-center gap-1.5">
        {images.map((image, index) => (
          <span
            key={image}
            className={`h-1.5 rounded-full transition-all ${active === index ? "w-9 bg-gold" : "w-2 bg-clay/30"}`}
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  );
}
