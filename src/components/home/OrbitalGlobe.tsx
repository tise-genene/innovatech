'use client';

import { useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import { Globe, Radio, Satellite, Compass, Layers, Activity, RefreshCw } from 'lucide-react';
import { soundEngine } from '@/lib/sound';

interface GroundStation {
  id: string;
  name: string;
  code: string;
  lat: number;
  lon: number;
  azimuth: string;
  elevation: string;
  latencyMs: number;
  status: 'PRIMARY_CORE' | 'ACTIVE_RELAY';
  description: string;
}

const GROUND_STATIONS: GroundStation[] = [
  {
    id: 'addis',
    name: 'Addis Ababa Primary Node',
    code: 'ET-ADD-01',
    lat: 9.0249,
    lon: 38.7469,
    azimuth: '042.8° NE',
    elevation: '54.2°',
    latencyMs: 11,
    status: 'PRIMARY_CORE',
    description: 'Central engineering command & primary database cluster with Row-Level Security isolation.',
  },
  {
    id: 'frankfurt',
    name: 'Frankfurt Edge Hub',
    code: 'EU-FRA-01',
    lat: 50.1109,
    lon: 8.6821,
    azimuth: '312.4° NW',
    elevation: '48.9°',
    latencyMs: 38,
    status: 'ACTIVE_RELAY',
    description: 'European low-latency ingress gateway & ISR edge cache replication cluster.',
  },
  {
    id: 'singapore',
    name: 'Singapore Equator Gateway',
    code: 'AP-SIN-01',
    lat: 1.3521,
    lon: 103.8198,
    azimuth: '098.1° E',
    elevation: '62.0°',
    latencyMs: 64,
    status: 'ACTIVE_RELAY',
    description: 'Southeast Asia transaction routing & high-throughput CDN edge distribution.',
  },
  {
    id: 'tokyo',
    name: 'Tokyo Orbital Node',
    code: 'AP-TYO-01',
    lat: 35.6762,
    lon: 139.6503,
    azimuth: '068.7° ENE',
    elevation: '39.4°',
    latencyMs: 82,
    status: 'ACTIVE_RELAY',
    description: 'Pacific rim edge buffer ensuring continuous zero-downtime traffic failover.',
  },
  {
    id: 'us_east',
    name: 'Cape Canaveral / US Hub',
    code: 'US-CAP-01',
    lat: 28.3922,
    lon: -80.6077,
    azimuth: '284.5° WNW',
    elevation: '41.1°',
    latencyMs: 96,
    status: 'ACTIVE_RELAY',
    description: 'North American telemetry gateway connecting enterprise US client networks.',
  },
];

export default function OrbitalGlobe() {
  const [selectedStation, setSelectedStation] = useState<GroundStation>(GROUND_STATIONS[0]);
  const [satelliteCount] = useState<number>(12);
  const { resolvedTheme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;

    let rotY = 0.5; // Yaw
    let rotX = 0.25; // Pitch
    let isDragging = false;
    let lastMouseX = 0;
    let lastMouseY = 0;
    let dragVelocityX = 0;
    let dragVelocityY = 0;

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight || 520;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
      dragVelocityX = 0;
      dragVelocityY = 0;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - lastMouseX;
      const dy = e.clientY - lastMouseY;
      dragVelocityX = dx * 0.005;
      dragVelocityY = dy * 0.005;
      rotY += dragVelocityX;
      rotX += dragVelocityY;
      // Clamp pitch
      rotX = Math.max(-0.9, Math.min(0.9, rotX));
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('resize', handleResize);

    handleResize();

    // Convert Lat/Lon to 3D Cartesian Coordinates on Sphere of radius R
    const latLonTo3D = (lat: number, lon: number, r: number) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      return {
        x: -(r * Math.sin(phi) * Math.cos(theta)),
        y: r * Math.cos(phi),
        z: r * Math.sin(phi) * Math.sin(theta),
      };
    };

    // Sphere grid radius
    const globeRadius = Math.min(width, height) * 0.34;
    const fov = 650;

    // Satellites on 3 orbital planes
    interface Sat {
      planeAngle: number;
      orbitRadius: number;
      orbitSpeed: number;
      phase: number;
    }

    const satellites: Sat[] = [];
    for (let i = 0; i < satelliteCount; i++) {
      satellites.push({
        planeAngle: (i % 3) * (Math.PI / 3),
        orbitRadius: globeRadius * 1.32,
        orbitSpeed: 0.012 + (i % 3) * 0.004,
        phase: (i / satelliteCount) * Math.PI * 2,
      });
    }

    const render = () => {
      const isDark = resolvedTheme !== 'light';
      ctx.clearRect(0, 0, width, height);

      // Smooth inertia rotation
      if (!isDragging) {
        dragVelocityX *= 0.95;
        dragVelocityY *= 0.95;
        rotY += 0.003 + dragVelocityX;
        rotX += dragVelocityY;
      }

      const centerX = width / 2;
      const centerY = height / 2;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      // 3D rotation transform function
      const project3D = (pt: { x: number; y: number; z: number }) => {
        // Rotate Y
        const x1 = pt.x * cosY - pt.z * sinY;
        const z1 = pt.z * cosY + pt.x * sinY;
        // Rotate X
        const y1 = pt.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + pt.y * sinX;

        const depth = z2 + fov;
        const scale = fov / Math.max(10, depth);
        return {
          x: centerX + x1 * scale,
          y: centerY + y1 * scale,
          z: z2,
          isFront: z2 < 0,
        };
      };

      // 1. Draw atmospheric outer aura
      const auraGrad = ctx.createRadialGradient(centerX, centerY, globeRadius * 0.7, centerX, centerY, globeRadius * 1.45);
      if (isDark) {
        auraGrad.addColorStop(0, 'rgba(0, 240, 255, 0.04)');
        auraGrad.addColorStop(0.5, 'rgba(14, 165, 233, 0.02)');
        auraGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      } else {
        auraGrad.addColorStop(0, 'rgba(2, 132, 199, 0.05)');
        auraGrad.addColorStop(0.6, 'rgba(99, 102, 241, 0.02)');
        auraGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      }
      ctx.fillStyle = auraGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Draw Sphere Outer Rim
      ctx.beginPath();
      ctx.arc(centerX, centerY, globeRadius, 0, Math.PI * 2);
      ctx.strokeStyle = isDark ? 'rgba(0, 240, 255, 0.25)' : 'rgba(2, 132, 199, 0.3)';
      ctx.lineWidth = 1.2;
      ctx.stroke();

      // 3. Draw Latitude Rings (Parallels)
      const latSteps = [-60, -30, 0, 30, 60];
      latSteps.forEach((lat) => {
        ctx.beginPath();
        let first = true;
        for (let lon = 0; lon <= 360; lon += 8) {
          const pt3d = latLonTo3D(lat, lon, globeRadius);
          const p = project3D(pt3d);
          if (first) {
            ctx.moveTo(p.x, p.y);
            first = false;
          } else {
            ctx.lineTo(p.x, p.y);
          }
        }
        ctx.strokeStyle = isDark ? 'rgba(0, 240, 255, 0.07)' : 'rgba(2, 132, 199, 0.09)';
        ctx.lineWidth = 0.8;
        ctx.stroke();
      });

      // 4. Draw Longitude Rings (Meridians)
      for (let lon = 0; lon < 360; lon += 30) {
        ctx.beginPath();
        let first = true;
        for (let lat = -90; lat <= 90; lat += 8) {
          const pt3d = latLonTo3D(lat, lon, globeRadius);
          const p = project3D(pt3d);
          if (first) {
            ctx.moveTo(p.x, p.y);
            first = false;
          } else {
            ctx.lineTo(p.x, p.y);
          }
        }
        ctx.strokeStyle = isDark ? 'rgba(0, 240, 255, 0.07)' : 'rgba(2, 132, 199, 0.09)';
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      // 5. Draw Orbiting Starlink Satellites & Orbital Planes
      const satPositions: { x: number; y: number; isFront: boolean }[] = [];

      satellites.forEach((sat) => {
        sat.phase += sat.orbitSpeed;
        const orbitX = Math.cos(sat.phase) * sat.orbitRadius;
        const orbitY = Math.sin(sat.phase) * sat.orbitRadius * Math.sin(sat.planeAngle);
        const orbitZ = Math.sin(sat.phase) * sat.orbitRadius * Math.cos(sat.planeAngle);

        const p = project3D({ x: orbitX, y: orbitY, z: orbitZ });
        satPositions.push(p);

        // Draw satellite dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.isFront ? 2.8 : 1.5, 0, Math.PI * 2);
        ctx.fillStyle = p.isFront 
          ? (isDark ? '#00f0ff' : '#0284c7') 
          : (isDark ? 'rgba(0, 240, 255, 0.3)' : 'rgba(2, 132, 199, 0.3)');
        ctx.fill();
      });

      // 6. Draw Ground Stations & Interconnecting Telemetry Laser Lines
      const stationProj = GROUND_STATIONS.map((st) => {
        const pt3d = latLonTo3D(st.lat, st.lon, globeRadius);
        return {
          station: st,
          proj: project3D(pt3d),
        };
      });

      // Ground station to ground station lines
      for (let i = 0; i < stationProj.length; i++) {
        for (let j = i + 1; j < stationProj.length; j++) {
          const p1 = stationProj[i].proj;
          const p2 = stationProj[j].proj;
          if (p1.isFront && p2.isFront) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = isDark ? 'rgba(16, 185, 129, 0.22)' : 'rgba(5, 150, 105, 0.25)';
            ctx.lineWidth = 1;
            ctx.setLineDash([4, 6]);
            ctx.stroke();
            ctx.setLineDash([]);
          }
        }
      }

      // Draw active telemetry beam from selected station to closest satellite
      const selectedProj = stationProj.find((sp) => sp.station.id === selectedStation.id);
      if (selectedProj && selectedProj.proj.isFront && satPositions.length > 0) {
        const nearestSat = satPositions.find((s) => s.isFront) || satPositions[0];
        ctx.beginPath();
        ctx.moveTo(selectedProj.proj.x, selectedProj.proj.y);
        ctx.lineTo(nearestSat.x, nearestSat.y);
        ctx.strokeStyle = isDark ? 'rgba(0, 240, 255, 0.7)' : 'rgba(2, 132, 199, 0.7)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // Render Ground Station Beacons
      stationProj.forEach((sp) => {
        const p = sp.proj;
        if (!p.isFront) return;

        const isSelected = sp.station.id === selectedStation.id;

        // Pulsing ring
        ctx.beginPath();
        ctx.arc(p.x, p.y, isSelected ? 8 : 5, 0, Math.PI * 2);
        ctx.fillStyle = isSelected 
          ? (isDark ? 'rgba(0, 240, 255, 0.35)' : 'rgba(2, 132, 199, 0.35)') 
          : (isDark ? 'rgba(16, 185, 129, 0.25)' : 'rgba(5, 150, 105, 0.25)');
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, isSelected ? 4 : 2.5, 0, Math.PI * 2);
        ctx.fillStyle = isSelected 
          ? (isDark ? '#00f0ff' : '#0284c7') 
          : (isDark ? '#10b981' : '#059669');
        ctx.fill();

        // Label
        ctx.font = '10px monospace';
        ctx.fillStyle = isDark ? '#ffffff' : '#0f172a';
        ctx.fillText(sp.station.code, p.x + 8, p.y - 4);
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, [selectedStation, satelliteCount, resolvedTheme]);

  return (
    <section id="orbital" className="py-24 lg:py-32 relative border-b border-slate-200 dark:border-neutral-800 bg-white dark:bg-[#02050c] overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-slate-200 dark:border-neutral-800">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-sky-500/10 dark:bg-cyan-500/10 border border-sky-500/20 dark:border-cyan-500/25 text-sky-700 dark:text-cyan-400 font-mono text-[11px] uppercase tracking-wider mb-3">
              <Satellite className="w-3.5 h-3.5 animate-pulse text-sky-600 dark:text-cyan-400" />
              <span>NASA / SPACEX GRADE // ORBITAL CONSTELLATION TELEMETRY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              Global Ground Stations & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-600 to-cyan-500 dark:from-cyan-400 dark:via-teal-300 dark:to-indigo-400">Orbital Relays</span>
            </h2>
          </div>

          <p className="text-sm text-slate-600 dark:text-neutral-400 max-w-md leading-relaxed">
            Drag to rotate the 3D globe in real-time. Track orbital satellite sweeps, Doppler vectors, and low-latency packet paths connecting our Addis Ababa primary node to worldwide edge relays.
          </p>
        </div>

        {/* 3D Globe & Mission Telemetry Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: 3D Interactive Canvas Globe */}
          <div className="lg:col-span-7 relative h-[420px] sm:h-[520px] rounded-2xl border border-slate-200 dark:border-cyan-500/20 bg-slate-50 dark:bg-black/60 shadow-xl overflow-hidden group cursor-grab active:cursor-grabbing">
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

            {/* Orbit Instructions Pill */}
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/80 dark:bg-neutral-900/80 border border-slate-200 dark:border-neutral-800 backdrop-blur-md text-[10px] font-mono text-slate-500 dark:text-neutral-400 pointer-events-none flex items-center gap-1.5 shadow-xs">
              <Compass className="w-3 h-3 text-sky-600 dark:text-cyan-400 animate-spin" />
              <span>DRAG TO ROTATE 3D GLOBE</span>
            </div>

            {/* Constellation Stat Pill */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono p-2.5 rounded-xl bg-white/85 dark:bg-neutral-900/80 border border-slate-200 dark:border-neutral-800 backdrop-blur-md text-slate-600 dark:text-neutral-400 pointer-events-none shadow-xs">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                CONSTELLATION: {satelliteCount} ACTIVE LOW-EARTH NODES
              </span>
              <span className="text-sky-600 dark:text-cyan-400 font-bold">DOPPLER LOCK: 100%</span>
            </div>
          </div>

          {/* Right: Ground Station Telemetry Terminal */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Ground Station Selection Chips */}
            <div className="grid grid-cols-1 gap-2">
              {GROUND_STATIONS.map((station) => (
                <div
                  key={station.id}
                  onClick={() => {
                    soundEngine.playSwitch();
                    setSelectedStation(station);
                  }}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    selectedStation.id === station.id
                      ? 'bg-white dark:bg-neutral-900/90 border-sky-500/50 dark:border-cyan-500/50 shadow-md dark:shadow-[0_0_20px_rgba(0,240,255,0.15)]'
                      : 'bg-slate-50 hover:bg-slate-100 dark:bg-neutral-950/60 dark:hover:bg-neutral-900/40 border-slate-200 dark:border-neutral-800'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <Radio className={`w-3.5 h-3.5 ${selectedStation.id === station.id ? 'text-sky-600 dark:text-cyan-400' : 'text-slate-400'}`} />
                      {station.name}
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold ${
                      station.status === 'PRIMARY_CORE' 
                        ? 'bg-sky-500/10 text-sky-700 dark:bg-cyan-500/20 dark:text-cyan-300' 
                        : 'bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400'
                    }`}>
                      {station.latencyMs}ms TTFB
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-600 dark:text-neutral-400 font-light line-clamp-1">
                    {station.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Selected Station Telemetry HUD */}
            <div className="p-5 rounded-2xl bg-white dark:bg-neutral-950/90 border border-slate-200 dark:border-neutral-800 shadow-xl space-y-3 font-mono text-xs">
              <div className="text-[10px] text-sky-600 dark:text-cyan-400 font-bold uppercase tracking-widest pb-2 border-b border-slate-100 dark:border-neutral-850 flex items-center justify-between">
                <span>ORBITAL TELEMETRY READOUT</span>
                <span className="text-slate-400 dark:text-neutral-500">STATION // {selectedStation.code}</span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-[11px]">
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-neutral-900/60 border border-slate-200 dark:border-neutral-800">
                  <span className="text-slate-500 dark:text-neutral-400 block text-[9px] uppercase">Azimuth Heading</span>
                  <span className="font-bold text-slate-900 dark:text-white">{selectedStation.azimuth}</span>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-neutral-900/60 border border-slate-200 dark:border-neutral-800">
                  <span className="text-slate-500 dark:text-neutral-400 block text-[9px] uppercase">Horizon Elevation</span>
                  <span className="font-bold text-slate-900 dark:text-white">{selectedStation.elevation}</span>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-neutral-900/60 border border-slate-200 dark:border-neutral-800">
                  <span className="text-slate-500 dark:text-neutral-400 block text-[9px] uppercase">Spherical Coords</span>
                  <span className="font-bold text-slate-900 dark:text-white">{selectedStation.lat.toFixed(2)}°, {selectedStation.lon.toFixed(2)}°</span>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-neutral-900/60 border border-slate-200 dark:border-neutral-800">
                  <span className="text-slate-500 dark:text-neutral-400 block text-[9px] uppercase">Uptime Guarantee</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">99.999% SLA</span>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-slate-500 dark:text-neutral-400 font-light">
                {selectedStation.description}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

