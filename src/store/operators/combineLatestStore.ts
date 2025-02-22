import { create } from 'zustand';
import { BaseOperatorState, createNewSubjects } from './baseOperatorStore';
import { resetIndexes } from '../../utils/marbleUtils';

export const useCombineLatestStore = create<BaseOperatorState>((set) => ({
  stream1Marbles: [],
  stream2Marbles: [],
  stream3Marbles: [],
  outputMarbles: [],
  ...createNewSubjects(),
  isStream3Enabled: false,
  speed: 1,

  addMarble: (streamId, marble) => {
    set((state) => {
      const newMarble = {
        ...marble,
        timestamp: Date.now(),
        id: marble.id || Math.random().toString(36).substr(2)
      };

      switch (streamId) {
        case 1:
          state.stream1$.next(newMarble);
          return { stream1Marbles: [...state.stream1Marbles, newMarble] };
        case 2:
          state.stream2$.next(newMarble);
          return { stream2Marbles: [...state.stream2Marbles, newMarble] };
        case 3:
          if (state.isStream3Enabled) {
            state.stream3$.next(newMarble);
            return { stream3Marbles: [...state.stream3Marbles, newMarble] };
          }
          return state;
        default:
          return state;
      }
    });
  },

  addOutputMarble: (marble) => set((state) => ({ 
    outputMarbles: [...state.outputMarbles, marble] 
  })),

  setSpeed: (speed) => set({ speed }),

  clearMarbles: () => {
    resetIndexes();
    set({ 
      stream1Marbles: [],
      stream2Marbles: [],
      stream3Marbles: [],
      outputMarbles: []
    });
  },

  resetPipeline: () => {
    set((state) => {
      state.stream1$.complete();
      state.stream2$.complete();
      state.stream3$.complete();
      resetIndexes();
      return {
        ...createNewSubjects(),
        stream1Marbles: [],
        stream2Marbles: [],
        stream3Marbles: [],
        outputMarbles: []
      };
    });
  },

  toggleStream3: () => set((state) => {
    state.stream1$.complete();
    state.stream2$.complete();
    state.stream3$.complete();
    resetIndexes();
    return {
      ...createNewSubjects(),
      isStream3Enabled: !state.isStream3Enabled,
      stream1Marbles: [],
      stream2Marbles: [],
      stream3Marbles: [],
      outputMarbles: []
    };
  })
}));