import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SetWindowSize from '../Helper/setWindowSize'
import CheckOutPage from '../Pages/CheckOutPage/CheckOutPage'
import ChefsPage from '../Pages/ChefsPage/ChefsPage'
import HomePage from '../Pages/HomePage/HomePage'
import OrderPage from '../Pages/OrderPage/OrderPage'
import RestaurantProfile from './RestaurantProfile/RestaurantProfile'
import RestaurantsPage from '../Pages/RestaurantsPage/RestaurantsPage'
import { setChefs } from '../Slicers/ChefsSlice'
import { setDishes } from '../Slicers/DishesSlice'
import { setRestaurants } from '../Slicers/RestaurantsSlice'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import HeaderDesktop from './Header/HeaderDesktop'
import DishProfileMobile from './DishProfile/DishProfileMobile'
import { defaultUrl } from '../Constants/Variables'
export default function Layout() {
  const windowSize = SetWindowSize();
  const dispatch=useDispatch();

  const Restaurantsurl = defaultUrl+'api/restaurants/getRestaurants';
  const Dishesurl = defaultUrl+'api/dishes/getDishes';
  const Chefsurl = defaultUrl+'api/chefs/getChefs';

  useEffect(()=>{
  async function FetchData(){
    const restaurantResponse=await (await fetch(Restaurantsurl)).json();
    dispatch(setRestaurants(restaurantResponse));
    const dishesResponse=await (await fetch(Dishesurl)).json();
    dispatch(setDishes(dishesResponse));
    const chefsResponse=await (await fetch(Chefsurl)).json();
    dispatch(setChefs(chefsResponse));
  }
  FetchData();
})
  return (
    <div>
      <BrowserRouter>
      {windowSize > 600 ? <HeaderDesktop/> : <Header/>}
        <Routes>
          <Route path='' element={<HomePage />} ></Route>
          <Route path='Restaurants' element={<RestaurantsPage />}></Route>
          <Route path='Order' element={<OrderPage />}></Route>
          <Route path='Check-Out' element={<CheckOutPage />}></Route>
          <Route path='Chefs' element={<ChefsPage />}></Route>
          <Route path='Restaurant' element={<RestaurantProfile/>}></Route>
          <Route path='Dish' element={<DishProfileMobile/>}></Route>

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}
