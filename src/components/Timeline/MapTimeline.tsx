import React from 'react';
import { Marble } from './Marble';
import { MapTimelineLabel } from './labels';
import type { Marble as MarbleType } from '../../types/marble';

interface TimelineProps {
  marbles: MarbleType[];
  label: string;
  streamId?: number;
  isOutput?: boolean;
}

export const MapTimeline: React.FC<TimelineProps> = ({ 
  marbles = [], 
  label,
  streamId,
  isOutput = false
}) => {
  // Map only shows Stream 1
  if (streamId && streamId !== 1 && !isOutput) {
    return null;
  }

  return (
    <div className="relative h-24 flex items-center w-full">
      <MapTimelineLabel label={label} streamId={streamId} />
      <div className="flex-1 relative h-full">
        {/* Horizontal line */}
        <div className="absolute left-0 top-1/2 w-full h-0.5 bg-gray-300" />
        
        {/* Marbles container */}
        <div className="absolute inset-0">
          {marbles?.map((marble) => (
            marble && <Marble key={marble.id} marble={marble} />
          ))}
        </div>
      </div>
    </div>
  );
};