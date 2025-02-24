import React from 'react';
import { Plus } from 'lucide-react';
import { useMarbleStore } from '../../../store/marbleStore';
import { generateFilterMarble } from '../../../utils/marbleUtils';

interface TimelineLabelProps {
  label: string;
  streamId?: number;
}

export const FilterTimelineLabel: React.FC<TimelineLabelProps> = ({ label, streamId }) => {
  const { addMarble } = useMarbleStore();

  const handleAddMarble = () => {
    if (streamId !== 1) return; // Filter only uses Stream 1
    const marble = generateFilterMarble();
    addMarble(streamId, marble);
  };

  return (
    <div className="absolute left-0 top-[0px] sm:-left-32 sm:top-1/2 sm:-translate-y-1/2 flex items-center gap-2 z-50">
      {streamId === 1 && (
        <button
          onClick={handleAddMarble}
          className="p-1.5 rounded-full transition-colors bg-blue-500 hover:bg-blue-600"
          title={`Add to ${label}`}
        >
          <Plus size={18} className="text-white" />
        </button>
      )}
      <span className="w-24 text-sm text-text-muted">{label}</span>
    </div>
  );
};
