"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, ZoomIn, ZoomOut, X } from "lucide-react";
import { motion, type PanInfo } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export function GallerySlider({ images }: { images: string[] }) {
  const [active, setActive] = useState(0);
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);
  const [zoomScale, setZoomScale] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const featuredImages = images.slice(0, 4);
  const sliderImages = images.slice(4);
  const previewImage = previewIndex === null ? null : featuredImages[previewIndex];
  const previewCounter = previewIndex === null ? 0 : previewIndex + 1;

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

  const openPreview = (index: number) => {
    setZoomScale(1);
    setPreviewIndex(index);
  };

  const closePreview = useCallback(() => {
    if (document.fullscreenElement) {
      void document.exitFullscreen();
    }
    setPreviewIndex(null);
    setZoomScale(1);
  }, []);

  const movePreview = useCallback((direction: number) => {
    setZoomScale(1);
    setPreviewIndex((current) => {
      if (current === null) {
        return current;
      }

      return (current + direction + featuredImages.length) % featuredImages.length;
    });
  }, [featuredImages.length]);

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

  useEffect(() => {
    if (previewIndex === null) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePreview();
      }

      if (event.key === "ArrowLeft") {
        movePreview(-1);
      }

      if (event.key === "ArrowRight") {
        movePreview(1);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [closePreview, movePreview, previewIndex]);

  return (
    <div className="relative space-y-8">
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        {featuredImages.map((image, index) => (
          <button
            type="button"
            key={image}
            onClick={() => openPreview(index)}
            className="group relative aspect-[3/4] max-h-[44svh] overflow-hidden bg-paper text-left focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-ivory sm:aspect-square sm:max-h-none"
            aria-label={`Perbesar foto galeri ${index + 1}`}
          >
            <Image
              src={image}
              alt={`Galeri pernikahan ${index + 1}`}
              fill
              sizes="(max-width: 640px) 50vw, 25vw"
              className="object-cover transition duration-500 group-hover:scale-105"
              loading={index === 0 ? "eager" : "lazy"}
            />
            <span className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/35" aria-hidden="true" />
            <span className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 scale-75 place-items-center rounded-full bg-ivory/95 text-ink opacity-0 shadow-soft backdrop-blur transition duration-300 group-hover:scale-100 group-hover:opacity-100 group-hover:bg-gold group-hover:text-ivory">
              <ZoomIn className="h-4 w-4" aria-hidden="true" />
            </span>
          </button>
        ))}
      </div>

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
            {sliderImages.map((image, index) => (
              <div key={image} className="relative h-[68svh] max-h-[560px] min-h-[320px] w-full shrink-0 overflow-hidden bg-paper sm:min-h-[460px]">
                <Image
                  src={image}
                  alt={`Galeri pernikahan ${index + 5}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 900px"
                  className="object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <span className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-ink/25 to-transparent" />
              </div>
            ))}
          </motion.div>
        </div>

        <button
          type="button"
          onClick={() => move(-1)}
          className="absolute left-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-ivory/88 text-ink shadow-soft backdrop-blur transition hover:bg-gold hover:text-ivory"
          aria-label="Foto sebelumnya"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>

        <button
          type="button"
          onClick={() => move(1)}
          className="absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-ivory/88 text-ink shadow-soft backdrop-blur transition hover:bg-gold hover:text-ivory"
          aria-label="Foto berikutnya"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-1.5">
        {sliderImages.map((image, index) => (
          <span
            key={image}
            className={`h-1.5 rounded-full transition-all ${active === index ? "w-9 bg-gold" : "w-2 bg-clay/30"}`}
            aria-hidden="true"
          />
        ))}
      </div>

      {typeof document !== "undefined" && previewImage
        ? createPortal(
        <div ref={modalRef} className="fixed inset-0 z-[70] h-svh w-screen overflow-hidden bg-transparent text-ivory" role="dialog" aria-modal="true">
          <div className="absolute left-3 top-3 z-20 rounded-full bg-black/45 px-3 py-1 text-xs font-semibold tracking-[0.12em] text-ivory/85 backdrop-blur sm:left-5 sm:top-5">
            {previewCounter} / {featuredImages.length}
          </div>
          <div className="absolute right-3 top-3 z-20 flex items-center gap-1.5 sm:right-5 sm:top-5 sm:gap-2">
            <button
              type="button"
              onClick={() => setZoomScale((current) => Math.max(1, current - 0.25))}
              className="grid h-10 w-10 place-items-center rounded-full bg-black/45 text-ivory shadow-soft backdrop-blur transition hover:bg-ivory hover:text-ink sm:h-11 sm:w-11"
              aria-label="Perkecil foto"
            >
              <ZoomOut className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => setZoomScale((current) => Math.min(2.5, current + 0.25))}
              className="grid h-10 w-10 place-items-center rounded-full bg-black/45 text-ivory shadow-soft backdrop-blur transition hover:bg-ivory hover:text-ink sm:h-11 sm:w-11"
              aria-label="Perbesar foto"
            >
              <ZoomIn className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={toggleFullscreen}
              className="grid h-10 w-10 place-items-center rounded-full bg-black/45 text-ivory shadow-soft backdrop-blur transition hover:bg-ivory hover:text-ink sm:h-11 sm:w-11"
              aria-label={isFullscreen ? "Keluar layar penuh" : "Layar penuh"}
            >
              {isFullscreen ? <Minimize2 className="h-5 w-5" aria-hidden="true" /> : <Maximize2 className="h-5 w-5" aria-hidden="true" />}
            </button>
            <button
              type="button"
              onClick={closePreview}
              className="grid h-10 w-10 place-items-center rounded-full bg-black/45 text-ivory shadow-soft backdrop-blur transition hover:bg-ivory hover:text-ink sm:h-11 sm:w-11"
              aria-label="Tutup foto"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <button
            type="button"
            onClick={() => movePreview(-1)}
            className="absolute left-0 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-black/38 text-ivory backdrop-blur transition hover:bg-ivory hover:text-ink sm:left-5 sm:h-12 sm:w-12"
            aria-label="Foto preview sebelumnya"
          >
            <ChevronLeft className="h-7 w-7" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => movePreview(1)}
            className="absolute right-0 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-black/38 text-ivory backdrop-blur transition hover:bg-ivory hover:text-ink sm:right-5 sm:h-12 sm:w-12"
            aria-label="Foto preview berikutnya"
          >
            <ChevronRight className="h-7 w-7" aria-hidden="true" />
          </button>
          <div className="absolute inset-0 z-0 flex h-svh w-screen items-center justify-center overflow-hidden px-0 py-14 sm:px-6 sm:py-20">
            <div className="relative h-full max-h-[calc(100svh-7rem)] w-screen max-w-none origin-center transition-transform duration-200 sm:max-h-[calc(100svh-10rem)] sm:w-full sm:max-w-[100vw]" style={{ transform: `scale(${zoomScale})` }}>
              <Image src={previewImage} alt="Foto galeri diperbesar" fill sizes="100vw" className="object-cover sm:object-contain" priority />
            </div>
          </div>
        </div>,
          document.body
        )
        : null}
    </div>
  );
}
