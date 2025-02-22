import React from 'react';
import { BaseTimeline } from './BaseTimeline';
import { useFilterStore } from '../../store/operators/filterStore';
import { useFilterStream } from '../../hooks/operators/useFilterStream';

export const FilterTimeline: React.FC = () => {
  const { 
    stream1Marbles,
    stream2Marbles,
    stream3Marbles,
    outputMarbles,
    isStream3Enabled
  } = useFilterStore();

  useFilterStream();

  return (
    <BaseTimeline
      stream1Marbles={stream1Marbles}
      stream2Marbles={stream2Marbles}
      stream3Marbles={stream3Marbles}
      outputMarbles={outputMarbles}
      operatorName="filter"
      isStream3Enabled={isStream3Enabled}
    />
  );
};