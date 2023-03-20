import React from 'react'
import { IconAndName, IconAndNameContainer, SignatureDishesText, SignatureDishesTypeIcon, TypeName, WrapperSignatureDishesContainer } from './Styles'

export default function SignatureDishSection() {
  return (
    <WrapperSignatureDishesContainer>
      <SignatureDishesText>THE MEANING OF OUR ICONS:</SignatureDishesText>
      <IconAndNameContainer>
        <IconAndName>
          <SignatureDishesTypeIcon src="Images/Icon/Types/Type=Spicy, Size=Big.svg" alt="Type" />
          <TypeName>Spicy</TypeName>
        </IconAndName>
        <IconAndName>
          <SignatureDishesTypeIcon src="Images/Icon/Types/Type=Vegetarian, Size=Big.svg" alt="Type" />
            <TypeName>Vegitarian</TypeName>
        </IconAndName>
        <IconAndName>
          <SignatureDishesTypeIcon src="Images/Icon/Types/Type=Vegan, Size=Big.svg" alt="Type" />
          <TypeName>Vegan</TypeName>
        </IconAndName>
      </IconAndNameContainer>
    </WrapperSignatureDishesContainer>
  )
}
