import type { Wish } from "@/data/wedding";

export function WishCard({ wish }: { wish: Wish }) {
  return (
    <article className="rounded-lg border border-[#6f91bd]/25 bg-white p-5 shadow-soft">
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-sans text-sm font-semibold text-ink lg:text-[7px]">{wish.name}</h3>
        <span className="rounded-full border border-[#6f91bd]/45 bg-[#eef5ff] px-3 py-1 font-sans text-xs font-semibold uppercase tracking-[0.21em] text-[#315f9f] lg:text-[6px]">
          {wish.attendance}
        </span>
      </div>
      <p className="mt-3 text-sm leading-[22.4px] text-clay lg:text-[7px] lg:leading-3">{wish.message}</p>
    </article>
  );
}
