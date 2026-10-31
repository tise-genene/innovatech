'use client';

import { useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import { Activity, Zap, Shield, Globe, Cpu, Server, Play, RefreshCw } from 'lucide-react';
import { soundEngine } from '@/lib/sound';

interface RegionNode {
  id: string;
  name: string;
  city: string;
  x: number; // percentage
  y: number; // percentage
  latency: number;
  status: 'optimal' | 'scaling' | 'surge';
}

const REGION_NODES: RegionNode[] = [
  { id: 'et', name: 'Addis Ababa (Primary HQ)', city: 'ET-ADDIS-01', x: 57, y: 52, latency: 11, status: 'optimal' },
  { id: 'eu', name: 'Frankfurt Hub', city: 'EU-CENTRAL-1', x: 50, y: 32, latency: 42, status: 'optimal' },
  { id: 'sg', name: 'Singapore Gateway', city: 'AP-SOUTHEAST-1', x: 76, y: 56, latency: 68, status: 'optimal' },
  { id: 'us', name: 'Silicon Valley Cluster', city: 'US-WEST-2', x: 22, y: 36, latency: 114, status: 'optimal' },
  { id: 'uk', name: 'London Edge', city: 'EU-WEST-2', x: 46, y: 30, latency: 38, status: 'optimal' },
];

export default function LoadCrucible() {
  const [loadMultiplier, setLoadMultiplier] = useState<number>(50);
  const [activeReqs, setActiveReqs] = useState<number>(500000);
  const [isSurging, setIsSurging] = useState<boolean>(false);
  const [autoScaleInstances, setAutoScaleInstances] = useState<number>(24);
  const { resolvedTheme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    setLoadMultiplier(val);
    const reqs = Math.floor(val * 100000);
    setActiveReqs(reqs);
    setAutoScaleInstances(Math.max(4, Math.floor(val * 0.96)));
    soundEngine.playKeystroke();
  };

  const triggerSurge = () => {
    soundEngine.playWarp();
    setIsSurging(true);
    setLoadMultiplier(100);
    setActiveReqs(10000000);
    setAutoScaleInstances(128);

    setTimeout(() => {
      setIsSurging(false);
      soundEngine.playSuccess();
    }, 2500);
  };

  // Packet animation canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 400);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    interface Packet {
      fromIndex: number;
      toIndex: number;
      progress: number;
      speed: number;
      color: string;
    }

    const packets: Packet[] = [];
    const isDark = resolvedTheme !== 'light';
    const colors = isDark 
      ? ['#00f0ff', '#10b981', '#a855f7', '#38bdf8']
      : ['#0284c7', '#059669', '#7c3aed', '#0ea5e9'];

    const spawnPacket = () => {
      const from = 0; // Addis HQ
      const to = Math.floor(Math.random() * (REGION_NODES.length - 1)) + 1;
      packets.push({
        fromIndex: from,
        toIndex: to,
        progress: 0,
        speed: 0.015 + (loadMultiplier / 100) * 0.035,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Coordinates in canvas pixels
      const coords = REGION_NODES.map((n) => ({
        x: (n.x / 100) * width,
        y: (n.y / 100) * height,
      }));

      // Connection lines
      ctx.lineWidth = 1;
      for (let i = 0; i < coords.length; i++) {
        for (let j = i + 1; j < coords.length; j++) {
          ctx.beginPath();
          ctx.moveTo(coords[i].x, coords[i].y);
          ctx.lineTo(coords[j].x, coords[j].y);
          ctx.strokeStyle = isDark ? 'rgba(0, 240, 255, 0.08)' : 'rgba(14, 165, 233, 0.12)';
          ctx.stroke();
        }
      }

      // Spawn packets proportional to load
      if (Math.random() < 0.25 + (loadMultiplier / 100) * 0.5) {
        spawnPacket();
      }

      // Draw and update packets
      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i];
        p.progress += p.speed;

        if (p.progress >= 1) {
          packets.splice(i, 1);
          continue;
        }

        const start = coords[p.fromIndex];
        const end = coords[p.toIndex];
        const currentX = start.x + (end.x - start.x) * p.progress;
        const currentY = start.y + (end.y - start.y) * p.progress;

        ctx.beginPath();
        ctx.arc(currentX, currentY, 3, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        if (isDark) {
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 8;
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, [loadMultiplier, resolvedTheme]);

  return (
    <section id="crucible" className="py-24 lg:py-32 relative border-b border-slate-200 dark:border-neutral-800 bg-slate-50/70 dark:bg-[#02050e] overflow-hidden transition-colors">
      
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-emerald-500/10 dark:from-cyan-600/10 dark:via-indigo-600/10 dark:to-emerald-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-slate-200 dark:border-neutral-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-sky-500/10 dark:bg-cyan-500/10 border border-sky-500/20 dark:border-cyan-500/25 text-sky-700 dark:text-cyan-400 font-mono text-[11px] uppercase tracking-wider mb-3">
              <Zap className="w-3.5 h-3.5 animate-pulse text-sky-600 dark:text-cyan-400" />
              <span>LIVE CRUCIBLE // CONCURRENCY STRESS ENGINE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              Stress-Tested To <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-600 to-cyan-500 dark:from-cyan-400 dark:via-teal-300 dark:to-emerald-400">10,000,000 Req/Sec</span>
            </h2>
          </div>

          <p className="text-sm text-slate-600 dark:text-neutral-400 max-w-md leading-relaxed">
            Drag the load throttle below to inject simulated global traffic across our decentralized edge topology. Watch routes self-heal, container pods autoscale, and latency stay sub-15ms.
          </p>
        </div>

        {/* The Interactive Crucible Sandbox */}
        <div className="rounded-2xl border border-slate-200 dark:border-cyan-500/20 bg-white dark:bg-neutral-950/80 backdrop-blur-xl shadow-xl dark:shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden">
          
          {/* Top Control Header */}
          <div className="p-4 sm:p-6 border-b border-slate-200 dark:border-neutral-800 bg-slate-50/80 dark:bg-neutral-900/40 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div>
                <span className="text-[10px] font-mono text-slate-500 dark:text-neutral-400 uppercase tracking-widest block">Injected Concurrency</span>
                <span className="text-2xl sm:text-3xl font-black font-mono text-sky-600 dark:text-cyan-400">
                  {activeReqs.toLocaleString()} <span className="text-xs text-slate-500 dark:text-neutral-400 font-normal">req/s</span>
                </span>
              </div>

              <div className="h-8 w-px bg-slate-200 dark:bg-neutral-800 hidden sm:block" />

              <div className="hidden sm:block">
                <span className="text-[10px] font-mono text-slate-500 dark:text-neutral-400 uppercase tracking-widest block">Active Pods</span>
                <span className="text-xl font-bold font-mono text-emerald-600 dark:text-emerald-400">
                  {autoScaleInstances} <span className="text-xs text-slate-500 dark:text-neutral-400 font-normal">micro-instances</span>
                </span>
              </div>
            </div>

            {/* Hyper-Surge Button */}
            <button
              onClick={triggerSurge}
              disabled={isSurging}
              className={`px-5 py-2.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
                isSurging
                  ? 'bg-amber-500 text-black shadow-lg animate-pulse'
                  : 'bg-slate-950 text-white hover:bg-slate-800 dark:bg-cyan-500/10 dark:hover:bg-cyan-500/20 dark:text-cyan-300 dark:border dark:border-cyan-500/40 shadow-xs'
              }`}
            >
              <Zap className={`w-3.5 h-3.5 ${isSurging ? 'animate-spin' : ''}`} />
              <span>{isSurging ? 'SURGE ACTIVE [MAX LOAD]' : 'INJECT 10M HYPER-SURGE'}</span>
            </button>
          </div>

          {/* Interactive Slider Bar */}
          <div className="px-6 py-4 bg-slate-50/40 dark:bg-neutral-950/60 border-b border-slate-200 dark:border-neutral-850 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full sm:max-w-xl">
              <span className="text-[10px] font-mono text-slate-500 dark:text-neutral-400 uppercase whitespace-nowrap">THROTTLE:</span>
              <input
                type="range"
                min="1"
                max="100"
                value={loadMultiplier}
                onChange={handleSliderChange}
                className="w-full h-2 bg-slate-200 dark:bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-sky-600 dark:accent-cyan-400"
              />
              <span className="text-xs font-mono font-bold text-sky-600 dark:text-cyan-400 w-12 text-right">{loadMultiplier}%</span>
            </div>

            <div className="flex items-center gap-4 text-[11px] font-mono text-slate-600 dark:text-neutral-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Zero Packet Loss (0.00%)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-sky-500 dark:bg-cyan-400" />
                Edge RLS Partitioned
              </span>
            </div>
          </div>

          {/* Topology Canvas & Node HUD */}
          <div className="relative h-[340px] sm:h-[420px] bg-slate-100/60 dark:bg-[#02050d] overflow-hidden">
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

            {/* Region Node Markers */}
            {REGION_NODES.map((node) => {
              const dynamicLatency = Math.max(8, Math.floor(node.latency * (1 + loadMultiplier * 0.003)));
              return (
                <div
                  key={node.id}
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto group cursor-pointer"
                  onClick={() => soundEngine.playClick()}
                >
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-8 h-8 rounded-full bg-sky-500/20 dark:bg-cyan-500/20 animate-ping group-hover:scale-150 transition-transform" />
                    <span className="relative w-3.5 h-3.5 rounded-full bg-sky-600 dark:bg-cyan-400 border-2 border-white dark:border-black shadow-md dark:shadow-[0_0_12px_#00f0ff]" />
                  </div>

                  {/* Tooltip Card */}
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 opacity-90 group-hover:opacity-100 transition-opacity bg-white/95 dark:bg-neutral-900/90 border border-slate-200 dark:border-neutral-700/80 rounded px-2.5 py-1 backdrop-blur-md whitespace-nowrap shadow-md">
                    <div className="text-[10px] font-bold text-slate-900 dark:text-white font-mono">{node.city}</div>
                    <div className="text-[9px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">{dynamicLatency}ms TTFB</div>
                  </div>
                </div>
              );
            })}

            {/* Live Operational Metrics Overlay */}
            <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5 pointer-events-none">
              <div className="p-2.5 rounded-xl bg-white/90 dark:bg-neutral-900/80 border border-slate-200 dark:border-neutral-800 backdrop-blur-md shadow-xs">
                <div className="text-[9px] font-mono text-slate-500 dark:text-neutral-400 uppercase">Global Ingress</div>
                <div className="text-sm font-bold font-mono text-slate-900 dark:text-white mt-0.5">{(activeReqs * 0.0012).toFixed(1)} GB/s</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/90 dark:bg-neutral-900/80 border border-slate-200 dark:border-neutral-800 backdrop-blur-md shadow-xs">
                <div className="text-[9px] font-mono text-slate-500 dark:text-neutral-400 uppercase">Redis Queue Wait</div>
                <div className="text-sm font-bold font-mono text-emerald-600 dark:text-emerald-400 mt-0.5">&lt; 1.4ms</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/90 dark:bg-neutral-900/80 border border-slate-200 dark:border-neutral-800 backdrop-blur-md shadow-xs">
                <div className="text-[9px] font-mono text-slate-500 dark:text-neutral-400 uppercase">Memory Footprint</div>
                <div className="text-sm font-bold font-mono text-sky-600 dark:text-cyan-400 mt-0.5">{(14 + loadMultiplier * 0.22).toFixed(1)}% Cap</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/90 dark:bg-neutral-900/80 border border-slate-200 dark:border-neutral-800 backdrop-blur-md shadow-xs">
                <div className="text-[9px] font-mono text-slate-500 dark:text-neutral-400 uppercase">Health Check SLA</div>
                <div className="text-sm font-bold font-mono text-emerald-600 dark:text-emerald-400 mt-0.5">99.999%</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
