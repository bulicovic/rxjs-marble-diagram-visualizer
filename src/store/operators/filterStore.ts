import { create } from 'zustand';
import { BaseOperatorState, createNewSubjects } from './baseOperatorStore';
import { resetFilterIndexes } from '../../utils/marbleUtils';

export const useFilterStore = create<BaseOperatorState>(set => ({
  stream1Marbles: [],
  stream2Marbles: [],
  stream3Marbles: [],
  outputMarbles: [],
  ...createNewSubjects(),
  isStream3Enabled: false, // Always false for filter
  speed: 1,

  addMarble: (streamId, marble) => {
    if (streamId !== 1) return; // Only allow Stream 1 marbles

    set(state => {
      const newMarble = {
        ...marble,
        timestamp: Date.now(),
        id: marble.id || Math.random().toString(36).substr(2),
      };

      state.stream1$.next(newMarble);
      return { stream1Marbles: [...state.stream1Marbles, newMarble] };
    });
  },

  addOutputMarble: marble =>
    set(state => ({
      outputMarbles: [...state.outputMarbles, marble],
    })),

  setSpeed: speed => set({ speed }),

  clearMarbles: () => {
    resetFilterIndexes();
    set({
      stream1Marbles: [],
      stream2Marbles: [],
      stream3Marbles: [],
      outputMarbles: [],
    });
  },

  resetPipeline: () => {
    set(state => {
      state.stream1$.complete();
      state.stream2$.complete();
      state.stream3$.complete();
      resetFilterIndexes();
      return {
        ...createNewSubjects(),
        stream1Marbles: [],
        stream2Marbles: [],
        stream3Marbles: [],
        outputMarbles: [],
      };
    });
  },

  // Remove toggleStream3 since Filter only uses Stream 1
  toggleStream3: () => set(state => state), // No-op
}));
