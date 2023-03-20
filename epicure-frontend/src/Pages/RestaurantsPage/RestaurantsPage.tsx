import React, { useState } from 'react'
import { Map, RestaurantsPageRestaurantsContainer, RestaurantsPageText, RestaurantsPageWrapper } from './Styles'
import SetWindowSize from '../../Helper/setWindowSize'
import RestaurantsPageNav from './Components/RestaurantsPageNav/RestaurantsPageNav'
import IsDesktop from '../../Helper/WindowCheker'
import FilterNavSection from './Components/FilterNavSection/FilterNavSection'
import RestaurantCard from '../../Compenents/RestaurantCard/RestaurantCard'
import { useSelector } from 'react-redux'
import { RestaurantData } from '../../Interfaces/LayoutInterfaces'
import HeaderSignIn from '../../Compenents/Header/HeaderSignIn'
import HeaderSignUp from '../../Compenents/Header/HeaderSignUp'

export default function RestaurantsPage() {
  const signInState: boolean = useSelector((state: any) => state.signinstate.value)
  const signUpState: boolean = useSelector((state: any) => state.signupstate.value)
  const windowSize = SetWindowSize();
  const [ActiveTab,setActiveTab] = useState('All');
  if(ActiveTab==='Map View' && windowSize <600){
    setActiveTab('All');
  };
  const RestaurantPageArray:RestaurantData[]=useSelector((state:any)=> state.restaurants.value)
  
  return (
    <div>
    {IsDesktop() && ((signInState && <HeaderSignIn />) || (signUpState && <HeaderSignUp />))}
    <RestaurantsPageWrapper>
      {!IsDesktop() && <RestaurantsPageText>Restaurants</RestaurantsPageText>}
      <RestaurantsPageNav setActiveTab={setActiveTab} ActiveTab={ActiveTab}/>
      {IsDesktop() && <FilterNavSection/> }
      {IsDesktop() && ((ActiveTab) === 'Map View' && <Map src='Images/RestaurantsPage/Images/Desktop/Map.jpg' alt='Map'/>)}
      <RestaurantsPageRestaurantsContainer>
        {ActiveTab === 'All' && RestaurantPageArray.map((data, key) =>
          <RestaurantCard key={key} {...data} />
          )}
        {ActiveTab === 'New' && RestaurantPageArray.filter((ele) => ele.new === true).map((data, key) =>
          <RestaurantCard key={key} {...data}/>)}
        {ActiveTab === 'Most Popular' && RestaurantPageArray.filter((ele)=>ele.popular===true).map((data, key) =>
          <RestaurantCard key={key} {...data}/>
          )}
        {ActiveTab === 'Open Now' && RestaurantPageArray.filter((ele) => ele.open===true).map((data, key) =>
          <RestaurantCard key={key} {...data}/>
          )}
      </RestaurantsPageRestaurantsContainer>
    </RestaurantsPageWrapper>
    </div>
  )
}
