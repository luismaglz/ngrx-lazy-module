import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from "@ngrx/store";
import { StoreState2 } from "./reducer2";

const getStore2State: MemoizedSelector<object, StoreState2> =
  createFeatureSelector("store2");

export const selectAnything = createSelector(
  getStore2State,
  (state) => state?.request2
);

export const selectAnythingSub = createSelector(
  selectAnything,
  (anything) => anything?.va2
);
