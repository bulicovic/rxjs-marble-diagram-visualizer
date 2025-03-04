import React from 'react';
import { BaseTimeline } from './BaseTimeline';
import { useScanStore } from '../../store/operators/scanStore';
import { useScanStream } from '../../hooks/operators/useScanStream';

export const ScanTimeline: React.FC = () => {
  const { stream1Marbles, stream2Marbles, stream3Marbles, outputMarbles, isStream3Enabled } =
    useScanStore();

  useScanStream();

  return (
    <BaseTimeline
      stream1Marbles={stream1Marbles}
      stream2Marbles={stream2Marbles}
      stream3Marbles={stream3Marbles}
      outputMarbles={outputMarbles}
      operatorName="scan"
      isStream3Enabled={isStream3Enabled}
    />
  );
};
