import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import RestaurantCard from '../../../../Compenents/RestaurantCard/RestaurantCard';
import RestaurantCardv2 from '../../../../Compenents/RestaurantCard/RestaurantCardv2';
import { settings } from '../../../../Constants/Variables'
import IsDesktop from '../../../../Helper/WindowCheker';
import { RestaurantData } from '../../../../Interfaces/LayoutInterfaces';
import { AllBox, AllRestaurantsText, ArrowIcon, PopularRestaurantsSectionContainer, PopularRestaurantsSectionText, WrapperPopularRestaurantsSection } from './Styles';

export default function PopularRestaurantsSection() {
  const navigate = useNavigate();
  function GoToRestaurants() {
    navigate('/Restaurants');
    window.scrollTo(0, 0);
  }
  const RestaurantsArray:RestaurantData[]=useSelector((state:any)=>state.restaurants.value);
  function AddRestaurantsDesktop() {
    return (RestaurantsArray.slice(0, 3).map((data, key) =>
      <RestaurantCard key={key} {...data}/>
    ))
  }
  function AddRestaurantsMobile() {
    return (RestaurantsArray.map((data, key) =>
      <RestaurantCardv2 key={key} {...data}/>
    ))
  }
  return (
    <WrapperPopularRestaurantsSection>
      <PopularRestaurantsSectionText>popular restaurant in epicure:</PopularRestaurantsSectionText>
      {IsDesktop() && <PopularRestaurantsSectionContainer>{AddRestaurantsDesktop()}</PopularRestaurantsSectionContainer>}
      {!IsDesktop() && <Slider {...settings}>{AddRestaurantsMobile()}</Slider>}
      <AllBox>
        <AllRestaurantsText>All restaurants</AllRestaurantsText>
        <ArrowIcon onClick={GoToRestaurants} src='/Images/Icon/Arrow.svg' alt="arrow" />
      </AllBox>
    </WrapperPopularRestaurantsSection>
  )
}
