import { createSlice } from "@reduxjs/toolkit";


export interface IAuth {
  authName: string;
}

const initialState: IAuth = {
  authName: ''
}

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {    
    inputAuth: (state, action) => {      
      state.authName = action.payload
    },
    updateAuth: (state, action) => {      
      state.authName = action.payload
    }
  }

})

export default authReducer.reducer;
export const { actions } = authReducer;



// import { IAuth } from "./AuthSlice";

// export const authMiddleware = store => next => action => {
//   if (action.type === 'inputAuth') {
//     localStorage.setItem(action.authName, action.authName);
//   }
//   next(action);
// }