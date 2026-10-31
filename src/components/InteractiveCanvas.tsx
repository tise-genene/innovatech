'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import { soundEngine } from '@/lib/sound';

interface Particle3D {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  baseRadius: number;
  colorDark: string;
  colorLight: string;
}

interface RingPoint {
  radius: number;
  angle: number;
  tilt: number;
  speed: number;
  colorDark: string;
  colorLight: string;
}

export default function InteractiveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { resolvedTheme } = useTheme();
  const [mode, setMode] = useState<'core' | 'lattice' | 'warp'>('core');
  const [isHyperdrive, setIsHyperdrive] = useState<boolean>(false);

  useEffect(() => {
    const handleHyperdrive = (e: Event) => {
      const custom = e as CustomEvent<{ state?: boolean }>;
      if (custom.detail?.state !== undefined) {
        setIsHyperdrive(custom.detail.state);
      } else {
        setIsHyperdrive((prev) => !prev);
      }
    };
    window.addEventListener('toggle-hyperdrive', handleHyperdrive);
    return () => window.removeEventListener('toggle-hyperdrive', handleHyperdrive);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Mouse tracking
    const mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
      isHovered: false,
      clickShockwave: 0,
    };

    const handleResize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX - width / 2;
      mouse.targetY = e.clientY - height / 2;
      mouse.isHovered = true;
    };

    const handleMouseLeave = () => {
      mouse.targetX = 0;
      mouse.targetY = 0;
      mouse.isHovered = false;
    };

    const handleClick = () => {
      mouse.clickShockwave = 1.0;
      soundEngine.playPulse();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('click', handleClick);

    handleResize();

    // Generate 3D Particles
    const particles: Particle3D[] = [];
    const colorsDark = ['#00f0ff', '#10b981', '#a855f7', '#38bdf8', '#818cf8', '#f59e0b'];
    const colorsLight = ['#0284c7', '#059669', '#7c3aed', '#2563eb', '#0891b2', '#d97706'];

    for (let i = 0; i < 220; i++) {
      const idx = Math.floor(Math.random() * colorsDark.length);
      particles.push({
        x: (Math.random() - 0.5) * 1400,
        y: (Math.random() - 0.5) * 1000,
        z: (Math.random() - 0.5) * 1000,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        vz: (Math.random() - 0.5) * 0.7,
        baseRadius: Math.random() * 2 + 1.2,
        colorDark: colorsDark[idx],
        colorLight: colorsLight[idx],
      });
    }

    // Concentric Gimbal Rings
    const rings: RingPoint[] = [
      { radius: 160, angle: 0, tilt: 0.6, speed: 0.008, colorDark: 'rgba(0, 240, 255, 0.45)', colorLight: 'rgba(2, 132, 199, 0.35)' },
      { radius: 240, angle: Math.PI / 3, tilt: -0.4, speed: -0.006, colorDark: 'rgba(168, 85, 247, 0.4)', colorLight: 'rgba(124, 58, 237, 0.3)' },
      { radius: 320, angle: Math.PI / 1.5, tilt: 0.8, speed: 0.004, colorDark: 'rgba(16, 185, 129, 0.35)', colorLight: 'rgba(5, 150, 105, 0.25)' },
    ];

    let rotX = 0;
    let rotY = 0;
    const fov = 420;

    const render = () => {
      // Lerp mouse
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      // Dynamic rotation from mouse
      rotY += (isHyperdrive ? 0.008 : 0.002) + mouse.x * 0.00003;
      rotX = mouse.y * 0.0004;

      // Fade shockwave
      if (mouse.clickShockwave > 0) {
        mouse.clickShockwave *= 0.94;
        if (mouse.clickShockwave < 0.01) mouse.clickShockwave = 0;
      }

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // Atmospheric Deep Nebula Core
      const isDark = resolvedTheme !== 'light';
      const safeRadius = Math.max(30, width * 0.6);
      const grad = ctx.createRadialGradient(
        centerX + mouse.x * 0.2,
        centerY + mouse.y * 0.2,
        10,
        centerX,
        centerY,
        safeRadius
      );

      if (isDark) {
        grad.addColorStop(0, isHyperdrive ? 'rgba(0, 240, 255, 0.16)' : 'rgba(0, 240, 255, 0.08)');
        grad.addColorStop(0.35, isHyperdrive ? 'rgba(168, 85, 247, 0.08)' : 'rgba(168, 85, 247, 0.04)');
        grad.addColorStop(0.7, 'rgba(16, 185, 129, 0.02)');
        grad.addColorStop(1, 'rgba(3, 7, 18, 0)');
      } else {
        grad.addColorStop(0, isHyperdrive ? 'rgba(14, 165, 233, 0.12)' : 'rgba(14, 165, 233, 0.06)');
        grad.addColorStop(0.4, 'rgba(99, 102, 241, 0.03)');
        grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      }

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Draw Holographic Gimbal Rings in 'core' mode
      if (!isHyperdrive && (mode === 'core' || mode === 'lattice')) {
        rings.forEach((ring) => {
          ring.angle += ring.speed;
          ctx.save();
          ctx.translate(centerX, centerY);
          ctx.rotate(rotY * 0.5 + ring.angle);

          ctx.beginPath();
          ctx.ellipse(
            0,
            0,
            ring.radius + mouse.clickShockwave * 40,
            ring.radius * Math.abs(Math.cos(ring.tilt + rotX)),
            ring.tilt,
            0,
            Math.PI * 2
          );
          ctx.strokeStyle = isDark ? ring.colorDark : ring.colorLight;
          ctx.lineWidth = 1.2;
          ctx.setLineDash([8, 14]);
          ctx.stroke();

          // Satellite beacon on ring
          const bx = Math.cos(ring.angle * 2) * ring.radius;
          const by = Math.sin(ring.angle * 2) * ring.radius * Math.abs(Math.cos(ring.tilt + rotX));
          ctx.beginPath();
          ctx.arc(bx, by, 3, 0, Math.PI * 2);
          ctx.fillStyle = isDark ? '#00f0ff' : '#0284c7';
          ctx.shadowColor = isDark ? '#00f0ff' : '#0284c7';
          ctx.shadowBlur = 8;
          ctx.fill();

          ctx.restore();
        });
      }

      // Project & Render 3D Particles
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      const projected: { x: number; y: number; z: number; scale: number; p: Particle3D }[] = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Motion physics with hyperdrive acceleration
        const speedMult = isHyperdrive ? 8.5 : 1.0;
        p.x += p.vx * (isHyperdrive ? 2.5 : 1.0);
        p.y += p.vy * (isHyperdrive ? 2.5 : 1.0);
        p.z += isHyperdrive ? -speedMult * 4.0 : p.vz;

        // Shockwave acceleration
        if (mouse.clickShockwave > 0.05) {
          const d = Math.sqrt(p.x * p.x + p.y * p.y + p.z * p.z);
          if (d > 10) {
            p.x += (p.x / d) * mouse.clickShockwave * 12;
            p.y += (p.y / d) * mouse.clickShockwave * 12;
            p.z += (p.z / d) * mouse.clickShockwave * 12;
          }
        }

        // Boundary wrap
        if (p.x > 700) p.x = -700;
        if (p.x < -700) p.x = 700;
        if (p.y > 500) p.y = -500;
        if (p.y < -500) p.y = 500;
        if (p.z > 500) p.z = -500;
        if (p.z < -500) p.z = 500;

        // 3D rotation math
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.z * cosY + p.x * sinY;

        const y1 = p.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.y * sinX;

        // Perspective division
        const depth = z2 + fov;
        if (depth > 10) {
          const scale = fov / depth;
          const projX = centerX + x1 * scale;
          const projY = centerY + y1 * scale;

          projected.push({ x: projX, y: projY, z: depth, scale, p });
        }
      }

      // Sort by depth
      projected.sort((a, b) => b.z - a.z);

      // Connective synapses
      const maxDist = mode === 'lattice' ? 95 : 65;
      const len = projected.length;

      for (let i = 0; i < len; i++) {
        const p1 = projected[i];
        const color = isDark ? p1.p.colorDark : p1.p.colorLight;

        // Draw particle node
        const radius = Math.max(0.6, p1.p.baseRadius * p1.scale);
        const alpha = Math.min(1, Math.max(0.2, (p1.scale - 0.25) * 1.4));

        if (isHyperdrive) {
          // Relativistic warp streak line
          const streakLen = p1.scale * 45;
          const dirX = (p1.x - centerX) / fov;
          const dirY = (p1.y - centerY) / fov;

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p1.x - dirX * streakLen, p1.y - dirY * streakLen);
          ctx.strokeStyle = color;
          ctx.lineWidth = Math.max(1.2, p1.scale * 2.8);
          ctx.globalAlpha = Math.min(1, alpha * 0.95);
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.arc(p1.x, p1.y, radius, 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.globalAlpha = isDark ? alpha : alpha * 0.7;
          ctx.fill();

          // Glowing core halo in dark mode
          if (isDark && p1.scale > 0.8) {
            ctx.beginPath();
            ctx.arc(p1.x, p1.y, radius * 2.8, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.globalAlpha = alpha * 0.25;
            ctx.fill();
          }
        }

        // Connective synapses (non-hyperdrive)
        if (!isHyperdrive) {
          for (let j = i + 1; j < len; j++) {
            const p2 = projected[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < maxDist) {
              const edgeAlpha = (1 - dist / maxDist) * (isDark ? 0.22 : 0.16) * Math.min(p1.scale, p2.scale);
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = color;
              ctx.globalAlpha = edgeAlpha;
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }
        }
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, [resolvedTheme, mode, isHyperdrive]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-90 transition-opacity duration-300"
      />

      {/* Floating HUD Mode Selector (Interactive Control Pill) */}
      <div className="absolute bottom-6 right-6 pointer-events-auto z-20 hidden md:flex items-center gap-1.5 p-1 rounded-full bg-white/90 dark:bg-neutral-950/80 border border-slate-200 dark:border-neutral-800/80 backdrop-blur-md text-[10px] font-mono shadow-lg">
        <span className="px-2 text-slate-500 dark:text-neutral-400">ENGINE //</span>
        <button
          onClick={() => {
            soundEngine.playSwitch();
            setMode('core');
          }}
          className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
            mode === 'core'
              ? 'bg-sky-500/15 text-sky-700 dark:bg-cyan-500/20 dark:text-cyan-300 border border-sky-500/30 dark:border-cyan-500/40 shadow-xs'
              : 'text-slate-600 hover:text-slate-950 dark:text-neutral-400 dark:hover:text-white'
          }`}
        >
          ORBITAL
        </button>
        <button
          onClick={() => {
            soundEngine.playSwitch();
            setMode('lattice');
          }}
          className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
            mode === 'lattice'
              ? 'bg-emerald-500/15 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300 border border-emerald-500/30 dark:border-emerald-500/40 shadow-xs'
              : 'text-slate-600 hover:text-slate-950 dark:text-neutral-400 dark:hover:text-white'
          }`}
        >
          LATTICE
        </button>
        <button
          onClick={() => {
            soundEngine.playSwitch();
            setMode('warp');
          }}
          className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
            mode === 'warp'
              ? 'bg-purple-500/15 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300 border border-purple-500/30 dark:border-purple-500/40 shadow-xs'
              : 'text-slate-600 hover:text-slate-950 dark:text-neutral-400 dark:hover:text-white'
          }`}
        >
          NEBULA
        </button>
      </div>
    </div>
  );
}
