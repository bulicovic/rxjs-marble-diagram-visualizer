import React from 'react';
import { Timeline } from '../Timeline';
import { OperatorDisplay } from '../OperatorDisplay';
import type { Marble } from '../../types/marble';

interface BaseTimelineProps {
  stream1Marbles: Marble[];
  stream2Marbles: Marble[];
  stream3Marbles: Marble[];
  outputMarbles: Marble[];
  operatorName: string;
  isStream3Enabled: boolean;
}

export const BaseTimeline: React.FC<BaseTimelineProps> = ({
  stream1Marbles,
  stream2Marbles,
  stream3Marbles,
  outputMarbles,
  operatorName,
  isStream3Enabled
}) => {
  return (
    <div className="bg-secondary rounded-lg shadow-banner p-8 space-y-8">
      <Timeline marbles={stream1Marbles} label="Stream 1" streamId={1} />
      <Timeline marbles={stream2Marbles} label="Stream 2" streamId={2} />
      {isStream3Enabled && (
        <Timeline marbles={stream3Marbles} label="Stream 3" streamId={3} />
      )}
      <OperatorDisplay operator={operatorName} />
      <Timeline marbles={outputMarbles} label="Output" isOutput />
    </div>
  );
};
