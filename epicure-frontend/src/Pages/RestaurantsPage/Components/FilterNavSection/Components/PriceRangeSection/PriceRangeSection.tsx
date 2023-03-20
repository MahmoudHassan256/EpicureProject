import React, { useState } from 'react'
import ThumbComponent from './Components/ThumbComponent';
import { ClearBtn, MaxPriceRange, MaxRange, MinPrinceRange, MinRange, Price, PriceRangeDivider, PriceRangeSelectedText, PriceRangeText, PriceSection, RangeSlider, SheikelIcon, SliderBox, SliderHeader, SliderSection, WrapperPriceRangeSection } from './styles'
const minValue = 12;
const maxValue = 357;

export default function PriceRangeSection() {
  const [ClearBtnState, updateClearBtn] = useState(false)
  const [Range, setRange] = useState<number[]>([minValue, maxValue]);
  const [changed, updateChanged] = useState({ left: false, right: false });
  return (
    <WrapperPriceRangeSection>
      <PriceSection>
        <PriceRangeSelectedText>Price Range Selected</PriceRangeSelectedText>
        <PriceRangeText>
          <MinPrinceRange>
            <SheikelIcon src='Images/Icon/Sheikel.svg' />
            <Price>{minValue}</Price>
          </MinPrinceRange>
          <PriceRangeDivider>-</PriceRangeDivider>
          <MaxPriceRange>
            <SheikelIcon src='Images/Icon/Sheikel.svg' />
            <Price>{maxValue}</Price>
          </MaxPriceRange>
        </PriceRangeText>
      </PriceSection>
      <SliderSection>
        <SliderHeader>
          <MinRange state={Range[0] > minValue ? true : false} ><SheikelIcon src='Images/Icon/Sheikel.svg' />{Range[0]}</MinRange>
          <MaxRange state={Range[1] < maxValue ? true : false} ><SheikelIcon src='Images/Icon/Sheikel.svg' />{Range[1]}</MaxRange>
        </SliderHeader>
        <SliderBox>
          <RangeSlider changed={changed}
            getAriaLabel={() => 'Minimum distance'}
            value={Range}
            min={minValue}
            max={maxValue}
            components={{Thumb:ThumbComponent}}
            onChange={(event, data) => {
              setRange(data as number[]);
              if (Range[0] > minValue || Range[1] < maxValue) {
                updateClearBtn(true);
                if (Range[0] > minValue) { updateChanged({ ...changed, left: true }) }

                if (Range[1] < maxValue) { updateChanged({ ...changed, right: true }) }
                else { updateChanged({ left: true, right: true }) }
              }
              else {
                updateClearBtn(false);
                updateChanged({ left: false, right: false })
              }

            }}

            disableSwap />
        </SliderBox>
      </SliderSection>
      {ClearBtnState && <ClearBtn onClick={() => {
        updateClearBtn(false);
        setRange([minValue, maxValue]);
        updateChanged({ left: false, right: false })

      }}>Clear</ClearBtn>}

    </WrapperPriceRangeSection>
  )
}
