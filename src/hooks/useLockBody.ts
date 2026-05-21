"use client";

import { useEffect } from "react";

export function useLockBody(locked: boolean) {
  useEffect(() => {
    document.body.classList.toggle("invitation-locked", locked);
    return () => document.body.classList.remove("invitation-locked");
  }, [locked]);
}
