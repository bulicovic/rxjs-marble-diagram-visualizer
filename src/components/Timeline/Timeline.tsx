import React from 'react';
import { useMarbleStore } from '../../store/marbleStore';
import { StreamMarble } from './StreamMarble';
import { OutputMarble } from './OutputMarble';
import { TimelineLabel } from './TimelineLabel';
import type { Marble as MarbleType } from '../../types/marble';

interface TimelineProps {
  marbles: MarbleType[];
  label: string;
  streamId?: number;
  isOutput?: boolean;
}

export const Timeline: React.FC<TimelineProps> = ({ 
  marbles = [], 
  label,
  streamId,
  isOutput = false
}) => {
  const { isStream3Enabled, emitOutput } = useMarbleStore();
  
  if (streamId === 3 && !isStream3Enabled) {
    return null;
  }

  const handleMarbleCrossLine = (marble: MarbleType) => {
    if (!isOutput && streamId) {
      emitOutput(streamId, marble);
    }
  };

  const MarbleComponent = isOutput ? OutputMarble : StreamMarble;

  return (
    <div className="relative h-24">
      <div className="absolute left-0 top-1/2 w-full h-0.5 bg-gray-300" />
      <TimelineLabel label={label} streamId={streamId} />
      <div className="absolute inset-0">
        {marbles?.map((marble) => (
          marble && (
            <MarbleComponent 
              key={marble.id} 
              marble={marble} 
              onCrossLine={isOutput ? undefined : () => handleMarbleCrossLine(marble)}
            />
          )
        ))}
      </div>
    </div>
  );
};