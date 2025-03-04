import { createMarble } from './baseMarbleUtils';

let numberIndex = 1;

export const resetFilterIndexes = () => {
  numberIndex = 1;
};

export const generateFilterMarble = () => {
  const marble = createMarble(numberIndex, 'rgb(59, 130, 246)'); // blue
  numberIndex++;
  return marble;
};
