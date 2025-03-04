import { createMarble } from './baseMarbleUtils';

let numberIndex = 1;

export const resetScanIndexes = () => {
  numberIndex = 1;
};

export const generateScanMarble = () => {
  const marble = createMarble(numberIndex, 'rgb(239, 68, 68)'); // Red for input marbles
  numberIndex++;
  return marble;
};
