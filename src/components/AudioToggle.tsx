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
      className="p-1.5 rounded text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors cursor-pointer"
    >
      {enabled ? <Volume2 className="w-4 h-4 text-neutral-950 dark:text-white" /> : <VolumeX className="w-4 h-4" />}
    </button>
  );
}
