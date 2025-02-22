import { Observable, combineLatest, map, delay } from 'rxjs';
import type { Marble } from '../../types/marble';
import { getOperatorDelay } from './baseOperator';

export const combineLatestOperator = (
  stream1$: Observable<Marble>,
  stream2$: Observable<Marble>,
  stream3$: Observable<Marble>,
  isStream3Enabled: boolean,
  speed: number = 1
): Observable<Marble> => {
  const streams$ = isStream3Enabled 
    ? { s1: stream1$, s2: stream2$, s3: stream3$ }
    : { s1: stream1$, s2: stream2$ };

  return combineLatest(streams$).pipe(
    delay(getOperatorDelay(speed)),
    map(combined => ({
      id: Object.values(combined).map(m => m.id).join('-'),
      value: Object.values(combined).map(m => m.value).join(''),
      timestamp: Date.now(),
      color: 'rgb(34, 197, 94)',
      sourceValues: {
        stream1: combined.s1.value,
        stream2: combined.s2.value,
        stream3: isStream3Enabled ? combined.s3.value : ''
      }
    }))
  );
};