import React from 'react'
import IsDesktop from '../../../Helper/WindowCheker'
import { DishData } from '../../../Interfaces/LayoutInterfaces'
import { HeroImg, HeroInfo, HeroIngredients, HeroName, HeroPriceContainer, HeroType, HeroWrapper, Price, PriceLine, SheikelIcon, TypeIcon } from './styles'

export default function HeroDish(props:DishData) {
  return (
    <HeroWrapper>
      <HeroImg src={props.url} alt="img"/>
      <HeroInfo>
        <HeroName>{props.name}</HeroName>
        <HeroIngredients>{props.ingredients}</HeroIngredients>
        {IsDesktop()&&<HeroType>
          <TypeIcon src='Images/Icon/Types/Type=Vegan, Size=Small.svg' alt="type"/>
          </HeroType>}
        {IsDesktop()&&<HeroPriceContainer>
            <PriceLine/>
            <SheikelIcon src='/Images/Icon/Sheikel.svg'/>
            <Price>{props.price}</Price>
            <PriceLine/>
          </HeroPriceContainer>}
      </HeroInfo>
    </HeroWrapper>
  )
}
