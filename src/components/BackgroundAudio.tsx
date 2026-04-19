import { useEffect } from "react";
import bgAudio from "@/assets/bg-audio.mp3";
import { audioBus } from "@/lib/audioBus";

const BackgroundAudio = () => {
  useEffect(() => {
    let audio = audioBus.audio;
    if (!audio) {
      audio = new Audio(bgAudio);
      audio.loop = true;
      audio.volume = 0.5;
      audio.preload = "auto";
      audioBus.audio = audio;
    }

    // Start muted to satisfy autoplay policies
    audio.muted = true;
    audioBus.setMuted(true);

    const playPromise = audio.play().catch(() => {});

    // After first interaction, unmute (default UNMUTED state per spec)
    const enableSound = () => {
      if (!audioBus.audio) return;
      audioBus.audio.muted = false;
      audioBus.setMuted(false);
      audioBus.audio.play().catch(() => {});
      window.removeEventListener("click", enableSound);
      window.removeEventListener("touchstart", enableSound);
      window.removeEventListener("keydown", enableSound);
      window.removeEventListener("scroll", enableSound);
    };
    window.addEventListener("click", enableSound, { once: true });
    window.addEventListener("touchstart", enableSound, { once: true });
    window.addEventListener("keydown", enableSound, { once: true });
    window.addEventListener("scroll", enableSound, { once: true, passive: true });

    return () => {
      window.removeEventListener("click", enableSound);
      window.removeEventListener("touchstart", enableSound);
      window.removeEventListener("keydown", enableSound);
      window.removeEventListener("scroll", enableSound);
      void playPromise;
    };
  }, []);

  return null;
};

export default BackgroundAudio;
