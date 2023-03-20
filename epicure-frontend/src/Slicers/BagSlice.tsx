import { createSlice } from "@reduxjs/toolkit";

export const BagSlice = createSlice({
    name: 'Bag',
    initialState: {
      value: []
    },
    reducers: {
      setBag: (state:any, action) => {
        return {
          ...state,
          value:[...state.value,action.payload]
        };
      },
    },
  })
export const { setBag } = BagSlice.actions
export default BagSlice.reducer
