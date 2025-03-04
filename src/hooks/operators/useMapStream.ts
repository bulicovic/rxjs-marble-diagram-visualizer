import { useEffect } from 'react';
import { map } from 'rxjs';
import { useMapStore } from '../../store/operators/mapStore';

export const useMapStream = () => {
  const { stream1$, addOutputMarble } = useMapStore();

  useEffect(() => {
    const subscription = stream1$
      .pipe(
        map(marble => ({
          ...marble,
          id: `${marble.id}-mapped`,
          value:
            typeof marble.value === 'string'
              ? marble.value.toString().toLowerCase()
              : marble.value * 10,
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
  }, [stream1$, addOutputMarble]);
};
