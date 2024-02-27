import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IListTasks {
  tasks: {
    value: string;
    id: string;
    finish: boolean;
    importance: string;
  }[];
}

interface ITask {
  value: string;
  id: string;
  finish: boolean;
  importance: string;
}
const initialState: IListTasks = {
  tasks: [],
}

export const tasksReducer = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    inputTask: (state, action: PayloadAction<ITask>) => {      
      state.tasks.push(action.payload);
    },
    updateTask: (state, action: PayloadAction<ITask[]>) => {            
      state.tasks = action.payload;      
    },    
    fillingTasks: (state, action) => {      
      state.tasks = action.payload 
    }
  }
  
});

export default tasksReducer.reducer;

