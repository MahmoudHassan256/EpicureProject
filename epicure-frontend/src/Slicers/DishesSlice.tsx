import { createSlice } from "@reduxjs/toolkit";

export const DishesSlice = createSlice({
    name: 'dishes',
    initialState: {
      value: []
    },
    reducers: {
      setDishes: (state, action) => {
        return {
          ...state,
        value:action.payload,
        };
      },
    },
  })
export const { setDishes } = DishesSlice.actions
export default DishesSlice.reducer
