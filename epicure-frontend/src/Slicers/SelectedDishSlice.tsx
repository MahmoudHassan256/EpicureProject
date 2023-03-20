import { createSlice } from "@reduxjs/toolkit";

export const SelectedDishSlice=createSlice({
    name:'selecteddish',
    initialState:{
        value:{}
    },
    reducers:{
        setSelectedDish:(state,action)=>{
            return{
                ...state,
                value:action.payload,
            };
        }
    }
})
export const {setSelectedDish }=SelectedDishSlice.actions
export default SelectedDishSlice.reducer