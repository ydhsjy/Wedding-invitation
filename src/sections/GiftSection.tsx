"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/Container";
import { MotionReveal } from "@/components/MotionReveal";
import { SectionTitle } from "@/components/SectionTitle";
import { wedding } from "@/data/wedding";

export function GiftSection() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(wedding.gift.account);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section id="gift" className="section-band bg-paper">
      <Container>
        <MotionReveal>
          <SectionTitle
            eyebrow="Wedding Gift"
            title="Digital Gift"
            description="Doa restu Bapak/Ibu/Saudara/i adalah hadiah terindah bagi kami. Bagi yang berkenan, tersedia amplop digital berikut."
          />
        </MotionReveal>
        <MotionReveal className="mx-auto mt-10 max-w-md">
          <div className="luxury-card rounded-lg p-7 text-center">
            <p className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-clay">{wedding.gift.bank}</p>
            <p className="mt-4 font-serif text-4xl font-semibold text-ink">{wedding.gift.account}</p>
            <p className="mt-2 text-lg text-clay">a.n. {wedding.gift.name}</p>
            <button
              type="button"
              onClick={copy}
              className="mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-gold/40 px-5 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-ink transition hover:bg-gold hover:text-ivory"
            >
              {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
              {copied ? "Tersalin" : "Salin Nomor"}
            </button>
          </div>
        </MotionReveal>
      </Container>
    </section>
  );
}
