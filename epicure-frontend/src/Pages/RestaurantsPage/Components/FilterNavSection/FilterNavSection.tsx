import React, { useState } from 'react'
import DistanceSection from './Components/DistanceSection/DistanceSection'
import PriceRangeSection from './Components/PriceRangeSection/PriceRangeSection'
import RatingSection from './Components/RatingSection/RatingSection'
import { IconArrowDown, InnerNavElement, NavElement, RestaurantsNavTxt, WrapperFilteringNavSection } from './Styles'

export default function FilterNavSection() {
  const[ OpenTab,setOpenTab]=useState<string>('')
  return (
    <WrapperFilteringNavSection>
      <NavElement>
        <InnerNavElement>
          <RestaurantsNavTxt >Price Range</RestaurantsNavTxt>
          <IconArrowDown src='Images/Icon/ArrowDown.svg' alt='arrow-down' onClick={() =>{
          if(OpenTab !== ''){
            if(OpenTab==='Price Range')
            setOpenTab('')
            else
          setOpenTab('Price Range')
          }
          else
          setOpenTab('Price Range')}
         } />
        </InnerNavElement>
        {OpenTab==='Price Range' && <PriceRangeSection/>}
      </NavElement>
      <NavElement>
        <InnerNavElement>
        <RestaurantsNavTxt>Distance</RestaurantsNavTxt>
        <IconArrowDown src='Images/Icon/ArrowDown.svg' alt='arrow-down' onClick={() =>{
          if(OpenTab !== ''){
            if(OpenTab==='Distance')
            setOpenTab('')
            else
          setOpenTab('Distance')
          }
          else
          setOpenTab('Distance')}
        }  />
        </InnerNavElement>
        {OpenTab==='Distance'&& <DistanceSection/>}
      </NavElement>
      <NavElement>
        <InnerNavElement>
        <RestaurantsNavTxt>Rating</RestaurantsNavTxt>
        <IconArrowDown src='Images/Icon/ArrowDown.svg' alt='arrow-down' onClick={() => 
        {
          if(OpenTab !== ''){
            if(OpenTab==='Rating')
            setOpenTab('')
            else
          setOpenTab('Rating')
          }
          else
          setOpenTab('Rating')}}/>
        </InnerNavElement>
        {OpenTab==='Rating' && <RatingSection/>}
      </NavElement>
    </WrapperFilteringNavSection>
  )
}
