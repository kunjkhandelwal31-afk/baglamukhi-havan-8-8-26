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
      audio.autoplay = true;
      audioBus.audio = audio;
    }

    // Try unmuted autoplay first
    audio.muted = false;

    const tryPlay = async () => {
      if (!audioBus.audio) return false;
      try {
        await audioBus.audio.play();
        audioBus.audio.muted = false;
        audioBus.setMuted(false);
        return true;
      } catch {
        return false;
      }
    };

    const startOnInteraction = async () => {
      if (!audioBus.audio) return;
      audioBus.audio.muted = false;
      const ok = await tryPlay();
      if (ok) removeInteractionListeners();
    };

    const removeInteractionListeners = () => {
      window.removeEventListener("click", startOnInteraction);
      window.removeEventListener("touchstart", startOnInteraction);
      window.removeEventListener("keydown", startOnInteraction);
      window.removeEventListener("scroll", startOnInteraction);
    };

    (async () => {
      const ok = await tryPlay();
      if (!ok) {
        // Browser blocked unmuted autoplay; wait for first interaction
        audioBus.setMuted(true);
        window.addEventListener("click", startOnInteraction);
        window.addEventListener("touchstart", startOnInteraction);
        window.addEventListener("keydown", startOnInteraction);
        window.addEventListener("scroll", startOnInteraction, { passive: true });
      }
    })();

    // Sync UI state with actual playback
    const handlePlay = () => {
      if (audioBus.audio) audioBus.setMuted(audioBus.audio.muted || audioBus.audio.paused);
    };
    const handlePause = () => audioBus.setMuted(true);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("volumechange", handlePlay);

    return () => {
      removeInteractionListeners();
      audio?.removeEventListener("play", handlePlay);
      audio?.removeEventListener("pause", handlePause);
      audio?.removeEventListener("volumechange", handlePlay);
    };
  }, []);

  return null;
};

export default BackgroundAudio;
