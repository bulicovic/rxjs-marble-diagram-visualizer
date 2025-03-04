import React from 'react';
import { Gauge } from 'lucide-react';
import { useMarbleStore } from '../store/marbleStore';

export const SpeedControl: React.FC = () => {
  const { speed, setSpeed } = useMarbleStore();

  return (
    <div className="flex items-center gap-2">
      <Gauge size={20} className="text-text-muted" />
      <input
        type="range"
        min="0.5"
        max="3"
        step="0.5"
        value={speed}
        onChange={e => setSpeed(parseFloat(e.target.value))}
        className="w-24 h-2 bg-border rounded-lg appearance-none cursor-pointer"
      />
      <span className="text-sm text-text-muted min-w-12">{speed}x</span>
    </div>
  );
};
