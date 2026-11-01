'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

interface Particle3D {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  baseRadius: number;
  alpha: number;
}

export default function InteractiveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { resolvedTheme } = useTheme();

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

    const mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
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
    };

    const handleMouseLeave = () => {
      mouse.targetX = 0;
      mouse.targetY = 0;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    handleResize();

    // 120 refined monochromatic starfield particles
    const particles: Particle3D[] = [];
    for (let i = 0; i < 110; i++) {
      particles.push({
        x: (Math.random() - 0.5) * 1400,
        y: (Math.random() - 0.5) * 1000,
        z: (Math.random() - 0.5) * 1000,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        vz: (Math.random() - 0.5) * 0.2,
        baseRadius: Math.random() * 1.5 + 0.8,
        alpha: Math.random() * 0.4 + 0.2,
      });
    }

    let rotY = 0;
    let rotX = 0;
    const fov = 480;

    const render = () => {
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      rotY += 0.0008 + mouse.x * 0.00001;
      rotX = mouse.y * 0.0002;

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const isDark = resolvedTheme !== 'light';

      // Subtle ambient top specular gradient
      const grad = ctx.createRadialGradient(
        centerX,
        0,
        10,
        centerX,
        0,
        Math.max(200, width * 0.7)
      );

      if (isDark) {
        grad.addColorStop(0, 'rgba(56, 189, 248, 0.06)');
        grad.addColorStop(0.5, 'rgba(99, 102, 241, 0.02)');
        grad.addColorStop(1, 'rgba(6, 7, 10, 0)');
      } else {
        grad.addColorStop(0, 'rgba(2, 132, 199, 0.05)');
        grad.addColorStop(0.5, 'rgba(99, 102, 241, 0.015)');
        grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      }

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // 3D rotation projection
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      const projected: { x: number; y: number; scale: number; p: Particle3D }[] = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        if (p.x > 700) p.x = -700;
        if (p.x < -700) p.x = 700;
        if (p.y > 500) p.y = -500;
        if (p.y < -500) p.y = 500;
        if (p.z > 500) p.z = -500;
        if (p.z < -500) p.z = 500;

        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.z * cosY + p.x * sinY;
        const y1 = p.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.y * sinX;

        const depth = z2 + fov;
        if (depth > 10) {
          const scale = fov / depth;
          const projX = centerX + x1 * scale;
          const projY = centerY + y1 * scale;
          projected.push({ x: projX, y: projY, scale, p });
        }
      }

      // Draw elegant particles
      for (let i = 0; i < projected.length; i++) {
        const item = projected[i];
        const radius = Math.max(0.6, item.p.baseRadius * item.scale);
        const alpha = Math.min(0.65, item.p.alpha * item.scale);

        ctx.beginPath();
        ctx.arc(item.x, item.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `rgba(244, 244, 245, ${alpha})`
          : `rgba(15, 23, 42, ${alpha * 0.7})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [resolvedTheme]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-75 transition-opacity duration-300"
      />
    </div>
  );
}