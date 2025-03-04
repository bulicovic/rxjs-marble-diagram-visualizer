import { createMarble } from './baseMarbleUtils';

let numberIndex1 = 1;
let numberIndex2 = 10;

export const resetConcatIndexes = () => {
  numberIndex1 = 1;
  numberIndex2 = 10;
};

export const generateConcatMarble = (streamId: number) => {
  switch (streamId) {
    case 1: {
      const value = numberIndex1++;
      return createMarble(value, 'rgb(59, 130, 246)'); // blue
    }
    case 2: {
      const value = numberIndex2++;
      return createMarble(value, 'rgb(239, 68, 68)'); // red
    }
    default:
      return null;
  }
};
