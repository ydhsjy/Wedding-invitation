"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, type PanInfo } from "framer-motion";
import { useState } from "react";

export function GallerySlider({ images }: { images: string[] }) {
  const [active, setActive] = useState(0);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const featuredImages = images.slice(0, 4);
  const sliderImages = images.slice(4);

  const move = (direction: number) => {
    setActive((current) => (current + direction + sliderImages.length) % sliderImages.length);
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
    <div className="relative space-y-8">
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {featuredImages.map((image, index) => (
          <button
            type="button"
            key={image}
            onClick={() => setZoomedImage(image)}
            className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-ink text-left shadow-soft focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-ink"
            aria-label={`Perbesar foto galeri ${index + 1}`}
          >
            <Image
              src={image}
              alt={`Galeri pernikahan ${index + 1}`}
              fill
              sizes="(max-width: 768px) 50vw, 320px"
              className="object-cover transition duration-500 group-hover:scale-105"
              loading={index === 0 ? "eager" : "lazy"}
            />
            <span className="absolute inset-0 bg-ink/0 transition group-hover:bg-ink/16" aria-hidden="true" />
          </button>
        ))}
      </div>

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
          {sliderImages.map((image, index) => (
            <div
              key={image}
              className="relative h-[70vh] min-h-[460px] w-full shrink-0 overflow-hidden bg-ink"
            >
              <Image
                src={image}
                alt={`Galeri pernikahan ${index + 5}`}
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
        onClick={() => move(-1)}
        className="absolute left-4 top-[calc(50%+5rem)] grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-ivory/88 text-ink shadow-soft backdrop-blur transition hover:bg-gold hover:text-ivory"
        aria-label="Foto sebelumnya"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>

      <button
        type="button"
        onClick={() => move(1)}
        className="absolute right-4 top-[calc(50%+5rem)] grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-ivory/88 text-ink shadow-soft backdrop-blur transition hover:bg-gold hover:text-ivory"
        aria-label="Foto berikutnya"
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>

      <div className="mt-4 flex flex-wrap justify-center gap-1.5">
        {sliderImages.map((image, index) => (
          <span
            key={image}
            className={`h-1.5 rounded-full transition-all ${active === index ? "w-9 bg-gold" : "w-2 bg-clay/30"}`}
            aria-hidden="true"
          />
        ))}
      </div>

      {zoomedImage ? (
        <div className="fixed inset-0 z-[70] grid place-items-center bg-ink/92 p-4" role="dialog" aria-modal="true">
          <button
            type="button"
            onClick={() => setZoomedImage(null)}
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-ivory text-ink shadow-soft transition hover:bg-gold hover:text-ivory"
            aria-label="Tutup foto"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className="relative h-[82vh] w-full max-w-4xl overflow-hidden rounded-lg">
            <Image src={zoomedImage} alt="Foto galeri diperbesar" fill sizes="100vw" className="object-contain" />
          </div>
        </div>
      ) : null}
    </div>
  );
}
