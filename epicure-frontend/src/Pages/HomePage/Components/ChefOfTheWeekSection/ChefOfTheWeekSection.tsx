import React from 'react'
import { useSelector } from 'react-redux'
import Slider from 'react-slick'
import ChefCard from '../../../../Compenents/ChefCard/ChefCard'
import RestaurantCardv2 from '../../../../Compenents/RestaurantCard/RestaurantCardv2'
import { settings } from '../../../../Constants/Variables'
import IsDesktop from '../../../../Helper/WindowCheker'
import { ChefData } from '../../../../Interfaces/LayoutInterfaces'
import { ChefInfoSection, ChefoftheWeekContainer, ChefoftheWeekInfo, ChefOfTheWeekNameRestaurants, ChefOfTheWeekText, RestaurantsContainer, WrapperChefOfTheWeekSection } from './Styles'

export default function ChefOfTheWeekSection() {
  const ChefsArray:ChefData[]=useSelector((state:any)=>state.chefs.value).filter((Chef:ChefData)=>Chef.award===true);
  const chef=ChefsArray[0];
  function AddRestaurantsDesktop(){
    return (chef?.Restaurantscontainer?.slice(0,3).map((data, key) =>
      <RestaurantCardv2 key={key} {...data} dishescontainer={data.dishescontainer} />
    ))
  }
  function AddRestaurantsMobile(){
    return (chef?.Restaurantscontainer?.map((data, key) =>
      <RestaurantCardv2 key={key} {...data} dishescontainer={data.dishescontainer} />
    ))
  }  
  return (
    <WrapperChefOfTheWeekSection>
      <ChefoftheWeekContainer>
        <ChefOfTheWeekText>Chef of the week:</ChefOfTheWeekText>
        <ChefInfoSection>
          <ChefCard name={ChefsArray[0]?.name} url={ChefsArray[0]?.url}/>
          <ChefoftheWeekInfo>Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.</ChefoftheWeekInfo>
        </ChefInfoSection>
        </ChefoftheWeekContainer>
        <ChefOfTheWeekNameRestaurants>Yossi's Restaurants</ChefOfTheWeekNameRestaurants>

          {IsDesktop() &&<RestaurantsContainer> {AddRestaurantsDesktop()}</RestaurantsContainer>}
          {!IsDesktop() && <Slider {...settings}>{AddRestaurantsMobile()}</Slider>}
        
    </WrapperChefOfTheWeekSection>
  )
}
