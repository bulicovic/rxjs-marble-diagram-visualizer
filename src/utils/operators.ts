import { Observable } from 'rxjs';
import type { Marble, RxJSOperator } from '../types/marble';
import {
  mapOperator,
  filterOperator,
  mergeOperator,
  combineLatestOperator,
  concatOperator,
  scanOperator
} from './operators/index';

export const applyOperator = (
  stream1$: Observable<Marble>,
  stream2$: Observable<Marble>,
  stream3$: Observable<Marble>,
  operator: RxJSOperator,
  isStream3Enabled: boolean,
  speed: number = 1
): Observable<Marble> => {
  switch (operator) {
    case 'map':
      return mapOperator(stream1$, speed);
    case 'filter':
      return filterOperator(stream1$, speed);
    case 'merge':
      return mergeOperator(stream1$, stream2$, stream3$, isStream3Enabled, speed);
    case 'combineLatest':
      return combineLatestOperator(stream1$, stream2$, stream3$, isStream3Enabled, speed);
    case 'concat':
      return concatOperator(stream1$, stream2$);
    case 'scan':
      return scanOperator(stream1$, speed);
    default:
      return stream1$;
  }
};