import { Subject } from 'rxjs';
import type { Marble } from '../../types/marble';

export interface BaseOperatorState {
  stream1Marbles: Marble[];
  stream2Marbles: Marble[];
  stream3Marbles: Marble[];
  outputMarbles: Marble[];
  stream1$: Subject<Marble>;
  stream2$: Subject<Marble>;
  stream3$: Subject<Marble>;
  isStream3Enabled: boolean;
  speed: number;
  addMarble: (streamId: number, marble: Marble) => void;
  addOutputMarble: (marble: Marble) => void;
  setSpeed: (speed: number) => void;
  clearMarbles: () => void;
  resetPipeline: () => void;
  toggleStream3: () => void;
}

export const createNewSubjects = () => ({
  stream1$: new Subject<Marble>(),
  stream2$: new Subject<Marble>(),
  stream3$: new Subject<Marble>(),
});
