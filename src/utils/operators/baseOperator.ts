import type { Marble } from '../../types/marble';

// Base delay calculation
export const getOperatorDelay = (speed: number = 1): number => {
  const BASE_DELAY = 1200; // Base delay in milliseconds
  return BASE_DELAY / speed;
};