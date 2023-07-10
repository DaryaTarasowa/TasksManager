import { configureStore } from "@reduxjs/toolkit";

import { reducer } from "./reducer";
import { api } from "./service";

const AppReduxStore = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: {
        extraArgument: {
          api,
        },
      },
    }),
  reducer,
});

export default AppReduxStore;
