import { useEffect } from 'react';
import { combineLatest, map } from 'rxjs';
import { useCombineLatestStore } from '../../store/operators/combineLatestStore';

export const useCombineLatestStream = () => {
  const { 
    stream1$,
    stream2$,
    stream3$,
    isStream3Enabled,
    addOutputMarble
  } = useCombineLatestStore();

  useEffect(() => {
    const streams$ = isStream3Enabled 
      ? { s1: stream1$, s2: stream2$, s3: stream3$ }
      : { s1: stream1$, s2: stream2$ };

    const subscription = combineLatest(streams$).pipe(
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
    ).subscribe({
      next: marble => {
        if (marble && marble.value !== undefined && marble.value !== null) {
          addOutputMarble({
            ...marble,
            timestamp: Date.now(),
            id: marble.id || Math.random().toString(36).substr(2),
          });
        }
      }
    });

    return () => subscription.unsubscribe();
  }, [stream1$, stream2$, stream3$, isStream3Enabled, addOutputMarble]);
};