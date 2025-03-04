// Base marble generation utilities
export const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
export const specialChars = ['@', '#', '$', '%', '&', '*', '=', '+', '?', '!'];

export const createMarble = (value: string | number, color: string) => ({
  id: Math.random().toString(36).substring(2),
  value,
  timestamp: Date.now(),
  color,
});
