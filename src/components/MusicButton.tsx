"use client";

import { Pause, Play, Volume2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type MusicButtonProps = {
  src: string;
  shouldPlay: boolean;
};

export function MusicButton({ src, shouldPlay }: MusicButtonProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !shouldPlay) {
      return;
    }

    audio
      .play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));
  }, [shouldPlay]);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    if (audio.paused) {
      await audio.play();
      setPlaying(true);
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={src} preload="none" loop aria-hidden="true" />
      <button
        type="button"
        onClick={toggleMusic}
        className={cn(
          "fixed bottom-24 right-5 z-40 grid h-12 w-12 place-items-center rounded-full border border-gold/40 bg-ivory text-ink shadow-premium transition sm:bottom-6",
          playing && "animate-[spin_5s_linear_infinite]"
        )}
        aria-label={playing ? "Jeda musik" : "Putar musik"}
      >
        <Volume2 className="absolute h-4 w-4 opacity-20" aria-hidden="true" />
        {playing ? <Pause className="h-4 w-4" aria-hidden="true" /> : <Play className="h-4 w-4" aria-hidden="true" />}
      </button>
    </>
  );
}
