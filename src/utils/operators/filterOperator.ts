import { Observable, filter, map, delay } from 'rxjs';
import type { Marble } from '../../types/marble';
import { getOperatorDelay } from './baseOperator';

export const filterOperator = (
  stream1$: Observable<Marble>,
  speed: number = 1
): Observable<Marble> => {
  return stream1$.pipe(
    delay(getOperatorDelay(speed)),
    filter(marble => typeof marble.value === 'number' && marble.value % 2 === 1),
    map(marble => ({
      ...marble,
      id: `${marble.id}-filtered`,
      color: 'rgb(34, 197, 94)',
    }))
  );
};
