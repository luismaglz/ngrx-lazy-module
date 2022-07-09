import { createReducer } from '@ngrx/store';
import { Action } from '@ngrx/store/src';

export interface StoreState1 {
  request: string | null;
  request2: string | null;
  request3: string | null;
}

export const initialAvailabilityState: StoreState1 = {
  request: 'request',
  request2: 'request2',
  request3: 'request3',
};

const reducer = createReducer(initialAvailabilityState);

export function reducer1(
  state: StoreState1 | undefined,
  action: Action
): StoreState1 {
  return reducer(state, action);
}
