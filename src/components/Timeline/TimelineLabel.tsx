import React from 'react';
import { Plus } from 'lucide-react';
import { useMarbleStore } from '../../store/marbleStore';
import {
  generateMapMarble,
  generateFilterMarble,
  generateMergeMarble,
  generateCombineLatestMarble,
  generateConcatMarble,
  generateScanMarble
} from '../../utils/marbleUtils/index';

interface TimelineLabelProps {
  label: string;
  streamId?: number;
}

export const TimelineLabel: React.FC<TimelineLabelProps> = ({ label, streamId }) => {
  const { addMarble, isStream3Enabled, currentOperator } = useMarbleStore();

  const handleAddMarble = () => {
    if (!streamId) return;

    let marble;
    switch (currentOperator) {
      case 'map':
        marble = generateMapMarble();
        break;
      case 'filter':
        marble = generateFilterMarble();
        break;
      case 'merge':
        marble = generateMergeMarble(streamId);
        break;
      case 'combineLatest':
        marble = generateCombineLatestMarble(streamId);
        break;
      case 'concat':
        marble = generateConcatMarble(streamId);
        break;
      case 'scan':
        marble = generateScanMarble();
        break;
      default:
        return;
    }

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

  return (
    <div className="absolute -left-32 top-1/2 -translate-y-1/2 flex items-center gap-2">
      {streamId && (streamId !== 3 || (streamId === 3 && isStream3Enabled)) && (
        <button
          onClick={handleAddMarble}
          className={`p-1.5  bg-purple-600 rounded-full transition-colors ${getButtonColor(streamId)}`}
          title={`Add to ${label}`}
        >
          <Plus size={18} className="text-secondary" />
        </button>
      )}
      <span className="w-24 text-sm text-text-muted">{label}</span>
    </div>
  );
};
