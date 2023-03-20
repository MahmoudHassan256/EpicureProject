import React from 'react'
import { RestaurantData } from '../../../../Interfaces/LayoutInterfaces';
import { ClockIcon, HeroRestaurantChef, HeroRestaurantImg, HeroRestaurantName, HeroRestaurantWrapper, RestaurantInfo, TimeBox, TimeState } from './styles'

interface HeroProps{
  Restaurant:RestaurantData
}
export default function HeroRestaurant(props:HeroProps) {
  function checkTimeState(){
    if(props.Restaurant.open===true)
    return 'Open Now'
    return 'Is Closed'
  }
  return (
      <HeroRestaurantWrapper>
        <HeroRestaurantImg src={props.Restaurant.url}/>
        <RestaurantInfo>
        <HeroRestaurantName>{props.Restaurant.name}</HeroRestaurantName>
        <HeroRestaurantChef>{props.Restaurant.chef}</HeroRestaurantChef>
        <TimeBox>
        <ClockIcon src='Images/Icon/Clock.svg' alt='clock'/>
        <TimeState>{checkTimeState()}</TimeState>
        </TimeBox>
        </RestaurantInfo>
      </HeroRestaurantWrapper>
  )
}
