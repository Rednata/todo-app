import { createSlice } from "@reduxjs/toolkit";
import { AUTH } from "./AuthAction";

interface IAuth {
  authName: string;
}

const initialState: IAuth = {
  authName: ''
}

export const authReducer = (state = initialState, action: any) => {

  switch (action.type) {
    case AUTH:      
      return {
        ...state, authName: action.auth
      }
        
    default:
      return state;
  }

}

