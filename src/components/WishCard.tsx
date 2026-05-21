import type { Wish } from "@/data/wedding";

export function WishCard({ wish }: { wish: Wish }) {
  return (
    <article className="rounded-lg border border-gold/25 bg-ivory/75 p-5 shadow-soft">
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-sans text-sm font-semibold text-ink">{wish.name}</h3>
        <span className="rounded-full border border-gold/35 px-3 py-1 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-clay">
          {wish.attendance}
        </span>
      </div>
      <p className="mt-3 text-lg leading-7 text-clay">{wish.message}</p>
    </article>
  );
}
