import React from 'react';
import { useMarbleStore } from '../store/marbleStore';
import type { Marble as MarbleType, RxJSOperator } from '../types/marble';
import { Marble } from './Timeline/Marble';
import {
  CombineLatestTimelineLabel,
  FilterTimelineLabel,
  MapTimelineLabel,
  MergeTimelineLabel,
  ScanTimelineLabel,
} from './Timeline/labels';
import { TimelineLabel } from './Timeline/TimelineLabel';

interface TimelineProps {
  marbles: MarbleType[];
  label: string;
  streamId?: number;
  isOutput?: boolean;
}

function selectRxJSOperatorComponent(currentOperator: RxJSOperator, props: TimelineProps) {
  switch (currentOperator) {
    case 'map':
      return <MapTimelineLabel label={props.label} streamId={props.streamId} />;
    case 'filter':
      return <FilterTimelineLabel label={props.label} streamId={props.streamId} />;
    case 'merge':
      return <MergeTimelineLabel label={props.label} streamId={props.streamId} />;
    case 'combineLatest':
      return <CombineLatestTimelineLabel label={props.label} streamId={props.streamId} />;
    case 'concat':
      return <TimelineLabel label={props.label} streamId={props.streamId} />;
    case 'scan':
      return <ScanTimelineLabel label={props.label} streamId={props.streamId} />;
    default:
      return null;
  }
}

export const Timeline: React.FC<TimelineProps> = props => {
  const { currentOperator } = useMarbleStore();
  const rxJSOperatorComponent = selectRxJSOperatorComponent(currentOperator, props);
  return (
    <div className="relative h-24 flex items-center w-full">
      {rxJSOperatorComponent}
      <div className="flex-1 relative h-full">
        {/* Horizontal line */}
        <div className="absolute left-0 top-1/2 w-full h-0.5 bg-border" />

        {/* Marbles container */}
        <div className="absolute inset-0">
          {props.marbles?.map(marble => marble && <Marble key={marble.id} marble={marble} />)}
        </div>
      </div>
    </div>
  );
};
