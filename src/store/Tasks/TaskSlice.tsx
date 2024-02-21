import { createSlice } from "@reduxjs/toolkit"

interface ITasks {
  tasks: {
    value: string;
    id: string;
    isFinish: boolean;
  }[];
}

const initialState: ITasks = {
  tasks: [],
}

export const tasksReducer = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    inputTask: (state, action) => {
      console.log('action: ', action);
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks = action.payload;
    },
    finishTask: (state, action) => {
      console.log('action: ', action);
      // state.tasks = action.payload;
    },
  }
  
});

export default tasksReducer.reducer;

