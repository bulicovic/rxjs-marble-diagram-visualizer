import { Observable, map, delay } from 'rxjs';
import type { Marble } from '../../types/marble';
import { getOperatorDelay } from './baseOperator';

export const mapOperator = (
  stream1$: Observable<Marble>,
  speed: number = 1
): Observable<Marble> => {
  return stream1$.pipe(
    delay(getOperatorDelay(speed)),
    map(marble => ({
      ...marble,
      id: `${marble.id}-mapped`,
      value:
        typeof marble.value === 'string'
          ? marble.value.toString().toLowerCase()
          : marble.value * 10,
      color: 'rgb(34, 197, 94)',
    }))
  );
};
