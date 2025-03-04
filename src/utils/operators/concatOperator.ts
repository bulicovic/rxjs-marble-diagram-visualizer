import { Observable, concat, map, take, endWith, delay } from 'rxjs';
import type { Marble } from '../../types/marble';

export const concatOperator = (
  stream1$: Observable<Marble>,
  stream2$: Observable<Marble>
): Observable<Marble> => {
  const stream1WithEnd$ = stream1$.pipe(take(3), endWith(null));

  const stream2WithEnd$ = stream2$.pipe(take(3), endWith(null));

  return concat(stream1WithEnd$, stream2WithEnd$).pipe(
    delay(1200), // Reduced from 1500ms to 1200ms
    map(marble => {
      if (!marble) return null;
      return {
        ...marble,
        id: `${marble.id}-concat`,
        color: 'rgb(34, 197, 94)',
      };
    })
  );
};
