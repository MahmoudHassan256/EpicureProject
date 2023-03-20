import React from 'react'
import PopularRestaurantsSection from '../PopularRestaurantsSection/PopularRestaurantsSection'
import SignatureDishSection from '../SignatureDishSection/SignatureDishSection'
import PopularDishesSection from '../PopularDishesSection/PopularDishesSection'
import ChefOfTheWeekSection from '../ChefOfTheWeekSection/ChefOfTheWeekSection'
import AboutUsSection from '../AboutUsSection/AboutUsSection'
import { ContentContainerBackground, ContentContainerWrapper } from './Styles'
export default function ContentContainer() {
    return (
    <ContentContainerWrapper>
      <ContentContainerBackground>
        <PopularRestaurantsSection/>
        <PopularDishesSection/>
        <SignatureDishSection/>
        <ChefOfTheWeekSection/>
        <AboutUsSection/>
      </ContentContainerBackground>
    </ContentContainerWrapper>
  )
}
