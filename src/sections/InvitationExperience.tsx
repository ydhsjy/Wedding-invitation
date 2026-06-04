"use client";

import { AnimatePresence } from "framer-motion";
import { useMemo, useRef, useState, useSyncExternalStore } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import { DesktopScene } from "@/components/DesktopScene";
import { MobileNav } from "@/components/MobileNav";
import { MusicButton, type MusicButtonHandle } from "@/components/MusicButton";
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

function subscribeToGuestName() {
  return () => {};
}

function getUrlGuestName() {
  if (typeof window === "undefined") {
    return undefined;
  }

  return new URLSearchParams(window.location.search).get("to") || undefined;
}

export function InvitationExperience({ guestName }: { guestName?: string }) {
  const [opened, setOpened] = useState(false);
  const musicRef = useRef<MusicButtonHandle>(null);
  const urlGuestName = useSyncExternalStore(subscribeToGuestName, getUrlGuestName, () => undefined);
  const recipient = useMemo(() => formatGuestName(urlGuestName || guestName), [guestName, urlGuestName]);
  useLockBody(!opened);

  const openInvitation = () => {
    void musicRef.current?.play();
    setOpened(true);
  };

  return (
    <>
      <AnimatePresence>
        <LoadingScreen />
      </AnimatePresence>
      <OpeningSection guestName={recipient} isOpen={opened} onOpen={openInvitation} />
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
      <MusicButton ref={musicRef} src={wedding.audio} shouldPlay={opened} />
      <MobileNav />
      <div className="grain" aria-hidden="true" />
    </>
  );
}
