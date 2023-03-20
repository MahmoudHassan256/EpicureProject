import { createSlice } from "@reduxjs/toolkit";

export const ChefsSlice = createSlice({
    name: 'chefs',
    initialState: {
      value: []
    },
    reducers: {
      setChefs: (state, action) => {
        return {
          ...state,
        value:action.payload,
        };
      },
    },
  })
export const { setChefs } = ChefsSlice.actions
export default ChefsSlice.reducer
