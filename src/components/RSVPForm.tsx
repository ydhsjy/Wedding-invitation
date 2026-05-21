"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";
import type { Wish } from "@/data/wedding";
import { WishCard } from "@/components/WishCard";

export function RSVPForm({ initialWishes }: { initialWishes: Wish[] }) {
  const [wishes, setWishes] = useState<Wish[]>(initialWishes);
  const [status, setStatus] = useState<Wish["attendance"]>("Hadir");

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
          <label className="grid gap-2 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-clay">
            Nama
            <input
              name="name"
              required
              placeholder="Nama Anda"
              className="rounded-md border border-gold/25 bg-ivory px-4 py-3 font-serif text-lg normal-case tracking-normal text-ink outline-none transition focus:border-gold"
            />
          </label>
          <fieldset className="grid gap-3">
            <legend className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-clay">Konfirmasi</legend>
            <div className="grid grid-cols-2 gap-3">
              {(["Hadir", "Berhalangan"] as const).map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => setStatus(item)}
                  className={`rounded-md border px-4 py-3 font-sans text-sm font-semibold transition ${
                    status === item ? "border-gold bg-gold text-ivory" : "border-gold/25 bg-ivory text-ink"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </fieldset>
          <label className="grid gap-2 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-clay">
            Ucapan
            <textarea
              name="message"
              rows={5}
              placeholder="Tulis doa dan ucapan"
              className="resize-none rounded-md border border-gold/25 bg-ivory px-4 py-3 font-serif text-lg normal-case tracking-normal text-ink outline-none transition focus:border-gold"
            />
          </label>
          <button
            type="submit"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-ink px-6 py-3 font-sans text-sm font-semibold uppercase tracking-[0.16em] text-ivory transition hover:bg-clay"
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
