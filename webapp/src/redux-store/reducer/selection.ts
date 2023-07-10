import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITaskInfo } from "../../interface/ITaskInfo";

interface ITaskSelection {
  taskId: number | null;
  taskDetail: ITaskInfo | null;
}

const initialState: ITaskSelection = {
  taskId: null,
  taskDetail: null,
};

const { actions: selectionActions, reducer: selectionReducer } = createSlice({
  initialState,
  name: `Task/selection`,
  reducers: {
    reset: (state) => {
      state.taskId = initialState.taskId;
      state.taskDetail = initialState.taskDetail;
    },
    setSelection: (
      state: ITaskSelection,
      action: PayloadAction<{ taskId: number }>,
    ) => {
      state.taskId = action.payload.taskId;
    },
    updateSelectedTask: (
      state: ITaskSelection,
      action: PayloadAction<{ taskDetail: ITaskInfo }>,
    ) => {
      state.taskDetail = action.payload.taskDetail;
    },
  },
});

export { selectionActions, selectionReducer };
