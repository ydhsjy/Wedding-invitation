import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { wedding } from "@/data/wedding";

export function DesktopScene() {
  return (
    <aside className="fixed inset-y-0 left-0 hidden overflow-hidden bg-ink text-ivory lg:block lg:w-[calc(100%-min(42vw,640px))]">
      <Image src={wedding.images.desktop} alt="" fill priority sizes="60vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/72 via-ink/34 to-ink/14" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/58 to-transparent" />
      <div className="relative z-10 flex min-h-svh items-end px-12 pb-20 xl:px-24">
        <div className="max-w-xl">
          <p className="font-sans text-[8px] font-semibold uppercase tracking-[0.21em]">The Wedding of</p>
          <h1 className="couple-name-titlecase mt-5 font-script text-[36px] font-normal leading-none xl:text-[39px]">Yudha &<br />Alda</h1>
          <p className="mt-6 font-sans text-[11px] font-semibold tracking-[0.12em]">{wedding.dateLabel}</p>
          <div className="mt-12 h-px w-36 bg-ivory/34" />
        </div>
      </div>
      <div className="absolute bottom-10 right-12 z-10 flex items-center gap-3 text-ivory/82 xl:right-16">
        <p className="font-serif text-[8px] font-medium">Scroll ke bawah</p>
        <ArrowDown className="h-5 w-5 animate-bounce" aria-hidden="true" />
      </div>
    </aside>
  );
}
