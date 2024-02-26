import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface ITasks {
  tasks: {
    value: string;
    id: string;
    finish: boolean;
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
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {      
      state.tasks = action.payload;      
    },
    finishTask: (state, action) => {      
      state.tasks = action.payload;
    },
    fillingTasks: (state, action) => {      
      state.tasks = action.payload 

    }
  }
  
});

export default tasksReducer.reducer;

