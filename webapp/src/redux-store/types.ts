import { CombinedState, Dispatch } from "@reduxjs/toolkit";

import { reducer } from "./reducer";
import { api } from "./service";

type TCleanState<T> = T extends CombinedState<infer S>
  ? { [K in keyof S]: TCleanState<S[K]> }
  : T;

export type TRootState = TCleanState<ReturnType<typeof reducer>>;
export type TAppThunk = (
  dispatch: Dispatch,
  getState: () => TRootState,
  options: { api: typeof api },
) => void;
