import { Observable, scan, delay } from 'rxjs';
import type { Marble } from '../../types/marble';
import { getOperatorDelay } from './baseOperator';

export const scanOperator = (
  stream1$: Observable<Marble>,
  speed: number = 1
): Observable<Marble> => {
  let isFirstValue = true;

  return stream1$.pipe(
    delay(getOperatorDelay(speed)),
    scan(
      (acc, marble) => {
        if (isFirstValue) {
          isFirstValue = false;
          return {
            ...marble,
            id: `${marble.id}-scanned`,
            color: 'rgb(34, 197, 94)',
          };
        }

        try {
          return {
            ...marble,
            id: `${marble.id}-scanned`,
            value:
              typeof acc.value === 'number' && typeof marble.value === 'number'
                ? acc.value + marble.value
                : marble.value,
            color: 'rgb(34, 197, 94)',
          };
        } catch (error) {
          throw error;
        }
      },
      {
        id: '',
        value: 0,
        timestamp: Date.now(),
        color: 'rgb(34, 197, 94)',
      }
    )
  );
};
