// Client-side Web Audio API Synthesizer for Eagle Pathway Studio
// Zero external audio files required - pure synthesized precision frequencies

class SoundEngine {
  private ctx: AudioContext | null = null;
  private isEnabled: boolean = false;
  private listeners: Set<(enabled: boolean) => void> = new Set();

  constructor() {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ep_sound_enabled');
      this.isEnabled = saved === 'true';
    }
  }

  private initContext() {
    if (typeof window === 'undefined') return;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  public getEnabled(): boolean {
    return this.isEnabled;
  }

  public toggle(): boolean {
    this.isEnabled = !this.isEnabled;
    if (typeof window !== 'undefined') {
      localStorage.setItem('ep_sound_enabled', String(this.isEnabled));
      if (this.isEnabled) {
        this.initContext();
        this.playSuccess();
      }
    }
    this.listeners.forEach((cb) => cb(this.isEnabled));
    return this.isEnabled;
  }

  public setEnabled(val: boolean) {
    this.isEnabled = val;
    if (typeof window !== 'undefined') {
      localStorage.setItem('ep_sound_enabled', String(this.isEnabled));
      if (this.isEnabled) {
        this.initContext();
        this.playSuccess();
      }
    }
    this.listeners.forEach((cb) => cb(this.isEnabled));
  }

  public subscribe(cb: (enabled: boolean) => void): () => void {
    this.listeners.add(cb);
    return () => this.listeners.delete(cb);
  }

  // Soft cybernetic mechanical click
  public playClick() {
    if (!this.isEnabled) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(320, this.ctx.currentTime + 0.04);
      
      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch {}
  }

  // Crisp navigation tab switch
  public playSwitch() {
    if (!this.isEnabled) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(640, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(480, this.ctx.currentTime + 0.05);
      
      gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch {}
  }

  // High-tech forensic laser sweep sound
  public playLaserScan() {
    if (!this.isEnabled) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(1400, now);
      osc.frequency.exponentialRampToValueAtTime(320, now + 0.18);
      
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.start(now);
      osc.stop(now + 0.18);
    } catch {}
  }

  // Terminal keystroke blip
  public playKeystroke() {
    if (!this.isEnabled) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'sine';
      const randomFreq = 1200 + Math.random() * 400;
      osc.frequency.setValueAtTime(randomFreq, this.ctx.currentTime);
      
      gain.gain.setValueAtTime(0.03, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.02);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.start();
      osc.stop(this.ctx.currentTime + 0.02);
    } catch {}
  }

  // Futuristic receipt verification telemetry sequence
  public playVerify() {
    if (!this.isEnabled) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const notes = [587.33, 739.99, 880, 1174.66];
      
      notes.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.04);
        
        gain.gain.setValueAtTime(0.05, now + idx * 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.04 + 0.09);
        
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc.start(now + idx * 0.04);
        osc.stop(now + idx * 0.04 + 0.09);
      });
    } catch {}
  }

  // Confirmation bell chime
  public playSuccess() {
    if (!this.isEnabled) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const freqs = [659.25, 880, 1046.50, 1318.51];
      
      freqs.forEach((freq, i) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.04);
        
        gain.gain.setValueAtTime(0.06, now + i * 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.04 + 0.28);
        
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc.start(now + i * 0.04);
        osc.stop(now + i * 0.04 + 0.28);
      });
    } catch {}
  }

  // Deep warp pulse
  public playPulse() {
    if (!this.isEnabled) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(120, now);
      osc.frequency.exponentialRampToValueAtTime(60, now + 0.22);
      
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.start(now);
      osc.stop(now + 0.22);
    } catch {}
  }

  // Warp accelerator swoosh
  public playWarp() {
    if (!this.isEnabled) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(200, now);
      osc.frequency.exponentialRampToValueAtTime(1600, now + 0.25);
      
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.start(now);
      osc.stop(now + 0.25);
    } catch {}
  }
}

export const soundEngine = new SoundEngine();
