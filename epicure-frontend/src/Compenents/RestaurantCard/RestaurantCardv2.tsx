import React from 'react'
import { useNavigate } from 'react-router-dom';
import { RestaurantData } from '../../Interfaces/LayoutInterfaces'
import { RestaurantInfov2, Restaurantv2, Restaurantv2Img, Restaurantv2Name } from './Styles';
export default function RestaurantCardv2(props:RestaurantData) {
  const navigate=useNavigate();  
  function goToRestaurantProfile(Restaurant:RestaurantData){
    navigate({pathname:'/Restaurant'},{state:Restaurant});
    window.scrollTo(0, 0);
}
  return (
    <Restaurantv2 onClick={()=>{goToRestaurantProfile(props)}}>
    <Restaurantv2Img src={props.url} alt="restaurant" />
    <RestaurantInfov2>
        <Restaurantv2Name>{props.name}</Restaurantv2Name>
    </RestaurantInfov2>
</Restaurantv2>
  )
}
