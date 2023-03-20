import { createSlice } from "@reduxjs/toolkit";

export const SingUpStateSlice = createSlice({
    name: 'signupstate',
    initialState: {
      value: false
    },
    reducers: {
      setOpenSignUp: (state, action) => {
        return {
          ...state,
        value:action.payload,
        };
      },
    },
  })
export const { setOpenSignUp } = SingUpStateSlice.actions
export default SingUpStateSlice.reducer
