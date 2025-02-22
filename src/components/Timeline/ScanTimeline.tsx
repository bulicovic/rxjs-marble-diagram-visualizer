import React from 'react';
import { Marble } from './Marble';
import { ScanTimelineLabel } from './labels';
import type { Marble as MarbleType } from '../../types/marble';

interface TimelineProps {
  marbles: MarbleType[];
  label: string;
  streamId?: number;
  isOutput?: boolean;
}

export const ScanTimeline: React.FC<TimelineProps> = ({ 
  marbles = [], 
  label,
  streamId,
  isOutput = false
}) => {
  // Scan only shows Stream 1
  if (streamId && streamId !== 1 && !isOutput) {
    return null;
  }

  return (
    <div className="relative h-24 flex items-center w-full">
      <ScanTimelineLabel label={label} streamId={streamId} />
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