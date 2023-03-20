import { createSlice } from "@reduxjs/toolkit";

export const RestaurantsSlice = createSlice({
    name: 'restaurants',
    initialState: {
      value: []
    },
    reducers: {
      setRestaurants: (state, action) => {
        return {
          ...state,
        value:action.payload,
        };
      }
    }
  })
export const { setRestaurants } = RestaurantsSlice.actions
export default RestaurantsSlice.reducer
