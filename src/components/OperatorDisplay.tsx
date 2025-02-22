import React from 'react';
import { useMarbleStore } from '../store/marbleStore';
import {
  MapDisplay,
  FilterDisplay,
  MergeDisplay,
  CombineLatestDisplay,
  ConcatDisplay,
  ScanDisplay
} from './operators/displays';

export const OperatorDisplay: React.FC = () => {
  const { currentOperator } = useMarbleStore();

  switch (currentOperator) {
    case 'map':
      return <MapDisplay />;
    case 'filter':
      return <FilterDisplay />;
    case 'merge':
      return <MergeDisplay />;
    case 'combineLatest':
      return <CombineLatestDisplay />;
    case 'concat':
      return <ConcatDisplay />;
    case 'scan':
      return <ScanDisplay />;
    default:
      return null;
  }
};