import { createMarble } from './baseMarbleUtils';
import { letters } from './baseMarbleUtils';

let numberIndex1 = 20;
let numberIndex2 = 1;
let letterIndex = 0;

export const resetMergeIndexes = () => {
  numberIndex1 = 20;
  numberIndex2 = 1;
  letterIndex = 0;
};

export const generateMergeMarble = (streamId: number) => {
  switch (streamId) {
    case 1: {
      const value = numberIndex1;
      numberIndex1 += 20;
      return createMarble(value, 'rgb(59, 130, 246)'); // blue
    }
    case 2: {
      const value = numberIndex2;
      numberIndex2 += 1;
      return createMarble(value, 'rgb(239, 68, 68)'); // red
    }
    case 3: {
      const letter = letters[letterIndex % letters.length];
      letterIndex++;
      return createMarble(letter, 'rgb(168, 85, 247)'); // purple
    }
    default:
      return createMarble('?', 'rgb(156, 163, 175)'); // gray
  }
};