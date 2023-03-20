import { configureStore } from "@reduxjs/toolkit";
import BagSlice from "./Slicers/BagSlice";
import ChefsSlice from "./Slicers/ChefsSlice";
import DishesSlice from "./Slicers/DishesSlice";
import RestaurantsSlice from "./Slicers/RestaurantsSlice";
import  SelectedDishSlice  from "./Slicers/SelectedDishSlice";
import SingInStateSlice from "./Slicers/SingInStateSlice";
import  SingUpStateSlice  from "./Slicers/SingUpStateSlice";


export default configureStore({
    reducer:{
        restaurants:RestaurantsSlice,
        dishes:DishesSlice,
        chefs:ChefsSlice,
        selecteddish:SelectedDishSlice,
        bag:BagSlice,
        signupstate:SingUpStateSlice,
        signinstate:SingInStateSlice,
    },
})
