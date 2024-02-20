import { createAction } from "@reduxjs/toolkit";

export const AUTH = 'AUTH';

// export const authAction = createAction(AUTH)

export const authAction = (auth: any) => {
  return {
    type: AUTH,
    auth
  }
}