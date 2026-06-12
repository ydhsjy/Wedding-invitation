"use client";

import Image from "next/image";
import { Check, Copy, Gift, Mail } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/Container";
import { MotionReveal } from "@/components/MotionReveal";
import { SectionTitle } from "@/components/SectionTitle";
import { wedding } from "@/data/wedding";

export function GiftSection() {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);
  const [activePanel, setActivePanel] = useState<"digital" | "present" | null>(null);

  const copy = async (account: string) => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(account);
    }
    setCopiedAccount(account);
    window.setTimeout(() => setCopiedAccount(null), 1500);
  };

  return (
    <section id="gift" className="section-band bg-white">
      <Container>
        <MotionReveal>
          <SectionTitle
            eyebrow="Wedding Gift"
            title="Wedding Gift"
            description="Doa restu Bapak/Ibu/Saudara/i adalah hadiah terindah bagi kami. Bagi yang berkenan memberikan tanda kasih, tersedia pilihan berikut."
          />
        </MotionReveal>
        <MotionReveal className="mx-auto mt-10 max-w-md">
          <div className="text-center">
            <div className="grid grid-cols-2 gap-5">
              <div>
                <button
                  type="button"
                  onClick={() => setActivePanel((current) => (current === "digital" ? null : "digital"))}
                  aria-expanded={activePanel === "digital"}
                  className="group mx-auto grid h-24 w-24 place-items-center rounded-lg border border-[#315f9f] bg-[#315f9f] text-white shadow-premium backdrop-blur transition hover:-translate-y-1 hover:border-[#244a7f] hover:bg-[#244a7f] sm:h-28 sm:w-28 lg:h-16 lg:w-16"
                >
                  <span className="grid h-14 w-16 place-items-center rounded-md border border-white/35 bg-white/12 transition group-hover:bg-white/20 sm:h-16 sm:w-20 lg:h-10 lg:w-12">
                    <Mail className="h-8 w-8 text-white lg:h-5 lg:w-5" aria-hidden="true" />
                  </span>
                  <span className="sr-only">{activePanel === "digital" ? "Tutup amplop digital" : "Buka amplop digital"}</span>
                </button>
                <p className="mt-3 font-button text-[12px] font-bold uppercase tracking-[0.16em] text-ink sm:text-[13px] lg:text-[7px]">Amplop Digital</p>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => setActivePanel((current) => (current === "present" ? null : "present"))}
                  aria-expanded={activePanel === "present"}
                  className="group mx-auto grid h-24 w-24 place-items-center rounded-lg border border-[#315f9f] bg-[#315f9f] text-white shadow-premium backdrop-blur transition hover:-translate-y-1 hover:border-[#244a7f] hover:bg-[#244a7f] sm:h-28 sm:w-28 lg:h-16 lg:w-16"
                >
                  <span className="grid h-14 w-16 place-items-center rounded-md border border-white/35 bg-white/12 transition group-hover:bg-white/20 sm:h-16 sm:w-20 lg:h-10 lg:w-12">
                    <Gift className="h-8 w-8 text-white lg:h-5 lg:w-5" aria-hidden="true" />
                  </span>
                  <span className="sr-only">{activePanel === "present" ? "Tutup alamat hadiah" : "Buka alamat hadiah"}</span>
                </button>
                <p className="mt-3 font-button text-[12px] font-bold uppercase tracking-[0.16em] text-ink sm:text-[13px] lg:text-[7px]">Hadiah</p>
              </div>
            </div>
            {activePanel === "digital" ? (
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
            {activePanel === "present" ? (
              <div className="mt-8 rounded-lg border border-gold/30 bg-ivory/82 p-6 text-left shadow-premium backdrop-blur lg:p-4">
                <p className="font-body text-base leading-7 text-ink/82 sm:text-[17px] lg:text-[10px] lg:leading-5">
                  Apabila Bapak/Ibu berkenan memberikan hadiah, dapat dikirim pada alamat berikut :
                </p>
                <p className="mt-5 font-serif text-xl font-semibold leading-8 text-ink sm:text-2xl lg:mt-3 lg:text-[13px] lg:leading-5">{wedding.gift.address}</p>
              </div>
            ) : null}
          </div>
        </MotionReveal>
      </Container>
    </section>
  );
}
