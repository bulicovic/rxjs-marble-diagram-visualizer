import { Observable, merge, map, delay } from 'rxjs';
import type { Marble } from '../../types/marble';
import { getOperatorDelay } from './baseOperator';

export const mergeOperator = (
  stream1$: Observable<Marble>,
  stream2$: Observable<Marble>,
  stream3$: Observable<Marble>,
  isStream3Enabled: boolean,
  speed: number = 1
): Observable<Marble> => {
  const streams = isStream3Enabled ? [stream1$, stream2$, stream3$] : [stream1$, stream2$];

  return merge(...streams).pipe(
    delay(getOperatorDelay(speed)),
    map(marble => ({
      ...marble,
      id: `${marble.id}-merged`,
      color: 'rgb(34, 197, 94)',
    }))
  );
};
