import { TRootState } from "./types";

export const getTasks = (state: TRootState) => state.tasks;
export const getSidebarState = (state: TRootState) => state.sidebar;
export const getSelectedTaskDetail = (state: TRootState) =>
  state.selection.taskDetail;
export const getSelectedTaskId = (state: TRootState) => state.selection.taskId;
