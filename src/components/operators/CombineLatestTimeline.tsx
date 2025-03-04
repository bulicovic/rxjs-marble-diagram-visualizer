import React from 'react';
import { BaseTimeline } from './BaseTimeline';
import { useCombineLatestStore } from '../../store/operators/combineLatestStore';
import { useCombineLatestStream } from '../../hooks/operators/useCombineLatestStream';

export const CombineLatestTimeline: React.FC = () => {
  const { stream1Marbles, stream2Marbles, stream3Marbles, outputMarbles, isStream3Enabled } =
    useCombineLatestStore();

  useCombineLatestStream();

  return (
    <BaseTimeline
      stream1Marbles={stream1Marbles}
      stream2Marbles={stream2Marbles}
      stream3Marbles={stream3Marbles}
      outputMarbles={outputMarbles}
      operatorName="combineLatest"
      isStream3Enabled={isStream3Enabled}
    />
  );
};
