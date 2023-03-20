import React, { useState } from 'react'
import { ClearBtn, DistanceSlider, DistanceText, MyLocationText, SliderBox, SliderHeader, SliderSection, TopSection, WrapperDistanceSection } from './styles'
const maxDistance=4;
export default function DistanceSection() {
  const [Distance, setDistance] = useState<number>(maxDistance)
  const [ClearBtnState,updateClearBtn]=useState(false)
  const [changed,updateChanged]=useState(false);

  return (
    <WrapperDistanceSection>
      <TopSection>Distance</TopSection>
      <SliderSection>
        <SliderHeader>
          <MyLocationText>My location</MyLocationText>
          <DistanceText>{Distance}km</DistanceText>
        </SliderHeader>
        <SliderBox>
          <DistanceSlider changed={changed}
          value={Distance}
          max={maxDistance}
          defaultValue={maxDistance}
          step={.1}
          onChange={(event,data)=>{
            setDistance(data as number);
            if(data < maxDistance){
            updateClearBtn(true);
            updateChanged(true);
            }
            else{
              updateClearBtn(false);
              updateChanged(false);

            }
            
          }}

          />
        </SliderBox>
      </SliderSection>
      {ClearBtnState && <ClearBtn onClick={()=>{updateClearBtn(false);
      setDistance(maxDistance);
      updateChanged(false);

      }}>Clear</ClearBtn>}

    </WrapperDistanceSection>
  )
}
