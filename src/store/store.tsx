import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Auth/AuthReducer";
// import authReducer from "./Auth/AuthSlice";

const rootReducer = combineReducers({
  auth: authReducer
  // tasks: tasksReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})