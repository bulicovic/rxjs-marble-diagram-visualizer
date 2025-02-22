import React from 'react';
import { Plus } from 'lucide-react';
import { useMarbleStore } from '../../../store/marbleStore';
import { generateCombineLatestMarble } from '../../../utils/marbleUtils';

interface TimelineLabelProps {
  label: string;
  streamId?: number;
}

export const CombineLatestTimelineLabel: React.FC<TimelineLabelProps> = ({ label, streamId }) => {
  const { addMarble, isStream3Enabled } = useMarbleStore();

  const handleAddMarble = () => {
    if (!streamId) return;
    const marble = generateCombineLatestMarble(streamId);
    addMarble(streamId, marble);
  };

  const getButtonColor = (id?: number) => {
    switch (id) {
      case 1:
        return 'bg-blue-500 hover:bg-blue-600';
      case 2:
        return 'bg-red-500 hover:bg-red-600';
      case 3:
        return 'bg-purple-500 hover:bg-purple-600';
      default:
        return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  if (streamId === 3 && !isStream3Enabled) {
    return null;
  }

  return (
    <div className="absolute left-0 top-[0px] sm:-left-32 sm:top-1/2 sm:-translate-y-1/2 flex items-center gap-2 z-50">
      {streamId && (
        <button
          onClick={handleAddMarble}
          className={`p-1.5 rounded-full transition-colors ${getButtonColor(streamId)}`}
          title={`Add to ${label}`}
        >
          <Plus size={18} className="text-white" />
        </button>
      )}
      <span className="w-24 text-sm text-gray-600">{label}</span>
    </div>
  );
};