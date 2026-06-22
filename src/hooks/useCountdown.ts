"use client";

import { useEffect, useMemo, useState } from "react";

export function useCountdown(target: string) {
  const targetTime = useMemo(() => new Date(target).getTime(), [target]);
  const [now, setNow] = useState<number | null>(() => null);

  useEffect(() => {
    const initialId = window.setTimeout(() => setNow(Date.now()), 0);
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => {
      window.clearTimeout(initialId);
      window.clearInterval(id);
    };
  }, []);

  const distance = Math.max(0, targetTime - (now ?? targetTime));

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / (1000 * 60)) % 60),
    seconds: Math.floor((distance / 1000) % 60)
  };
}
