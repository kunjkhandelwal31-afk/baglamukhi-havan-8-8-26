// Singleton background audio bus shared between BackgroundAudio (player)
// and the header mute/unmute button.

type Listener = (muted: boolean) => void;

class AudioBus {
  audio: HTMLAudioElement | null = null;
  private listeners = new Set<Listener>();
  private _muted = true;

  get muted() {
    return this._muted;
  }

  setMuted(value: boolean) {
    this._muted = value;
    this.listeners.forEach((l) => l(value));
  }

  subscribe(l: Listener) {
    this.listeners.add(l);
    return () => this.listeners.delete(l);
  }

  toggle() {
    if (!this.audio) return;
    const next = !this.audio.muted;
    this.audio.muted = next;
    if (!next) {
      this.audio.play().catch(() => {});
    }
    this.setMuted(next);
  }
}

export const audioBus = new AudioBus();
