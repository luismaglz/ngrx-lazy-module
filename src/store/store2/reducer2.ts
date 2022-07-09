import { createReducer } from '@ngrx/store';
import { Action } from '@ngrx/store/src';

export interface StoreState2 {
  request: string | null;
  request2: string | null;
  request3: string | null;
}

export const initialAvailabilityState: StoreState2 = {
  request: 'request',
  request2: 'request2',
  request3: 'request3',
};

const reducer = createReducer(initialAvailabilityState);

export function reducer2(
  state: StoreState2 | undefined,
  action: Action
): StoreState2 {
  return reducer(state, action);
}
