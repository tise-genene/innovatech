'use client';

import { useState, useRef, useEffect } from 'react';
import { Terminal, RefreshCw } from 'lucide-react';
import { soundEngine } from '@/lib/sound';

interface HistoryItem {
  id: string;
  type: 'command' | 'output' | 'error' | 'success';
  text: string | React.ReactNode;
}

export default function CyberTerminal() {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      id: 'init-1',
      type: 'output',
      text: (
        <div className="space-y-1">
          <div className="text-cyan-400 font-bold">
            EAGLE PATHWAY AUTONOMOUS TERMINAL // v3.0.4-PROD
          </div>
          <div className="text-neutral-400">
            Type <span className="text-emerald-400 font-bold">help</span> to explore commands, or click the quick action pills above.
          </div>
        </div>
      ),
    },
  ]);
  const [isExecuting, setIsExecuting] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const quickCommands = [
    { cmd: 'launch', label: 'Falcon Hyperdrive' },
    { cmd: 'orbital', label: 'Orbital Telemetry' },
    { cmd: 'silicon', label: 'Silicon Die' },
    { cmd: 'systems', label: 'Ecosystem Status' },
    { cmd: 'benchmark', label: 'Run Benchmark' },
    { cmd: 'deploy', label: 'Edge Deploy' },
    { cmd: 'matrix', label: 'Matrix Rain' },
    { cmd: 'verify', label: 'Test Fraud Lab' },
    { cmd: 'help', label: 'Help' },
  ];

  const executeCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    soundEngine.playKeystroke();

    const cmdItem: HistoryItem = {
      id: String(Date.now()),
      type: 'command',
      text: `eagle@studio:~$ ${rawCmd}`,
    };

    setHistory((prev) => [...prev, cmdItem]);
    setInputVal('');
    setIsExecuting(true);

    setTimeout(() => {
      handleOutput(cmd);
      setIsExecuting(false);
    }, 250);
  };

  const handleOutput = (cmd: string) => {
    const id = String(Date.now() + 1);

    if (cmd === 'help') {
      soundEngine.playSuccess();
      setHistory((prev) => [
        ...prev,
        {
          id,
          type: 'output',
          text: (
            <div className="space-y-1 text-xs">
              <div className="text-cyan-400 font-bold mb-1">AVAILABLE COMMANDS:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-neutral-300">
                <div><span className="text-amber-400 font-mono">launch / hyperdrive</span> - Falcon Hyperdrive Warp</div>
                <div><span className="text-cyan-400 font-mono">orbital</span> - View 3D constellation telemetry</div>
                <div><span className="text-cyan-400 font-mono">silicon</span> - Inspect micro-architecture cores</div>
                <div><span className="text-emerald-400 font-mono">systems</span> - View production clusters & latency</div>
                <div><span className="text-emerald-400 font-mono">benchmark</span> - Run real in-browser CPU stress test</div>
                <div><span className="text-emerald-400 font-mono">deploy</span> - Run edge zero-downtime deployment</div>
                <div><span className="text-emerald-400 font-mono">matrix</span> - Toggle fullscreen Matrix stream</div>
                <div><span className="text-emerald-400 font-mono">verify</span> - Execute zero-trust slip forensics</div>
                <div><span className="text-emerald-400 font-mono">audio</span> - Toggle synthesized audio engine</div>
                <div><span className="text-emerald-400 font-mono">clear</span> - Clear terminal session</div>
              </div>
            </div>
          ),
        },
      ]);
    } else if (cmd === 'launch' || cmd === 'hyperdrive') {
      soundEngine.playWarp();
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('toggle-hyperdrive'));
      }
      setHistory((prev) => [
        ...prev,
        {
          id,
          type: 'success',
          text: (
            <div className="space-y-1 text-xs font-mono">
              <div className="text-amber-400 font-bold">FALCON HYPERDRIVE IGNITION ENGAGED:</div>
              <div className="text-neutral-300">→ Vector Velocity: <span className="text-amber-400 font-bold">1.0c (Speed of Light)</span></div>
              <div className="text-neutral-300">→ Thruster Array: 9x Merlin Vacuum Overclocked</div>
              <div className="text-neutral-300">→ Canvas Particle Streaks: Active Relativistic Mode</div>
              <div className="text-emerald-400 font-bold">✓ HUD Overdrive active. Toggle from top banner or bottom telemetry bar.</div>
            </div>
          ),
        },
      ]);
    } else if (cmd === 'orbital') {
      soundEngine.playLaserScan();
      setHistory((prev) => [
        ...prev,
        {
          id,
          type: 'output',
          text: (
            <div className="space-y-1 text-xs font-mono">
              <div className="text-cyan-400 font-bold">ORBITAL CONSTELLATION TELEMETRY:</div>
              <div className="text-neutral-300">Primary Core: Addis Ababa Ground Station (9.0249° N, 38.7469° E)</div>
              <div className="text-neutral-300">Active Relays: Frankfurt (38ms) • Singapore (64ms) • Tokyo (82ms) • Cape Canaveral (96ms)</div>
              <div className="text-emerald-400 font-bold">✓ 12 Low-Earth Satellites synchronized across 3 orbital inclination planes.</div>
            </div>
          ),
        },
      ]);
    } else if (cmd === 'silicon') {
      soundEngine.playVerify();
      setHistory((prev) => [
        ...prev,
        {
          id,
          type: 'output',
          text: (
            <div className="space-y-1 text-xs font-mono">
              <div className="text-cyan-400 font-bold">MICRO-ARCHITECTURE SILICON DIE STATUS:</div>
              <div className="text-neutral-300">Core 01: Sub-45ms Heuristic Vector ALU (Modulo-97 + Font Kerning)</div>
              <div className="text-neutral-300">Core 02: Postgres RLS Boundary (&lt; 16ms Edge Query SLA)</div>
              <div className="text-neutral-300">Core 03: SHA-256 Crypto Proof Digest Matrix</div>
              <div className="text-neutral-300">Core 04: Redis Async Ring Buffer (10k+ ops/day, 0.00% drop)</div>
            </div>
          ),
        },
      ]);
    } else if (cmd === 'systems') {
      soundEngine.playSuccess();
      setHistory((prev) => [
        ...prev,
        {
          id,
          type: 'success',
          text: (
            <div className="space-y-2 text-xs">
              <div className="text-emerald-400 font-bold">PRODUCTION CLUSTER HEALTH // ALL SYSTEMS OPTIMAL</div>
              <div className="border border-neutral-800 rounded-lg p-3 bg-neutral-900/60 font-mono space-y-1 text-neutral-300">
                <div>[01] LMS Enterprise SIS: <span className="text-emerald-400">ONLINE</span> (16ms edge query SLA)</div>
                <div>[02] VerifyReceipt Engine: <span className="text-emerald-400">ONLINE</span> (38ms offline validator)</div>
                <div>[03] Mentorship Discovery: <span className="text-emerald-400">ONLINE</span> (ISR Cloudflare CDN)</div>
                <div>[04] Admin Command Core: <span className="text-emerald-400">ONLINE</span> (Zero-Trust RBAC)</div>
                <div>[05] Telegram Worker Queue: <span className="text-emerald-400">ONLINE</span> (10k ops/day, 0% drops)</div>
              </div>
            </div>
          ),
        },
      ]);
    } else if (cmd === 'benchmark') {
      soundEngine.playWarp();
      const t0 = performance.now();
      let primeCount = 0;
      for (let i = 2; i < 250000; i++) {
        let isPrime = true;
        for (let j = 2; j * j <= i; j++) {
          if (i % j === 0) {
            isPrime = false;
            break;
          }
        }
        if (isPrime) primeCount++;
      }
      const t1 = performance.now();
      const durationMs = (t1 - t0).toFixed(2);

      setHistory((prev) => [
        ...prev,
        {
          id,
          type: 'success',
          text: (
            <div className="space-y-1 text-xs">
              <div className="text-cyan-400 font-bold">CLIENT HARDWARE BENCHMARK COMPLETED:</div>
              <div className="text-neutral-300">Found <span className="text-emerald-400 font-bold">{primeCount.toLocaleString()}</span> primes up to 250,000.</div>
              <div className="text-neutral-300">Browser execution duration: <span className="text-cyan-400 font-bold">{durationMs} ms</span>.</div>
              <div className="text-neutral-400">Hardware tier: <span className="text-emerald-400 font-bold">Tier 1 Edge Compute Client</span>.</div>
            </div>
          ),
        },
      ]);
    } else if (cmd === 'deploy') {
      soundEngine.playLaserScan();
      setHistory((prev) => [
        ...prev,
        {
          id,
          type: 'output',
          text: (
            <div className="space-y-1 text-xs font-mono">
              <div className="text-cyan-400">TRIGGERING ZERO-DOWNTIME EDGE DEPLOYMENT...</div>
              <div className="text-neutral-400">→ Compiling Next.js 16 edge worker bundles... [OK]</div>
              <div className="text-neutral-400">→ Syncing database migrations with Supabase RLS... [OK]</div>
              <div className="text-neutral-400">→ Replicating assets to 5 global availability zones... [OK]</div>
              <div className="text-emerald-400 font-bold">✓ DEPLOYMENT SUCCEEDED. Global version live.</div>
            </div>
          ),
        },
      ]);
      setTimeout(() => soundEngine.playSuccess(), 500);
    } else if (cmd === 'matrix') {
      soundEngine.playWarp();
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('toggle-matrix'));
      }
      setHistory((prev) => [
        ...prev,
        {
          id,
          type: 'success',
          text: <div className="text-emerald-400">Matrix neural stream toggled.</div>,
        },
      ]);
    } else if (cmd === 'verify') {
      soundEngine.playVerify();
      setHistory((prev) => [
        ...prev,
        {
          id,
          type: 'success',
          text: (
            <div className="text-xs space-y-1 font-mono">
              <div className="text-cyan-400 font-bold">VERIFYRECEIPT™ FORENSIC CHECK:</div>
              <div className="text-neutral-300">Gateway: Telebirr P2P Rail</div>
              <div className="text-neutral-300">Checksum Validation: Pass (Mod-97 Verified)</div>
              <div className="text-emerald-400 font-bold">Slip authentic. Integrity score: 99.94%</div>
            </div>
          ),
        },
      ]);
    } else if (cmd === 'audio') {
      const state = soundEngine.toggle();
      setHistory((prev) => [
        ...prev,
        {
          id,
          type: 'output',
          text: <div className="text-cyan-400">Synthesizer audio is now {state ? 'ENABLED' : 'DISABLED'}.</div>,
        },
      ]);
    } else if (cmd === 'clear') {
      setHistory([]);
    } else {
      soundEngine.playPulse();
      setHistory((prev) => [
        ...prev,
        {
          id,
          type: 'error',
          text: (
            <div className="text-rose-400 text-xs">
              Command not recognized: &quot;{cmd}&quot;. Type <span className="underline cursor-pointer" onClick={() => executeCommand('help')}>help</span> for available commands.
            </div>
          ),
        },
      ]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  return (
    <section id="terminal" className="py-24 lg:py-32 relative border-b border-slate-200 dark:border-neutral-800 bg-slate-50/70 dark:bg-[#02050c] overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-slate-200 dark:border-neutral-800">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-sky-500/10 dark:bg-cyan-500/10 border border-sky-500/20 dark:border-cyan-500/25 text-sky-700 dark:text-cyan-400 font-mono text-[11px] uppercase tracking-wider mb-3">
              <Terminal className="w-3.5 h-3.5 animate-pulse text-sky-600 dark:text-cyan-400" />
              <span>INTERACTIVE CLI 3.0 // OPERATING ENVIRONMENT</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              Execute Command <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-600 to-cyan-500 dark:from-cyan-400 dark:via-teal-300 dark:to-indigo-400">In Real Time</span>
            </h2>
          </div>

          <p className="text-sm text-slate-600 dark:text-neutral-400 max-w-md leading-relaxed">
            Directly interface with our architecture engine. Benchmark your device compute speed, trigger mock deployments, or visualize cluster health.
          </p>
        </div>

        {/* Quick Command Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-xs font-mono text-slate-500 dark:text-neutral-400 mr-2">QUICK ACTIONS:</span>
          {quickCommands.map((q) => (
            <button
              key={q.cmd}
              onClick={() => executeCommand(q.cmd)}
              className="px-3 py-1.5 rounded-lg bg-white dark:bg-neutral-900/80 hover:bg-slate-100 dark:hover:bg-neutral-800 border border-slate-300 dark:border-neutral-800 hover:border-sky-500/40 dark:hover:border-cyan-500/40 text-xs font-mono text-slate-700 dark:text-neutral-300 hover:text-sky-600 dark:hover:text-cyan-300 transition-all cursor-pointer shadow-xs"
            >
              <span className="text-sky-600 dark:text-cyan-400 font-bold">$</span> {q.cmd}
            </button>
          ))}
        </div>

        {/* Terminal Window Box */}
        <div className="rounded-2xl border border-slate-300 dark:border-neutral-800 bg-[#060a14] shadow-2xl overflow-hidden font-mono text-xs">
          
          {/* Terminal Titlebar */}
          <div className="px-4 py-3 bg-[#0a0f1d] border-b border-neutral-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="text-neutral-400 text-[11px] ml-2">eagle@studio: ~/production/core</span>
            </div>

            <div className="flex items-center gap-2 text-[10px] text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>SESSION ACTIVE [BASH 5.2]</span>
            </div>
          </div>

          {/* Terminal Body Screen */}
          <div className="p-4 sm:p-6 h-[320px] sm:h-[380px] overflow-y-auto space-y-3.5 bg-black/60">
            {history.map((item) => (
              <div key={item.id} className="leading-relaxed">
                {item.type === 'command' ? (
                  <div className="text-neutral-400 font-bold">{item.text}</div>
                ) : (
                  <div>{item.text}</div>
                )}
              </div>
            ))}
            {isExecuting && (
              <div className="text-cyan-400 flex items-center gap-2">
                <RefreshCw className="w-3 h-3 animate-spin" />
                <span>Executing instruction...</span>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Terminal Input Line */}
          <form
            onSubmit={handleSubmit}
            className="p-3 bg-[#0a0f1d] border-t border-neutral-800 flex items-center gap-3"
          >
            <span className="text-emerald-400 font-bold pl-2 select-none">eagle@studio:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type 'help', 'benchmark', 'systems', 'deploy'..."
              className="flex-1 bg-transparent text-white outline-none font-mono text-xs placeholder:text-neutral-500"
            />
            <button
              type="submit"
              className="px-3.5 py-1.5 rounded-lg bg-sky-500/20 hover:bg-sky-500/30 text-sky-400 dark:bg-cyan-500/20 dark:hover:bg-cyan-500/30 dark:text-cyan-300 border border-sky-500/40 dark:border-cyan-500/40 text-[11px] font-bold uppercase transition-colors cursor-pointer"
            >
              EXECUTE
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}
