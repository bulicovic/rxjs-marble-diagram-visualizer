import React from 'react';
import { BaseTimeline } from './BaseTimeline';
import { useMergeStore } from '../../store/operators/mergeStore';
import { useMergeStream } from '../../hooks/operators/useMergeStream';

export const MergeTimeline: React.FC = () => {
  const { stream1Marbles, stream2Marbles, stream3Marbles, outputMarbles, isStream3Enabled } =
    useMergeStore();

  useMergeStream();

  return (
    <BaseTimeline
      stream1Marbles={stream1Marbles}
      stream2Marbles={stream2Marbles}
      stream3Marbles={stream3Marbles}
      outputMarbles={outputMarbles}
      operatorName="merge"
      isStream3Enabled={isStream3Enabled}
    />
  );
};
