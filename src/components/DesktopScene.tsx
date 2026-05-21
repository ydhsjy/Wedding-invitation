import Image from "next/image";
import { wedding } from "@/data/wedding";

export function DesktopScene() {
  return (
    <aside className="fixed inset-y-0 left-0 hidden overflow-hidden bg-ink text-ivory lg:block lg:w-[calc(100%-min(42vw,640px))]">
      <Image src={wedding.images.desktop} alt="" fill priority sizes="60vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/72 via-ink/34 to-ink/14" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/58 to-transparent" />
      <div className="relative z-10 flex min-h-svh items-end px-12 pb-20 xl:px-24">
        <div className="max-w-xl">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.34em]">The Wedding of</p>
          <h1 className="mt-5 font-serif text-8xl font-medium leading-[0.9] xl:text-[8.5rem]">Yudha &<br />Alda</h1>
          <p className="mt-6 font-sans text-lg font-semibold uppercase tracking-[0.22em]">{wedding.dateLabel}</p>
          <div className="mt-12 h-px w-36 bg-ivory/34" />
          <p className="mt-7 font-sans text-base font-medium text-ivory/82">Scroll ke bawah</p>
        </div>
      </div>
    </aside>
  );
}
