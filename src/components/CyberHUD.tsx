'use client';

import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Sparkles, Rocket, Zap, X } from 'lucide-react';
import { soundEngine } from '@/lib/sound';

export default function CyberHUD() {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [latency, setLatency] = useState(14);
  const [matrixActive, setMatrixActive] = useState(false);
  const [hyperdriveActive, setHyperdriveActive] = useState(false);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const cursorDotRef = useRef<HTMLDivElement | null>(null);
  const matrixCanvasRef = useRef<HTMLCanvasElement | null>(null);

  const toggleHyperdrive = (state?: boolean) => {
    const nextState = state !== undefined ? state : !hyperdriveActive;
    setHyperdriveActive(nextState);
    if (nextState) {
      soundEngine.playWarp();
    } else {
      soundEngine.playPulse();
    }
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('toggle-hyperdrive', { detail: { state: nextState } }));
    }
  };

  useEffect(() => {
    setSoundEnabled(soundEngine.getEnabled());
    const unsub = soundEngine.subscribe(setSoundEnabled);

    // Live clock update
    const updateTime = () => {
      const d = new Date();
      setCurrentTime(
        d.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }) +
          ' UTC'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    // Latency fluctuation
    const latencyInt = setInterval(() => {
      setLatency(12 + Math.floor(Math.random() * 5));
    }, 4000);

    // Cursor tracking
    let mouseX = -100;
    let mouseY = -100;
    let trailX = -100;
    let trailY = -100;
    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const renderCursor = () => {
      trailX += (mouseX - trailX) * 0.18;
      trailY += (mouseY - trailY) * 0.18;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${trailX}px, ${trailY}px, 0)`;
      }
      animId = requestAnimationFrame(renderCursor);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animId = requestAnimationFrame(renderCursor);

    const handleMatrixEvent = () => {
      setMatrixActive((prev) => !prev);
    };
    window.addEventListener('toggle-matrix', handleMatrixEvent);

    const handleHyperdriveEvent = (e: Event) => {
      const custom = e as CustomEvent<{ state?: boolean }>;
      if (custom.detail?.state !== undefined) {
        setHyperdriveActive(custom.detail.state);
      } else {
        setHyperdriveActive((prev) => !prev);
      }
    };
    window.addEventListener('toggle-hyperdrive', handleHyperdriveEvent);

    return () => {
      unsub();
      clearInterval(interval);
      clearInterval(latencyInt);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('toggle-matrix', handleMatrixEvent);
      window.removeEventListener('toggle-hyperdrive', handleHyperdriveEvent);
      cancelAnimationFrame(animId);
    };
  }, []);

  // Matrix Rain Canvas Effect
  useEffect(() => {
    if (!matrixActive) return;
    const canvas = matrixCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンEAGLEPATHWAY2099';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    const drawMatrix = () => {
      ctx.fillStyle = 'rgba(3, 7, 18, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ff9d';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      animId = requestAnimationFrame(drawMatrix);
    };

    drawMatrix();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [matrixActive]);

  return (
    <>
      {/* Magnetic Glowing Cursor (Desktop Only) */}
      <div className="hidden lg:block pointer-events-none fixed inset-0 z-50">
        <div
          ref={cursorDotRef}
          className={`w-2 h-2 rounded-full fixed -top-1 -left-1 transition-all ${
            hyperdriveActive
              ? 'bg-amber-400 shadow-[0_0_15px_#f59e0b]'
              : 'bg-sky-500 dark:bg-cyan-400 shadow-[0_0_10px_#00f0ff]'
          }`}
        />
        <div
          ref={cursorRef}
          className={`w-8 h-8 rounded-full border fixed -top-4 -left-4 transition-all duration-75 ${
            hyperdriveActive
              ? 'border-amber-400/60 shadow-[0_0_25px_rgba(245,158,11,0.5)] scale-125'
              : 'border-sky-500/40 dark:border-cyan-400/40 shadow-[0_0_20px_rgba(0,240,255,0.2)]'
          }`}
        />
      </div>

      {/* Falcon Hyperdrive Active Top Banner */}
      {hyperdriveActive && (
        <div className="fixed top-16 left-0 right-0 z-40 px-4 py-2 bg-gradient-to-r from-amber-600 via-rose-600 to-amber-600 text-black font-mono text-xs font-bold flex items-center justify-between shadow-[0_4px_25px_rgba(245,158,11,0.5)] animate-pulse">
          <div className="flex items-center gap-2 max-w-7xl mx-auto w-full justify-between px-2">
            <span className="flex items-center gap-2 text-white">
              <Zap className="w-4 h-4 fill-white" />
              <span>[ FALCON HYPERDRIVE ACTIVE // RELATIVISTIC COMPUTE OVERCLOCK 100% // WARP ENGAGED ]</span>
            </span>

            <button
              onClick={() => toggleHyperdrive(false)}
              className="px-3 py-1 rounded bg-black text-amber-300 hover:bg-neutral-900 border border-amber-400/50 text-[10px] font-mono font-bold uppercase transition-colors cursor-pointer"
            >
              THROTTLE DOWN
            </button>
          </div>
        </div>
      )}

      {/* Fullscreen Matrix Rain Overlay (Toggleable) */}
      {matrixActive && (
        <div className="fixed inset-0 z-40 bg-black/85 backdrop-blur-sm flex flex-col justify-between p-6">
          <div className="flex items-center justify-between text-xs font-mono text-emerald-400 border-b border-emerald-500/30 pb-3">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              MATRIX CORE OVERRIDE // EAGLE NEURAL STREAM
            </span>
            <button
              onClick={() => {
                soundEngine.playClick();
                setMatrixActive(false);
              }}
              className="px-3 py-1 rounded border border-emerald-500/50 hover:bg-emerald-500/20 text-emerald-300 transition-colors cursor-pointer"
            >
              EXIT [ESC]
            </button>
          </div>
          <canvas ref={matrixCanvasRef} className="absolute inset-0 z-0 opacity-80" />
        </div>
      )}

      {/* Floating Cyber Telemetry Bar (Bottom Left) */}
      <div className="fixed bottom-6 left-6 z-30 hidden sm:flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-neutral-950/80 border border-slate-200 dark:border-neutral-800/90 backdrop-blur-md shadow-xl text-[11px] font-mono text-slate-600 dark:text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-slate-900 dark:text-white font-medium">SYS.ONLINE</span>
        </div>

        <span className="text-slate-300 dark:text-neutral-700">|</span>

        <span className="text-slate-700 dark:text-neutral-300">ADDIS-CORE: {latency}ms</span>

        <span className="text-slate-300 dark:text-neutral-700">|</span>

        {/* Hyperdrive Toggle Button */}
        <button
          onClick={() => toggleHyperdrive()}
          title="Ignite Falcon Hyperdrive Velocity"
          className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
            hyperdriveActive
              ? 'text-amber-500 font-bold animate-pulse'
              : 'text-slate-600 hover:text-amber-500 dark:text-neutral-400 dark:hover:text-amber-400'
          }`}
        >
          <Rocket className="w-3.5 h-3.5 text-amber-500" />
          <span>{hyperdriveActive ? 'WARP 100%' : 'HYPERDRIVE'}</span>
        </button>

        <span className="text-slate-300 dark:text-neutral-700">|</span>

        <span className="text-sky-600 dark:text-cyan-400">{currentTime || '00:00:00 UTC'}</span>

        <span className="text-slate-300 dark:text-neutral-700">|</span>

        {/* Matrix Rain Toggle */}
        <button
          onClick={() => {
            soundEngine.playWarp();
            setMatrixActive(!matrixActive);
          }}
          title="Toggle Matrix Stream"
          className="text-slate-600 hover:text-emerald-600 dark:text-neutral-400 dark:hover:text-emerald-400 transition-colors flex items-center gap-1 cursor-pointer"
        >
          <Sparkles className="w-3 h-3 text-emerald-500" />
          <span className="hidden md:inline">MATRIX</span>
        </button>

        <span className="text-slate-300 dark:text-neutral-700">|</span>

        {/* Audio Toggle with Animated Equalizer Bars */}
        <button
          onClick={() => {
            soundEngine.toggle();
          }}
          title={soundEnabled ? 'Disable Synthesized Audio' : 'Enable Synthesized Audio'}
          className="flex items-center gap-1.5 text-slate-600 hover:text-sky-600 dark:text-neutral-400 dark:hover:text-cyan-400 transition-colors cursor-pointer"
        >
          {soundEnabled ? (
            <>
              <Volume2 className="w-3.5 h-3.5 text-sky-600 dark:text-cyan-400" />
              <div className="flex items-end gap-0.5 h-3">
                <span className="w-0.5 h-full bg-sky-600 dark:bg-cyan-400 animate-pulse" />
                <span className="w-0.5 h-2 bg-sky-600 dark:bg-cyan-400 animate-pulse" style={{ animationDelay: '150ms' }} />
                <span className="w-0.5 h-2.5 bg-sky-600 dark:bg-cyan-400 animate-pulse" style={{ animationDelay: '300ms' }} />
              </div>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5 text-slate-400 dark:text-neutral-500" />
              <span className="text-[10px] text-slate-400 dark:text-neutral-500">MUTE</span>
            </>
          )}
        </button>
      </div>
    </>
  );
}
