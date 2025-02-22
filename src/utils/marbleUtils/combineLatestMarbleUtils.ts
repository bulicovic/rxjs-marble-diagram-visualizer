import { createMarble } from './baseMarbleUtils';
import { letters, specialChars } from './baseMarbleUtils';

let letterIndex = 0;
let numberIndex = 1;
let specialCharIndex = 0;

export const resetCombineLatestIndexes = () => {
  letterIndex = 0;
  numberIndex = 1;
  specialCharIndex = 0;
};

export const generateCombineLatestMarble = (streamId: number) => {
  switch (streamId) {
    case 1:
      const letter = letters[letterIndex % letters.length];
      letterIndex++;
      return createMarble(letter, 'rgb(59, 130, 246)'); // blue
    case 2:
      const number = numberIndex++;
      return createMarble(number, 'rgb(239, 68, 68)'); // red
    case 3:
      const special = specialChars[specialCharIndex % specialChars.length];
      specialCharIndex++;
      return createMarble(special, 'rgb(168, 85, 247)'); // purple
    default:
      return createMarble('?', 'rgb(156, 163, 175)'); // gray
  }
};