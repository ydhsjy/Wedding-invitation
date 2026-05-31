"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, ZoomIn, ZoomOut, X } from "lucide-react";
import { motion, type PanInfo } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function GallerySlider({ images }: { images: string[] }) {
  const [active, setActive] = useState(0);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [zoomScale, setZoomScale] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
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

  const openPreview = (image: string) => {
    setZoomScale(1);
    setZoomedImage(image);
  };

  const closePreview = () => {
    if (document.fullscreenElement) {
      void document.exitFullscreen();
    }
    setZoomedImage(null);
    setZoomScale(1);
  };

  const toggleFullscreen = () => {
    if (!modalRef.current) {
      return;
    }

    if (document.fullscreenElement) {
      void document.exitFullscreen();
      return;
    }

    void modalRef.current.requestFullscreen();
  };

  useEffect(() => {
    const updateFullscreen = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", updateFullscreen);
    return () => document.removeEventListener("fullscreenchange", updateFullscreen);
  }, []);

  return (
    <div className="relative space-y-8">
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {featuredImages.map((image, index) => (
          <button
            type="button"
            key={image}
            onClick={() => openPreview(image)}
            className="group relative aspect-[4/5] overflow-hidden rounded-lg border border-ivory/10 bg-ink text-left shadow-[0_18px_40px_rgba(0,0,0,0.28)] focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-ink"
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
            <span className="absolute inset-0 bg-gradient-to-t from-ink/42 via-transparent to-ivory/6 opacity-85 transition group-hover:opacity-55" aria-hidden="true" />
            <span className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-ivory/90 text-ink shadow-soft backdrop-blur transition group-hover:bg-gold group-hover:text-ivory">
              <ZoomIn className="h-4 w-4" aria-hidden="true" />
            </span>
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
        <div ref={modalRef} className="fixed inset-0 z-[70] grid place-items-center bg-ink p-0" role="dialog" aria-modal="true">
          <div className="absolute right-3 top-3 z-20 flex items-center gap-2 sm:right-5 sm:top-5">
            <button
              type="button"
              onClick={() => setZoomScale((current) => Math.max(1, current - 0.25))}
              className="grid h-11 w-11 place-items-center rounded-full bg-ivory/92 text-ink shadow-soft backdrop-blur transition hover:bg-gold hover:text-ivory"
              aria-label="Perkecil foto"
            >
              <ZoomOut className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => setZoomScale((current) => Math.min(2.5, current + 0.25))}
              className="grid h-11 w-11 place-items-center rounded-full bg-ivory/92 text-ink shadow-soft backdrop-blur transition hover:bg-gold hover:text-ivory"
              aria-label="Perbesar foto"
            >
              <ZoomIn className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={toggleFullscreen}
              className="grid h-11 w-11 place-items-center rounded-full bg-ivory/92 text-ink shadow-soft backdrop-blur transition hover:bg-gold hover:text-ivory"
              aria-label={isFullscreen ? "Keluar layar penuh" : "Layar penuh"}
            >
              {isFullscreen ? <Minimize2 className="h-5 w-5" aria-hidden="true" /> : <Maximize2 className="h-5 w-5" aria-hidden="true" />}
            </button>
            <button
              type="button"
              onClick={closePreview}
              className="grid h-11 w-11 place-items-center rounded-full bg-ivory/92 text-ink shadow-soft backdrop-blur transition hover:bg-gold hover:text-ivory"
              aria-label="Tutup foto"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div className="absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-ink/75 to-transparent" aria-hidden="true" />
          <div className="relative h-svh w-screen overflow-auto">
            <div className="relative min-h-full min-w-full" style={{ height: `${100 * zoomScale}svh`, width: `${100 * zoomScale}vw` }}>
              <Image src={zoomedImage} alt="Foto galeri diperbesar" fill sizes="100vw" className="object-contain" priority />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
