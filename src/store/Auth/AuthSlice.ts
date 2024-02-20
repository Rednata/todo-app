import { createSlice } from "@reduxjs/toolkit";


export interface IAuth {
  authName: string;
}

const initialState: IAuth = {
  authName: ''
}

export const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {    
    inputAuth: (state, action) => {
      localStorage.setItem(action.payload, '');
      state.authName = action.payload
    }
  }

})

export default authReducer.reducer;



// import { IAuth } from "./AuthSlice";

// export const authMiddleware = store => next => action => {
//   if (action.type === 'inputAuth') {
//     localStorage.setItem(action.authName, action.authName);
//   }
//   next(action);
// }