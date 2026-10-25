'use client';

import { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { soundEngine } from '@/lib/sound';

export default function AudioToggle() {
  const [enabled, setEnabled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setEnabled(soundEngine.getEnabled());
    const unsub = soundEngine.subscribe(setEnabled);
    return () => unsub();
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => soundEngine.toggle()}
      title={enabled ? 'Mute Studio Audio FX' : 'Enable Studio Audio FX'}
      aria-label="Toggle studio sound effects"
      className="p-2 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#11141c] text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
    >
      {enabled ? <Volume2 className="w-4 h-4 text-[#0099ff]" /> : <VolumeX className="w-4 h-4" />}
    </button>
  );
}
