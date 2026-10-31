'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ShieldAlert, Scan, CheckCircle2, AlertTriangle, FileText, Sparkles, RefreshCw } from 'lucide-react';
import { soundEngine } from '@/lib/sound';

interface SampleSlip {
  id: string;
  name: string;
  gateway: 'telebirr' | 'cbe' | 'forgery';
  isTampered: boolean;
  amount: string;
  txId: string;
  timestamp: string;
  sender: string;
  receiver: string;
  tamperReason?: string;
  confidence: number;
}

const SAMPLE_SLIPS: SampleSlip[] = [
  {
    id: 'tb_valid',
    name: 'Telebirr P2P Valid Slip',
    gateway: 'telebirr',
    isTampered: false,
    amount: 'ETB 14,500.00',
    txId: 'TB992810481284',
    timestamp: '2026-10-31 11:42:09 EAT',
    sender: 'Kaleb Tadesse (+25191****412)',
    receiver: 'Eagle Pathway Tech (+25192****889)',
    confidence: 99.94,
  },
  {
    id: 'cbe_valid',
    name: 'CBE Birr Digital Transfer',
    gateway: 'cbe',
    isTampered: false,
    amount: 'ETB 85,000.00',
    txId: 'FT2430198421098',
    timestamp: '2026-10-31 09:15:33 EAT',
    sender: 'Selamawit Bekele (1000****4912)',
    receiver: 'Eagle Pathway Systems (1000****001)',
    confidence: 99.88,
  },
  {
    id: 'forgery_detected',
    name: 'Photoshop Tampered Forgery',
    gateway: 'forgery',
    isTampered: true,
    amount: 'ETB 140,000.00 (Altered from 140.00)',
    txId: 'TB992810481284 (Replayed ID)',
    timestamp: '2026-10-31 12:01:00 EAT',
    sender: 'Unknown Origin IP',
    receiver: 'Eagle Pathway Merchant',
    tamperReason: 'Kerning compression artifact detected on "ETB 140,000.00". Transaction ID checksum failed modulo-97.',
    confidence: 99.98,
  },
];

