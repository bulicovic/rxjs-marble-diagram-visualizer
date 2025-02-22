import React from 'react';
import { BaseTimeline } from './BaseTimeline';
import { useMapStore } from '../../store/operators/mapStore';
import { useMapStream } from '../../hooks/operators/useMapStream';

export const MapTimeline: React.FC = () => {
  const { 
    stream1Marbles,
    stream2Marbles,
    stream3Marbles,
    outputMarbles,
    isStream3Enabled
  } = useMapStore();

  useMapStream();

  return (
    <BaseTimeline
      stream1Marbles={stream1Marbles}
      stream2Marbles={[]} // Empty array since we don't use Stream 2
      stream3Marbles={stream3Marbles}
      outputMarbles={outputMarbles}
      operatorName="map"
      isStream3Enabled={isStream3Enabled}
    />
  );
};