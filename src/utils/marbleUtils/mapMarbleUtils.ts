import { createMarble } from './baseMarbleUtils';

let numberIndex = 1;

export const resetMapIndexes = () => {
  numberIndex = 1;
};

export const generateMapMarble = () => {
  const marble = createMarble(numberIndex, 'rgb(59, 130, 246)'); // blue
  numberIndex++;
  return marble;
};