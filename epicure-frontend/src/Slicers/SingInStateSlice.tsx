import { createSlice } from "@reduxjs/toolkit";

export const SingInStateSlice = createSlice({
    name: 'signinstate',
    initialState: {
      value: false
    },
    reducers: {
        setOpenSignIn: (state, action) => {
        return {
          ...state,
        value:action.payload,
        };
      },
    },
  })
export const { setOpenSignIn } = SingInStateSlice.actions
export default SingInStateSlice.reducer
