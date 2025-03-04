import { useEffect } from 'react';
import { merge, map } from 'rxjs';
import { useMergeStore } from '../../store/operators/mergeStore';

export const useMergeStream = () => {
  const { stream1$, stream2$, stream3$, isStream3Enabled, addOutputMarble } = useMergeStore();

  useEffect(() => {
    const streams = isStream3Enabled ? [stream1$, stream2$, stream3$] : [stream1$, stream2$];

    const subscription = merge(...streams)
      .pipe(
        map(marble => ({
          ...marble,
          id: `${marble.id}-merged`,
          color: 'rgb(34, 197, 94)',
        }))
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
      });

    return () => subscription.unsubscribe();
  }, [stream1$, stream2$, stream3$, isStream3Enabled, addOutputMarble]);
};
