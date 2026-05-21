"use client";

import { AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
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
import { OpeningSection } from "@/sections/OpeningSection";
import { QuoteSection } from "@/sections/QuoteSection";
import { RSVPSection } from "@/sections/RSVPSection";
import { StorySection } from "@/sections/StorySection";

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
      <main>
        <HeroSection />
        <QuoteSection />
        <CoupleSection />
        <EventSection />
        <CountdownSection />
        <GallerySection />
        <StorySection />
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
