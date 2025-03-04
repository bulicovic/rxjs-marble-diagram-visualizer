import React from 'react';
import { useMarbleStore } from '../store/marbleStore';
import {
  MapTimeline,
  FilterTimeline,
  MergeTimeline,
  CombineLatestTimeline,
  ConcatTimeline,
  ScanTimeline,
} from './Timeline/index';
import type { Marble as MarbleType } from '../types/marble';

interface TimelineProps {
  marbles: MarbleType[];
  label: string;
  streamId?: number;
  isOutput?: boolean;
}

export const Timeline: React.FC<TimelineProps> = props => {
  const { currentOperator } = useMarbleStore();

  switch (currentOperator) {
    case 'map':
      return <MapTimeline {...props} />;
    case 'filter':
      return <FilterTimeline {...props} />;
    case 'merge':
      return <MergeTimeline {...props} />;
    case 'combineLatest':
      return <CombineLatestTimeline {...props} />;
    case 'concat':
      return <ConcatTimeline {...props} />;
    case 'scan':
      return <ScanTimeline {...props} />;
    default:
      return null;
  }
};
