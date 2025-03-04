import { create } from 'zustand';
import { Subject } from 'rxjs';
import type { Marble, RxJSOperator } from '../types/marble';
import { resetIndexes } from '../utils/marbleUtils';

interface MarbleState {
  stream1Marbles: Marble[];
  stream2Marbles: Marble[];
  stream3Marbles: Marble[];
  outputMarbles: Marble[];
  currentOperator: RxJSOperator;
  stream1$: Subject<Marble>;
  stream2$: Subject<Marble>;
  stream3$: Subject<Marble>;
  isStream3Enabled: boolean;
  speed: number;
  addMarble: (streamId: number, marble: Marble) => void;
  addOutputMarble: (marble: Marble) => void;
  emitOutput: (streamId: number, marble: Marble) => void;
  setOperator: (operator: RxJSOperator) => void;
  setSpeed: (speed: number) => void;
  clearMarbles: () => void;
  resetPipeline: () => void;
  toggleStream3: () => void;
}

const createNewSubjects = () => ({
  stream1$: new Subject<Marble>(),
  stream2$: new Subject<Marble>(),
  stream3$: new Subject<Marble>(),
});

const initialSubjects = createNewSubjects();

export const useMarbleStore = create<MarbleState>(set => ({
  stream1Marbles: [],
  stream2Marbles: [],
  stream3Marbles: [],
  outputMarbles: [],
  currentOperator: 'map',
  ...initialSubjects,
  isStream3Enabled: false,
  speed: 1,

  addMarble: (streamId, marble) => {
    if (!marble || marble.value === undefined) return;

    set(state => {
      const newMarble = {
        ...marble,
        timestamp: Date.now(),
        id: marble.id || Math.random().toString(36).substr(2),
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

  addOutputMarble: marble => {
    if (!marble || marble.value === undefined) return;
    set(state => ({
      outputMarbles: [...state.outputMarbles, marble],
    }));
  },

  emitOutput: (streamId, marble) => {
    set(state => {
      switch (streamId) {
        case 1:
          state.stream1$.next(marble);
          break;
        case 2:
          state.stream2$.next(marble);
          break;
        case 3:
          if (state.isStream3Enabled) {
            state.stream3$.next(marble);
          }
          break;
      }
      return state;
    });
  },

  setOperator: operator => {
    set(state => {
      state.stream1$.complete();
      state.stream2$.complete();
      state.stream3$.complete();
      resetIndexes();

      return {
        currentOperator: operator,
        outputMarbles: [],
        stream1Marbles: [],
        stream2Marbles: [],
        stream3Marbles: [],
        ...createNewSubjects(),
      };
    });
  },

  setSpeed: speed => set({ speed }),

  clearMarbles: () => {
    resetIndexes();
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
      resetIndexes();

      return {
        ...createNewSubjects(),
        stream1Marbles: [],
        stream2Marbles: [],
        stream3Marbles: [],
        outputMarbles: [],
      };
    });
  },

  toggleStream3: () =>
    set(state => {
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
        outputMarbles: [],
      };
    }),
}));
