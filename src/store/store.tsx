import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from './Auth/AuthSlice';
// import { authMiddleware } from "./Auth/AuthAction";


const rootReducer = combineReducers({
  auth: authReducer,
  // tasks: tasksReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(authMiddleware)
})