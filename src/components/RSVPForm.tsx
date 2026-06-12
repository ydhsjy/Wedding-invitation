"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";
import type { Wish } from "@/data/wedding";
import { WishCard } from "@/components/WishCard";

export function RSVPForm({ initialWishes }: { initialWishes: Wish[] }) {
  const [wishes, setWishes] = useState<Wish[]>(initialWishes);
  const [status, setStatus] = useState<Wish["attendance"]>("Hadir");
  const actionButtonClass = "border-[#315f9f] bg-[#315f9f] text-white shadow-[0_10px_22px_rgba(49,95,159,0.2)]";
  const mutedButtonClass = "border-[#6f91bd]/45 bg-[#5d8195] text-white hover:border-[#315f9f] hover:bg-[#315f9f]";

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const message = String(form.get("message") || "").trim();

    if (!name) {
      return;
    }

    setWishes((current) => [
      {
        name,
        attendance: status,
        message: message || "Selamat menempuh hidup baru. Tuhan memberkati."
      },
      ...current
    ]);
    event.currentTarget.reset();
    setStatus("Hadir");
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
      <form onSubmit={submit} className="luxury-card rounded-lg p-5 sm:p-7">
        <div className="grid gap-5">
          <label className="grid gap-2 font-sans text-xs font-semibold uppercase tracking-[0.21em] text-clay lg:text-[6px]">
            Nama
            <input
              name="name"
              required
              placeholder="Nama Anda"
              className="rounded-md border border-[#6f91bd]/35 bg-white px-4 py-3 font-serif text-base normal-case leading-6 tracking-normal text-ink outline-none transition focus:border-[#315f9f] lg:text-[8px] lg:leading-3"
            />
          </label>
          <fieldset className="grid gap-3">
            <legend className="font-sans text-xs font-semibold uppercase tracking-[0.21em] text-clay lg:text-[6px]">Konfirmasi</legend>
            <div className="grid grid-cols-2 gap-3">
              {(["Hadir", "Berhalangan"] as const).map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => setStatus(item)}
                  className={`rounded-md border px-4 py-3 font-button text-[15px] font-bold transition lg:text-[8px] ${
                    status === item ? actionButtonClass : mutedButtonClass
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </fieldset>
          <label className="grid gap-2 font-sans text-xs font-semibold uppercase tracking-[0.21em] text-clay lg:text-[6px]">
            Ucapan
            <textarea
              name="message"
              rows={5}
              placeholder="Tulis doa dan ucapan"
              className="resize-none rounded-md border border-[#6f91bd]/35 bg-white px-4 py-3 font-serif text-base normal-case leading-6 tracking-normal text-ink outline-none transition focus:border-[#315f9f] lg:text-[8px] lg:leading-3"
            />
          </label>
          <button
            type="submit"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-[#6f91bd]/45 bg-[#5d8195] px-6 py-3 font-sans text-sm font-medium text-white shadow-[0_14px_30px_rgba(49,95,159,0.18)] transition hover:border-[#315f9f] hover:bg-[#315f9f] lg:text-[7px]"
          >
            <Send className="h-4 w-4" aria-hidden="true" />
            Kirim Ucapan
          </button>
        </div>
      </form>

      <div className="grid max-h-[34rem] gap-4 overflow-y-auto pr-1">
        {wishes.map((wish, index) => (
          <WishCard wish={wish} key={`${wish.name}-${index}`} />
        ))}
      </div>
    </div>
  );
}
