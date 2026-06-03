"use client";

import Image from "next/image";
import { Check, Copy, Mail } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/Container";
import { MotionReveal } from "@/components/MotionReveal";
import { SectionTitle } from "@/components/SectionTitle";
import { wedding } from "@/data/wedding";

export function GiftSection() {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

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
            title="Amplop Digital"
            description="Doa restu Bapak/Ibu/Saudara/i adalah hadiah terindah bagi kami. Bagi yang berkenan, tersedia amplop digital berikut."
          />
        </MotionReveal>
        <MotionReveal className="mx-auto mt-10 max-w-md">
          <div className="text-center">
            <button
              type="button"
              onClick={() => setIsOpen((current) => !current)}
              aria-expanded={isOpen}
              className="group mx-auto grid h-28 w-36 place-items-center rounded-lg border border-gold/35 bg-ivory/80 text-ink shadow-premium backdrop-blur transition hover:-translate-y-1 hover:border-gold hover:bg-gold hover:text-ivory sm:h-32 sm:w-44 lg:h-20 lg:w-28"
            >
              <span className="grid h-16 w-20 place-items-center rounded-md border border-current/30 bg-current/5 transition group-hover:bg-ivory/15 sm:h-20 sm:w-24 lg:h-12 lg:w-16">
                <Mail className="h-9 w-9 lg:h-6 lg:w-6" aria-hidden="true" />
              </span>
              <span className="sr-only">{isOpen ? "Tutup amplop digital" : "Buka amplop digital"}</span>
            </button>
            {isOpen ? (
              <div className="mt-8 grid gap-5 text-left">
                {wedding.gift.accounts.map((account) => {
                  const copied = copiedAccount === account.account;

                  return (
                    <div
                      key={account.account}
                      className="relative min-h-[12rem] overflow-hidden rounded-lg border border-gold/30 bg-[linear-gradient(135deg,#2b2b2b_0%,#536c5f_54%,#c6a969_145%)] p-5 text-ivory shadow-premium sm:min-h-[13.5rem] sm:p-6 lg:min-h-[8rem] lg:p-4"
                    >
                      <div className="pointer-events-none absolute -right-16 -top-14 h-44 w-44 rounded-full border border-ivory/15 bg-ivory/8 lg:h-28 lg:w-28" />
                      <div className="pointer-events-none absolute -bottom-24 left-8 h-52 w-52 rounded-full bg-gold/10 blur-2xl lg:h-28 lg:w-28" />
                      <div className="relative z-10 flex items-start justify-between gap-4">
                        <div>
                          <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.21em] text-ivory/68 lg:text-[6px]">{account.bank}</p>
                          <p className="mt-7 font-serif text-[22px] font-semibold tracking-[0.08em] text-ivory sm:text-[27px] lg:mt-4 lg:text-[14px]">{account.account}</p>
                        </div>
                        <div className="relative mt-1 h-9 w-24 shrink-0 rounded-sm bg-ivory/92 p-1.5 sm:h-11 sm:w-28 lg:h-6 lg:w-16 lg:p-1">
                          <Image src={wedding.gift.logo} alt={account.bank} fill sizes="112px" className="object-contain p-1" />
                        </div>
                      </div>
                      <div className="relative z-10 mt-7 flex items-end justify-between gap-4 lg:mt-4">
                        <div>
                          <p className="font-gift text-base leading-[1.2] text-ivory sm:text-[19px] lg:text-[10px]">{account.name}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => copy(account.account)}
                          className="inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-full border border-ivory/30 px-4 font-button text-[13px] font-bold text-ivory transition hover:bg-ivory hover:text-ink lg:min-h-7 lg:px-3 lg:text-[7px]"
                        >
                          {copied ? <Check className="h-4 w-4 lg:h-3 lg:w-3" aria-hidden="true" /> : <Copy className="h-4 w-4 lg:h-3 lg:w-3" aria-hidden="true" />}
                          {copied ? "Tersalin" : "Salin"}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        </MotionReveal>
      </Container>
    </section>
  );
}
