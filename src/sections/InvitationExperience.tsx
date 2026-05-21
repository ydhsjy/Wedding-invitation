"use client";

import { AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import { DesktopScene } from "@/components/DesktopScene";
import { MobileNav } from "@/components/MobileNav";
import { MusicButton } from "@/components/MusicButton";
import { wedding } from "@/data/wedding";
import { useLockBody } from "@/hooks/useLockBody";
import { formatGuestName } from "@/lib/utils";
import { CountdownSection } from "@/sections/CountdownSection";
import { CoupleSection } from "@/sections/CoupleSection";
import { EventSection } from "@/sections/EventSection";
import { FooterSection } from "@/sections/FooterSection";
import { GallerySection } from "@/sections/GallerySection";
import { GiftSection } from "@/sections/GiftSection";
import { HeroSection } from "@/sections/HeroSection";
import { MarriageQuoteSection } from "@/sections/MarriageQuoteSection";
import { OpeningSection } from "@/sections/OpeningSection";
import { QuoteSection } from "@/sections/QuoteSection";
import { RSVPSection } from "@/sections/RSVPSection";

export function InvitationExperience({ guestName }: { guestName?: string }) {
  const [opened, setOpened] = useState(false);
  const [urlGuestName, setUrlGuestName] = useState<string | undefined>(guestName);
  const recipient = useMemo(() => formatGuestName(urlGuestName), [urlGuestName]);
  useLockBody(!opened);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUrlGuestName(params.get("to") || guestName);
  }, [guestName]);

  return (
    <>
      <AnimatePresence>
        <LoadingScreen />
      </AnimatePresence>
      <OpeningSection guestName={recipient} isOpen={opened} onOpen={() => setOpened(true)} />
      <DesktopScene />
      <main className="relative ml-auto min-h-svh w-full overflow-hidden bg-paper shadow-[0_0_80px_rgba(0,0,0,0.32)] lg:w-[min(42vw,640px)]">
        <HeroSection />
        <QuoteSection />
        <CoupleSection />
        <EventSection />
        <CountdownSection />
        <MarriageQuoteSection />
        <GallerySection />
        <RSVPSection />
        <GiftSection />
        <FooterSection />
      </main>
      <MusicButton src={wedding.audio} shouldPlay={opened} />
      <MobileNav />
      <div className="grain" aria-hidden="true" />
    </>
  );
}
