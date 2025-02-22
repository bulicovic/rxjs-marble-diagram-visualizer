import { useEffect } from 'react';
import { concat, take, endWith, map } from 'rxjs';
import { useConcatStore } from '../../store/operators/concatStore';

export const useConcatStream = () => {
  const { 
    stream1$,
    stream2$,
    addOutputMarble
  } = useConcatStore();

  useEffect(() => {
    const stream1WithEnd$ = stream1$.pipe(
      take(3),
      endWith(null)
    );

    const stream2WithEnd$ = stream2$.pipe(
      take(3),
      endWith(null)
    );

    const subscription = concat(stream1WithEnd$, stream2WithEnd$).pipe(
      map(marble => {
        if (!marble) return null;
        return {
          ...marble,
          id: `${marble.id}-concat`,
          color: 'rgb(34, 197, 94)'
        };
      })
    ).subscribe({
      next: marble => {
        if (marble) {
          addOutputMarble({
            ...marble,
            timestamp: Date.now(),
            id: marble.id || Math.random().toString(36).substr(2),
          });
        }
      }
    });

    return () => subscription.unsubscribe();
  }, [stream1$, stream2$, addOutputMarble]);
};