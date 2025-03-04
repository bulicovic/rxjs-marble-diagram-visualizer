import { useEffect } from 'react';
import { useMarbleStore } from '../store/marbleStore';
import { applyOperator } from '../utils/operators';

export const useMarbleStreams = () => {
  const {
    stream1$,
    stream2$,
    stream3$,
    currentOperator,
    addOutputMarble,
    isStream3Enabled,
    speed,
  } = useMarbleStore();

  useEffect(() => {
    const subscription = applyOperator(
      stream1$,
      stream2$,
      stream3$,
      currentOperator,
      isStream3Enabled,
      speed
    ).subscribe({
      next: marble => {
        if (marble && marble.value !== undefined && marble.value !== null) {
          addOutputMarble({
            ...marble,
            timestamp: Date.now(),
            id: marble.id || Math.random().toString(36).substr(2),
          });
        }
      },
      error: err => console.error('Stream error:', err),
      complete: () => console.log('Stream completed'),
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [stream1$, stream2$, stream3$, currentOperator, isStream3Enabled, speed, addOutputMarble]);
};
