import { useEffect } from 'react';
import { scan } from 'rxjs';
import { useScanStore } from '../../store/operators/scanStore';

export const useScanStream = () => {
  const { stream1$, addOutputMarble } = useScanStore();

  useEffect(() => {
    let isFirstValue = true;

    const subscription = stream1$
      .pipe(
        scan((acc, marble) => {
          // For first value, if no seed is provided
          // we use the first value as initial state but with green color
          if (isFirstValue) {
            isFirstValue = false;
            return {
              ...marble,
              id: `${marble.id}-scanned`,
              color: 'rgb(34, 197, 94)', // Always green for output
            };
          }

          // For subsequent values, accumulate using the operator
          try {
            return {
              ...marble,
              id: `${marble.id}-scanned`,
              value:
                typeof acc.value === 'number' && typeof marble.value === 'number'
                  ? acc.value + marble.value
                  : marble.value,
              color: 'rgb(34, 197, 94)', // Always green for output
            };
          } catch (error) {
            // If accumulator throws, the process ends
            throw error;
          }
        })
      )
      .subscribe({
        next: marble => {
          if (marble && marble.value !== undefined && marble.value !== null) {
            addOutputMarble({
              ...marble,
              timestamp: Date.now(),
              id: marble.id || Math.random().toString(36).substr(2),
            });
          }
        },
        error: error => {
          console.error('Scan operator error:', error);
        },
      });

    return () => subscription.unsubscribe();
  }, [stream1$, addOutputMarble]);
};