export default function VerifyReceiptLab() {
  const [activeSlipId, setActiveSlipId] = useState<string>('tb_valid');
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [scanComplete, setScanComplete] = useState<boolean>(true);

  const currentSlip = SAMPLE_SLIPS.find((s) => s.id === activeSlipId) || SAMPLE_SLIPS[0];

  const handleSelectSlip = (id: string) => {
    soundEngine.playSwitch();
    setActiveSlipId(id);
    setIsScanning(true);
    setScanComplete(false);
    soundEngine.playLaserScan();

    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
      const selected = SAMPLE_SLIPS.find((s) => s.id === id);
      if (selected?.isTampered) {
        soundEngine.playPulse();
      } else {
        soundEngine.playSuccess();
      }
    }, 1100);
  };

  const reScan = () => {
    handleSelectSlip(activeSlipId);
  };

  return (
    <section id="verify-receipt" className="py-24 lg:py-32 relative border-b border-slate-200 dark:border-neutral-800 bg-white dark:bg-[#030611] overflow-hidden transition-colors">
      
      {/* Background ambient beam */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-sky-500/10 dark:bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-slate-200 dark:border-neutral-800">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-700 dark:text-emerald-400 font-mono text-[11px] uppercase tracking-wider mb-3">
              <Scan className="w-3.5 h-3.5 animate-pulse text-emerald-600 dark:text-emerald-400" />
              <span>FORENSIC DEFENSE // VERIFYRECEIPT™ LABORATORY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              Zero-Trust <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 dark:from-emerald-400 dark:via-cyan-300 dark:to-indigo-400">Transaction Slip Defense</span>
            </h2>
          </div>

          <p className="text-sm text-slate-600 dark:text-neutral-400 max-w-md leading-relaxed">
            Eliminate payment fraud from forged screenshots. Our offline-capable heuristic parser dissects font typography, kerning artifacts, and transaction math in sub-45ms.
          </p>
        </div>

        {/* Interactive Forensic Suite */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Sample Selector & Raw Slip Visualizer */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Slip Buttons */}
            <div className="flex flex-wrap gap-2">
              {SAMPLE_SLIPS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => handleSelectSlip(s.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all flex items-center gap-2 cursor-pointer ${
                    activeSlipId === s.id
                      ? s.isTampered
                        ? 'bg-rose-500/15 text-rose-700 dark:bg-rose-500/20 dark:text-rose-300 border border-rose-500/50 shadow-xs'
                        : 'bg-sky-500/15 text-sky-700 dark:bg-cyan-500/20 dark:text-cyan-300 border border-sky-500/50 dark:border-cyan-500/50 shadow-xs'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-600 dark:bg-neutral-900/60 dark:hover:bg-neutral-800 dark:text-neutral-400 border border-slate-200 dark:border-neutral-800'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{s.name}</span>
                </button>
              ))}
            </div>

            {/* The Virtual Receipt Document Container with Laser Sweep */}
            <div className="relative rounded-2xl border border-slate-200 dark:border-neutral-800 bg-slate-50 dark:bg-[#080d1a] p-6 sm:p-8 shadow-xl overflow-hidden">
              
              {/* Laser Scanning Line */}
              {isScanning && (
                <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-sky-500 dark:via-cyan-400 to-transparent shadow-[0_0_20px_#00f0ff] z-30 animate-laser pointer-events-none" />
              )}

              {/* Watermark Receipt Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-neutral-800/80 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-sky-500/10 dark:bg-cyan-500/20 text-sky-600 dark:text-cyan-400 flex items-center justify-center font-mono font-bold text-xs border border-sky-500/30 dark:border-cyan-500/30">
                    VR
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      {currentSlip.gateway === 'telebirr' ? 'TELEBIRR DIGITAL RECEIPT' : currentSlip.gateway === 'cbe' ? 'CBE BIRR TRANSACTION' : 'DIGITAL RECEIPT SUBMISSION'}
                    </div>
                    <div className="text-[10px] font-mono text-slate-500 dark:text-neutral-400">HASH: SHA256-D7E99A...</div>
                  </div>
                </div>

                <button
                  onClick={reScan}
                  disabled={isScanning}
                  title="Re-run Forensic Analysis"
                  className="p-1.5 rounded-lg border border-slate-300 dark:border-neutral-800 text-slate-500 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-neutral-700 transition-colors cursor-pointer"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isScanning ? 'animate-spin text-sky-600 dark:text-cyan-400' : ''}`} />
                </button>
              </div>

              {/* Amount Display with Kerning Inspection Aura */}
              <div className={`p-4 rounded-xl border mb-6 relative overflow-hidden transition-all ${
                currentSlip.isTampered
                  ? 'bg-rose-50 border-rose-300 text-rose-900 dark:bg-rose-950/20 dark:border-rose-500/40 dark:text-rose-300'
                  : 'bg-white border-slate-200 text-slate-900 dark:bg-neutral-900/40 dark:border-neutral-800 dark:text-white'
              }`}>
                <div className="text-[10px] font-mono uppercase text-slate-500 dark:text-neutral-400 tracking-wider">Transaction Amount</div>
                <div className="text-3xl font-black font-mono mt-1 tracking-tight">
                  {currentSlip.amount}
                </div>
                {currentSlip.isTampered && (
                  <div className="mt-2 text-[11px] font-mono text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                    <span>Micro-pixel kerning mismatch: altered glyph weight</span>
                  </div>
                )}
              </div>

              {/* Transaction Key-Value Ledger */}
              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between py-1.5 border-b border-slate-200 dark:border-neutral-850">
                  <span className="text-slate-500 dark:text-neutral-400">Transaction ID:</span>
                  <span className="text-slate-900 dark:text-white font-medium">{currentSlip.txId}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-200 dark:border-neutral-850">
                  <span className="text-slate-500 dark:text-neutral-400">Timestamp:</span>
                  <span className="text-slate-700 dark:text-neutral-300">{currentSlip.timestamp}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-200 dark:border-neutral-850">
                  <span className="text-slate-500 dark:text-neutral-400">Payer Identity:</span>
                  <span className="text-slate-700 dark:text-neutral-300">{currentSlip.sender}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-200 dark:border-neutral-850">
                  <span className="text-slate-500 dark:text-neutral-400">Recipient Account:</span>
                  <span className="text-slate-700 dark:text-neutral-300">{currentSlip.receiver}</span>
                </div>
              </div>

              {/* Status Ribbon */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-neutral-800 flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-500 dark:text-neutral-400">ENGINE EXEC TIME:</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">38ms (OFFLINE BINARY)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Forensic Audit Telemetry */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Real-time Security Verdict Card */}
            <div className={`p-6 sm:p-8 rounded-2xl border backdrop-blur-xl transition-all shadow-xl ${
              currentSlip.isTampered
                ? 'bg-rose-50/90 border-rose-200 text-rose-950 dark:bg-rose-950/20 dark:border-rose-500/40 dark:text-rose-300'
                : 'bg-emerald-50/90 border-emerald-200 text-emerald-950 dark:bg-emerald-950/20 dark:border-emerald-500/40 dark:text-emerald-300'
            }`}>
              <div className="flex items-center gap-3 mb-4">
                {currentSlip.isTampered ? (
                  <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-600 dark:text-rose-400 flex items-center justify-center border border-rose-500/30">
                    <ShieldAlert className="w-6 h-6 animate-pulse" />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                )}

                <div>
                  <div className={`text-sm font-mono font-bold uppercase tracking-wider ${
                    currentSlip.isTampered ? 'text-rose-700 dark:text-rose-400' : 'text-emerald-700 dark:text-emerald-400'
                  }`}>
                    {currentSlip.isTampered ? 'CRITICAL FRAUD DETECTED' : 'RECEIPT AUTHENTIC & VERIFIED'}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-neutral-400 font-mono">
                    CONFIDENCE SCORE: {currentSlip.confidence}%
                  </div>
                </div>
              </div>

              {currentSlip.isTampered ? (
                <div className="p-4 rounded-xl bg-white/80 dark:bg-rose-950/30 border border-rose-300 dark:border-rose-500/30 text-rose-900 dark:text-rose-200 text-xs font-mono leading-relaxed">
                  <div className="font-bold mb-1 flex items-center gap-1.5 text-rose-700 dark:text-rose-400">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    TAMPER VERDICT:
                  </div>
                  {currentSlip.tamperReason}
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-white/80 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-500/30 text-emerald-900 dark:text-emerald-200 text-xs font-mono leading-relaxed">
                  <div className="font-bold mb-1 flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    INTEGRITY CONFIRMED:
                  </div>
                  Slip typography matches original font metrics. Transaction ID conforms to bank checksum. No spatial tampering found.
                </div>
              )}

              {/* 4 Forensic Check Tickers */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                <div className="p-3 rounded-xl bg-white/90 dark:bg-neutral-900/60 border border-slate-200 dark:border-neutral-800">
                  <div className="text-[10px] font-mono text-slate-500 dark:text-neutral-400 uppercase">Kerning Distortion</div>
                  <div className={`text-sm font-bold font-mono mt-0.5 ${currentSlip.isTampered ? 'text-rose-600 dark:text-rose-400' : 'text-emerald-600 dark:text-emerald-400'}`}>
                    {currentSlip.isTampered ? '0.84 (ANOMALY)' : '0.02 (MATCH)'}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/90 dark:bg-neutral-900/60 border border-slate-200 dark:border-neutral-800">
                  <div className="text-[10px] font-mono text-slate-500 dark:text-neutral-400 uppercase">Checksum Valid</div>
                  <div className={`text-sm font-bold font-mono mt-0.5 ${currentSlip.isTampered ? 'text-rose-600 dark:text-rose-400' : 'text-emerald-600 dark:text-emerald-400'}`}>
                    {currentSlip.isTampered ? 'FAILED MOD-97' : 'PASS (100%)'}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/90 dark:bg-neutral-900/60 border border-slate-200 dark:border-neutral-800">
                  <div className="text-[10px] font-mono text-slate-500 dark:text-neutral-400 uppercase">Gateway Coverage</div>
                  <div className="text-sm font-bold font-mono text-sky-600 dark:text-cyan-400 mt-0.5">Telebirr • CBE • Awash</div>
                </div>

                <div className="p-3 rounded-xl bg-white/90 dark:bg-neutral-900/60 border border-slate-200 dark:border-neutral-800">
                  <div className="text-[10px] font-mono text-slate-500 dark:text-neutral-400 uppercase">Architecture</div>
                  <div className="text-sm font-bold font-mono text-slate-900 dark:text-white mt-0.5">Dart / Flutter / Rust</div>
                </div>
              </div>

            </div>

            {/* Integration Callout */}
            <div className="p-5 rounded-2xl border border-slate-200 dark:border-neutral-800 bg-slate-50 dark:bg-neutral-950/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white font-mono">Available as High-Throughput REST API & SDK</div>
                <div className="text-[11px] text-slate-500 dark:text-neutral-400 mt-0.5">Integrate into Telegram bots, ERP checkouts, and mobile POS systems.</div>
              </div>
              <a
                href="#contact"
                onClick={() => soundEngine.playClick()}
                className="px-4 py-2 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 dark:bg-cyan-500/10 dark:hover:bg-cyan-500/20 text-sky-700 dark:text-cyan-300 border border-sky-500/30 dark:border-cyan-500/30 text-xs font-mono font-medium transition-colors whitespace-nowrap cursor-pointer text-center"
              >
                Request SDK Access →
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
