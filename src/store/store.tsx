import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from './Auth/AuthSlice';
import tasksReducer from './Tasks/TaskSlice';
// import { authMiddleware } from "./Auth/AuthAction";


const rootReducer = combineReducers({
  auth: authReducer,
  tasks: tasksReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(authMiddleware)
})

export type AppStore = typeof store;
export type RootState = ReturnType<typeof rootReducer>;