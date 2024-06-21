import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { rowApi } from "../../enteties/row/api/row.api.ts";

const rootReducer = combineReducers({
  [rowApi.reducerPath]: rowApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rowApi.middleware),
});

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
