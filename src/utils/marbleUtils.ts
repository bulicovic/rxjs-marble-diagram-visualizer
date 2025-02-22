import { 
  generateMapMarble,
  generateFilterMarble,
  generateMergeMarble,
  generateCombineLatestMarble,
  generateConcatMarble,
  generateScanMarble,
  resetMapIndexes,
  resetFilterIndexes,
  resetMergeIndexes,
  resetCombineLatestIndexes,
  resetConcatIndexes,
  resetScanIndexes
} from './marbleUtils/index';

// Re-export all marble utilities
export {
  generateMapMarble,
  generateFilterMarble,
  generateMergeMarble,
  generateCombineLatestMarble,
  generateConcatMarble,
  generateScanMarble,
  resetMapIndexes,
  resetFilterIndexes,
  resetMergeIndexes,
  resetCombineLatestIndexes,
  resetConcatIndexes,
  resetScanIndexes
};

// Combined reset function
export const resetIndexes = () => {
  resetMapIndexes();
  resetFilterIndexes();
  resetMergeIndexes();
  resetCombineLatestIndexes();
  resetConcatIndexes();
  resetScanIndexes();
};