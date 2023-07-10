import { combineReducers } from "@reduxjs/toolkit";

import { tasksReducer } from "./reducer/tasks";
import { selectionReducer } from "./reducer/selection";
import { sidebarReducer } from "./reducer/sidebar";

export const reducer = combineReducers({
  tasks: tasksReducer,
  selection: selectionReducer,
  sidebar: sidebarReducer,
});
