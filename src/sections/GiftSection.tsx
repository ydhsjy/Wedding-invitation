"use client";

import Image from "next/image";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/Container";
import { MotionReveal } from "@/components/MotionReveal";
import { SectionTitle } from "@/components/SectionTitle";
import { wedding } from "@/data/wedding";

export function GiftSection() {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  const copy = async (account: string) => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(account);
    }
    setCopiedAccount(account);
    window.setTimeout(() => setCopiedAccount(null), 1500);
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
            <div className="relative mx-auto h-12 w-36 sm:h-14 sm:w-44 lg:h-7 lg:w-24">
              <Image src={wedding.gift.logo} alt={wedding.gift.bank} fill sizes="(max-width: 768px) 176px, 96px" className="object-contain" />
            </div>
            <div className="mt-6 grid gap-6">
              {wedding.gift.accounts.map((account) => {
                const copied = copiedAccount === account.account;

                return (
                  <div key={account.account} className="border-t border-gold/25 pt-5 first:border-t-0 first:pt-0">
                    <p className="font-sans text-xs font-semibold uppercase tracking-[0.21em] text-clay sm:text-[15px] lg:text-[8px]">{account.bank}</p>
                    <p className="mt-3 font-serif text-[25px] font-semibold text-ink sm:text-[32px] lg:text-[16px]">{account.account}</p>
                    <p className="mt-2 font-gift text-base leading-[1.3] text-clay lg:text-[8px]">a.n. {account.name}</p>
                    <button
                      type="button"
                      onClick={() => copy(account.account)}
                      className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-gold/40 px-5 font-button text-[15px] font-bold text-ink transition hover:bg-gold hover:text-ivory lg:text-[8px]"
                    >
                      {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
                      {copied ? "Tersalin" : "Salin Nomor"}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </MotionReveal>
      </Container>
    </section>
  );
}
