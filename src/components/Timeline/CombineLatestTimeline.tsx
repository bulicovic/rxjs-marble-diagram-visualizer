import React from 'react';
import { Marble } from './Marble';
import { CombineLatestTimelineLabel } from './labels';
import { useMarbleStore } from '../../store/marbleStore';
import type { Marble as MarbleType } from '../../types/marble';

interface TimelineProps {
  marbles: MarbleType[];
  label: string;
  streamId?: number;
  isOutput?: boolean;
}

export const CombineLatestTimeline: React.FC<TimelineProps> = ({
  marbles = [],
  label,
  streamId,
  isOutput = false,
}) => {
  const { isStream3Enabled } = useMarbleStore();

  if (streamId === 3 && !isStream3Enabled) {
    return null;
  }

  return (
    <div className="relative h-24 flex items-center w-full">
      <CombineLatestTimelineLabel label={label} streamId={streamId} />
      <div className="flex-1 relative h-full">
        {/* Horizontal line */}
        <div className="absolute left-0 top-1/2 w-full h-0.5 bg-border" />

        {/* Marbles container */}
        <div className="absolute inset-0">
          {marbles?.map(marble => marble && <Marble key={marble.id} marble={marble} />)}
        </div>
      </div>
    </div>
  );
};
