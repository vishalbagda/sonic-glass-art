class SoundManager {
  private clickSound: HTMLAudioElement | null = null;
  private scrollSound: HTMLAudioElement | null = null;
  private enabled: boolean = true;

  constructor() {
    // Create click sound (short beep)
    this.clickSound = this.createSound(0.05, 800, 0.1);
    // Create scroll sound (soft whoosh)
    this.scrollSound = this.createSound(0.03, 400, 0.05);
  }

  private createSound(duration: number, frequency: number, volume: number): HTMLAudioElement | null {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.value = frequency;
      oscillator.type = 'sine';

      gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);

      const audio = new Audio();
      
      // Store the context for later use
      (audio as any).audioContext = audioContext;
      (audio as any).oscillator = oscillator;
      (audio as any).gainNode = gainNode;
      (audio as any).frequency = frequency;
      (audio as any).duration = duration;
      (audio as any).volume = volume;

      return audio;
    } catch (e) {
      console.warn('Web Audio API not supported', e);
      return null;
    }
  }

  private playTone(frequency: number, duration: number, volume: number) {
    if (!this.enabled) return;
    
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.value = frequency;
      oscillator.type = 'sine';

      gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + duration);
    } catch (e) {
      console.warn('Could not play sound', e);
    }
  }

  playClick() {
    this.playTone(800, 0.1, 0.1);
  }

  playScroll() {
    this.playTone(400, 0.05, 0.03);
  }

  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  isEnabled() {
    return this.enabled;
  }
}

export const soundManager = new SoundManager();
