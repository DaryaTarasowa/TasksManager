import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

interface ISidebarState {
  isOpen: boolean;
  isLoading: boolean;
  error: AxiosError | null;
}

const initialState: ISidebarState = {
  isOpen: false,
  isLoading: false,
  error: null,
};

const { actions: sidebarActions, reducer: sidebarReducer } = createSlice({
  initialState,
  name: `Sidebar`,
  reducers: {
    reset: (state) => {
      state.isOpen = initialState.isOpen;
      state.isLoading = initialState.isLoading;
      state.error = initialState.error;
    },
    setOpen: (state, action: PayloadAction<{ isOpen: boolean }>) => {
      state.isOpen = action.payload.isOpen;
    },
    setLoading: (
      state: ISidebarState,
      action: PayloadAction<{ isLoading: boolean }>,
    ) => {
      state.isLoading = action.payload.isLoading;
    },
    setError: (
      state: ISidebarState,
      action: PayloadAction<{ error: AxiosError }>,
    ) => {
      state.error = action.payload.error;
    },
  },
});

export { sidebarActions, sidebarReducer };
