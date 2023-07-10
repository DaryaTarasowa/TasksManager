import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITaskInfo } from "../../interface/ITaskInfo";
import { AxiosError } from "axios";

interface ITasksState {
  page: number;
  tasks: ITaskInfo[];
  isLoading: boolean;
  error: AxiosError | null;
}

const initialState: ITasksState = {
  page: 0,
  tasks: [],
  isLoading: false,
  error: null,
};

const { actions: tasksActions, reducer: tasksReducer } = createSlice({
  initialState,
  name: `tasks`,
  reducers: {
    reset: (state: ITasksState) => {
      state.tasks = initialState.tasks;
      state.error = initialState.error;
      state.isLoading = initialState.isLoading;
      state.page = initialState.page;
    },
    deleteTask: (
      state: ITasksState,
      action: PayloadAction<{ taskId: number | null }>,
    ) => {
      state.tasks = state.tasks.filter(
        (task) => task.id !== action.payload.taskId,
      );
    },
    setTasks: (
      state: ITasksState,
      action: PayloadAction<{ tasks: ITaskInfo[] }>,
    ) => {
      state.tasks = action.payload.tasks;
    },
    setLoading: (
      state: ITasksState,
      action: PayloadAction<{ isLoading: boolean }>,
    ) => {
      state.isLoading = action.payload.isLoading;
    },
    setError: (
      state: ITasksState,
      action: PayloadAction<{ error: AxiosError }>,
    ) => {
      state.error = action.payload.error;
    },
    setPage: (state: ITasksState, action: PayloadAction<{ page: number }>) => {
      state.page = action.payload.page;
    },
    addTask: (
      state: ITasksState,
      action: PayloadAction<{ taskDetail: ITaskInfo }>,
    ) => {
      state.tasks.unshift(action.payload.taskDetail);
    },
    updateTask: (
      state: ITasksState,
      action: PayloadAction<{ updatedTask: ITaskInfo }>,
    ) => {
      state.tasks = state.tasks.map((task) => {
        return task.id === action.payload.updatedTask.id
          ? action.payload.updatedTask
          : task;
      });
    },
  },
});

export { tasksActions, tasksReducer };
