import React from 'react';
import { BaseTimeline } from './BaseTimeline';
import { useConcatStore } from '../../store/operators/concatStore';
import { useConcatStream } from '../../hooks/operators/useConcatStream';

export const ConcatTimeline: React.FC = () => {
  const { 
    stream1Marbles,
    stream2Marbles,
    stream3Marbles,
    outputMarbles,
    isStream3Enabled
  } = useConcatStore();

  useConcatStream();

  return (
    <BaseTimeline
      stream1Marbles={stream1Marbles}
      stream2Marbles={stream2Marbles}
      stream3Marbles={stream3Marbles}
      outputMarbles={outputMarbles}
      operatorName="concat"
      isStream3Enabled={isStream3Enabled}
    />
  );
};