export interface Marble {
  id: string;
  value: string | number;
  timestamp: number;
  color: string;
  sourceValues?: {
    stream1: string | number;
    stream2: string | number;
    stream3?: string | number;
  };
}

export type RxJSOperator = 'map' | 'filter' | 'merge' | 'combineLatest' | 'concat' | 'scan';
