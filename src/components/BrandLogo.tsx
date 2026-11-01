'use client';

interface BrandLogoProps {
  variant?: 'raptor' | 'nexus' | 'monogram' | 'aperture';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  glow?: boolean;
}

export default function BrandLogo({
  variant = 'raptor',
  size = 'md',
  className = '',
  glow = true,
}: BrandLogoProps) {
  const sizeMap = {
    sm: { container: 'w-7 h-7', px: 28 },
    md: { container: 'w-8 h-8', px: 32 },
    lg: { container: 'w-10 h-10', px: 40 },
    xl: { container: 'w-14 h-14', px: 56 },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div
      className={`relative rounded-xl bg-gradient-to-br from-sky-500/10 via-cyan-500/10 to-indigo-500/10 dark:from-cyan-500/15 dark:via-sky-500/10 dark:to-purple-500/10 border border-sky-500/30 dark:border-cyan-500/40 flex items-center justify-center p-1.5 shadow-sm transition-transform duration-300 group-hover:scale-105 ${currentSize.container} ${className}`}
    >
      {/* Specular Ambient Glow */}
      {glow && (
        <div className="absolute inset-0 rounded-xl bg-sky-500/15 dark:bg-cyan-400/20 blur-md pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
      )}

      {/* Concept 01: The Kinetic Raptor Wing */}
      {variant === 'raptor' && (
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10"
        >
          <defs>
            <linearGradient id="logoRaptorGrad" x1="15" y1="25" x2="85" y2="85" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00f0ff" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
            <linearGradient id="logoRaptorAccent" x1="35" y1="25" x2="75" y2="75" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
          {/* Main Aerodynamic Trajectory Wing (E shape) */}
          <path
            d="M15 75 L45 25 L85 25 L55 75 Z"
            fill="url(#logoRaptorGrad)"
            className="text-sky-600 dark:text-cyan-400"
          />
          {/* Slicing Specular Negative Cut */}
          <path d="M35 75 L65 25 L73 25 L43 75 Z" fill="#ffffff" opacity="0.35" />
          {/* Lower Aerodynamic Horizon Wing */}
          <path
            d="M20 80 L82 80 L72 88 L12 88 Z"
            fill="url(#logoRaptorAccent)"
            opacity="0.85"
          />
          {/* Converging Apex Beak Point */}
          <polygon points="65,25 90,25 78,45" fill="#00f0ff" />
        </svg>
      )}

      {/* Concept 02: The Quantum Nexus Loop */}
      {variant === 'nexus' && (
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10"
        >
          <defs>
            <linearGradient id="logoNexusGrad" x1="15" y1="15" x2="85" y2="85" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#00f0ff" />
            </linearGradient>
          </defs>
          <polygon
            points="50,15 85,35 85,75 50,90 15,70 15,35"
            stroke="url(#logoNexusGrad)"
            strokeWidth="6"
            strokeLinejoin="round"
            fill="none"
            opacity="0.4"
          />
          <path
            d="M15 35 L50 55 L85 35"
            stroke="url(#logoNexusGrad)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M50 55 L50 90"
            stroke="url(#logoNexusGrad)"
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="50" cy="55" r="5" fill="#10b981" />
        </svg>
      )}

      {/* Concept 03: The Silicon Apex Monogram */}
      {variant === 'monogram' && (
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10"
        >
          <rect x="20" y="20" width="13" height="60" rx="2" fill="currentColor" className="text-slate-900 dark:text-white" />
          <path
            d="M20 20 L75 20 L62 34 L33 34 L33 44 L58 44 L48 56 L33 56 L33 80 L20 80 Z"
            fill="#a855f7"
          />
          <polygon points="68,26 84,26 84,42" fill="#c084fc" />
        </svg>
      )}

      {/* Concept 04: The Orbital Aperture Eye */}
      {variant === 'aperture' && (
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10"
        >
          <ellipse cx="50" cy="50" rx="42" ry="24" stroke="#f59e0b" strokeWidth="5" fill="none" />
          <circle cx="50" cy="50" r="14" fill="#18181b" stroke="#ffffff" strokeWidth="2.5" />
          <polygon points="50,42 56,50 50,58 44,50" fill="#f59e0b" />
        </svg>
      )}
    </div>
  );
}
