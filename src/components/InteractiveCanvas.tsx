'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

export default function InteractiveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates (default off-screen)
    let mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // Particle nodes for subtle technical constellation
    const spacing = 72; // grid resolution
    const maxDistance = 140;

    const render = () => {
      // Smooth lerp mouse
      mouse.x += (mouse.targetX - mouse.x) * 0.15;
      mouse.y += (mouse.targetY - mouse.y) * 0.15;

      ctx.clearRect(0, 0, width, height);

      const isDark = resolvedTheme !== 'light';
      const baseAlpha = isDark ? 0.03 : 0.04;
      const highlightRgb = isDark ? '0, 153, 255' : '0, 119, 204';

      // Draw subtle intersection crosshairs
      const startX = Math.floor(0 / spacing) * spacing;
      const startY = Math.floor(0 / spacing) * spacing;

      for (let x = startX; x < width; x += spacing) {
        for (let y = startY; y < height; y += spacing) {
          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const proximity = 1 - dist / maxDistance;
            ctx.fillStyle = `rgba(${highlightRgb}, ${baseAlpha + proximity * 0.45})`;
            ctx.fillRect(x - 1, y - 1, 3, 3);

            // Connect nearby points to mouse
            if (dist < 100) {
              ctx.strokeStyle = `rgba(${highlightRgb}, ${proximity * 0.18})`;
              ctx.lineWidth = 0.75;
              ctx.beginPath();
              ctx.moveTo(x, y);
              ctx.lineTo(mouse.x, mouse.y);
              ctx.stroke();
            }
          } else {
            ctx.fillStyle = isDark ? `rgba(255, 255, 255, ${baseAlpha})` : `rgba(0, 0, 0, ${baseAlpha})`;
            ctx.fillRect(x, y, 1.5, 1.5);
          }
        }
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
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 opacity-70 transition-opacity duration-500"
      aria-hidden="true"
    />
  );
}
