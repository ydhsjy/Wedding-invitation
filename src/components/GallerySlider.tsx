"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { useRef, useState } from "react";

export function GallerySlider({ images }: { images: string[] }) {
  const [active, setActive] = useState(0);
  const [preview, setPreview] = useState<string | null>(null);
  const didDrag = useRef(false);

  const move = (direction: number) => {
    setActive((current) => (current + direction + images.length) % images.length);
  };

  const onDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -60 || info.velocity.x < -400) {
      move(1);
    }

    if (info.offset.x > 60 || info.velocity.x > 400) {
      move(-1);
    }

    window.setTimeout(() => {
      didDrag.current = false;
    }, 0);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg touch-pan-y">
        <motion.div
          className="flex cursor-grab active:cursor-grabbing"
          animate={{ x: `-${active * 100}%` }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.16}
          onDragStart={() => {
            didDrag.current = true;
          }}
          onDragEnd={onDragEnd}
        >
          {images.map((image, index) => (
            <button
              type="button"
              key={image}
              onClick={() => {
                if (!didDrag.current) {
                  setPreview(image);
                }
              }}
              className="relative h-[70vh] min-h-[460px] w-full shrink-0 overflow-hidden bg-ink text-left"
              aria-label={`Buka foto galeri ${index + 1}`}
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
            </button>
          ))}
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-4 top-1/2 flex -translate-y-1/2 justify-between">
        <button
          type="button"
          onClick={() => move(-1)}
          className="pointer-events-auto grid h-11 w-11 place-items-center rounded-full bg-ivory/88 text-ink shadow-soft backdrop-blur"
          aria-label="Foto sebelumnya"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => move(1)}
          className="pointer-events-auto grid h-11 w-11 place-items-center rounded-full bg-ivory/88 text-ink shadow-soft backdrop-blur"
          aria-label="Foto berikutnya"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {images.map((image, index) => (
          <button
            type="button"
            key={image}
            onClick={() => setActive(index)}
            className={`h-1.5 rounded-full transition-all ${active === index ? "w-9 bg-gold" : "w-2 bg-clay/30"}`}
            aria-label={`Lihat foto ${index + 1}`}
          />
        ))}
      </div>

      <AnimatePresence>
        {preview ? (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-ink/88 p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              onClick={() => setPreview(null)}
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-ivory/50 text-ivory"
              aria-label="Tutup galeri"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
            <motion.div
              className="relative h-[82vh] w-full max-w-3xl overflow-hidden rounded-lg"
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.96 }}
            >
              <Image src={preview} alt="Pratinjau galeri" fill sizes="90vw" className="object-contain" />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
