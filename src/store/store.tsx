import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from './Auth/AuthSlice';
import tasksReducer from './Tasks/TaskSlice';
// import { storageMiddleware } from "../storage/controlStorage";


const rootReducer = combineReducers({
  auth: authReducer,
  tasks: tasksReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(storageMiddleware)
})

export type AppStore = typeof store;
export type RootState = ReturnType<typeof rootReducer>;