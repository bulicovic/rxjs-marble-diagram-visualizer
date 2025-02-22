import { useEffect } from 'react';
import { useMarbleStore } from '../store/marbleStore';
import { generateMarble } from '../utils/marbleUtils';

export const useMarbleEmitter = () => {
  const { isPlaying, speed, addMarble } = useMarbleStore();

  useEffect(() => {
    if (!isPlaying) return;

    const interval1 = setInterval(() => {
      const marble = generateMarble();
      addMarble(1, marble);
    }, 2000 / speed);

    const interval2 = setInterval(() => {
      const marble = generateMarble();
      addMarble(2, marble);
    }, 2500 / speed);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, [isPlaying, speed, addMarble]);
};