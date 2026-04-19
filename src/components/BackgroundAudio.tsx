import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import bgAudio from "@/assets/bg-audio.mp3";

const BackgroundAudio = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [muted, setMuted] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.5;
    audio.loop = true;

    const tryPlay = async () => {
      try {
        await audio.play();
        setStarted(true);
      } catch {
        // Autoplay blocked — wait for first user interaction
        const onInteract = async () => {
          try {
            await audio.play();
            setStarted(true);
          } catch {}
          window.removeEventListener("click", onInteract);
          window.removeEventListener("touchstart", onInteract);
          window.removeEventListener("scroll", onInteract);
        };
        window.addEventListener("click", onInteract, { once: true });
        window.addEventListener("touchstart", onInteract, { once: true });
        window.addEventListener("scroll", onInteract, { once: true });
      }
    };
    tryPlay();
  }, []);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!started) {
      audio.play().then(() => setStarted(true)).catch(() => {});
    }
    audio.muted = !audio.muted;
    setMuted(audio.muted);
  };

  return (
    <>
      <audio ref={audioRef} src={bgAudio} preload="auto" loop />
      <button
        type="button"
        onClick={toggleMute}
        aria-label={muted ? "Unmute background audio" : "Mute background audio"}
        className="fixed bottom-24 right-4 z-40 h-11 w-11 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
        style={{ background: '#8B0000', color: '#FFD700', border: '1px solid #FFD700' }}
      >
        {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
      </button>
    </>
  );
};

export default BackgroundAudio;
