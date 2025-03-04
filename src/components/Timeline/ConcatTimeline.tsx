import React from 'react';
import { Marble } from './Marble';
import { TimelineLabel } from './TimelineLabel';
import type { Marble as MarbleType } from '../../types/marble';

interface TimelineProps {
  marbles: MarbleType[];
  label: string;
  streamId?: number;
  isOutput?: boolean;
}

export const ConcatTimeline: React.FC<TimelineProps> = ({
  marbles = [],
  label,
  streamId,
  isOutput = false,
}) => {
  // Only show Stream 1, Stream 2, and Output
  if (streamId === 3) {
    return null;
  }

  return (
    <div className="relative h-20 flex items-center w-full">
      <TimelineLabel label={label} streamId={streamId} />
      <div className="flex-1 relative">
        <div className="absolute left-0 top-1/2 w-full h-0.5 bg-border" />
        <div className="absolute inset-0">
          {marbles?.map(marble => marble && <Marble key={marble.id} marble={marble} />)}
        </div>
      </div>
    </div>
  );
};
