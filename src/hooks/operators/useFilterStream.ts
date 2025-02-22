import { useEffect } from 'react';
import { filter, map } from 'rxjs';
import { useFilterStore } from '../../store/operators/filterStore';

export const useFilterStream = () => {
  const { 
    stream1$,
    addOutputMarble
  } = useFilterStore();

  useEffect(() => {
    const subscription = stream1$.pipe(
      filter(marble => typeof marble.value === 'number' ? marble.value % 2 === 0 : true),
      map(marble => ({
        ...marble,
        id: `${marble.id}-filtered`,
        color: 'rgb(34, 197, 94)'
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
  }, [stream1$, addOutputMarble]);
};