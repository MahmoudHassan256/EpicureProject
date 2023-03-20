import React, { useState } from 'react'
import CheckBoxElement from './Components/CheckBoxElement';
import { BottomSection, ClearBtn, TopSection, WrapperRatingSection } from './styles'


export default function RatingSection() {
  const [Rating, setRating] = useState<number[]>([])
  const [ClearBtnState, updateClearBtn] = useState(false)
  return (
    <WrapperRatingSection>
      <TopSection>Rating</TopSection>
      <BottomSection>
          <CheckBoxElement Rating={Rating} starnumber={1} updateClearBtn={updateClearBtn} setRating={setRating}/>
          <CheckBoxElement Rating={Rating} starnumber={2} updateClearBtn={updateClearBtn} setRating={setRating}/>
          <CheckBoxElement Rating={Rating} starnumber={3} updateClearBtn={updateClearBtn} setRating={setRating}/>
          <CheckBoxElement Rating={Rating} starnumber={4} updateClearBtn={updateClearBtn} setRating={setRating}/>
          <CheckBoxElement Rating={Rating} starnumber={5} updateClearBtn={updateClearBtn} setRating={setRating}/>
        {ClearBtnState && <ClearBtn type='reset' onClick={() => {
          setRating([]);
          updateClearBtn(false)

        }}>Clear</ClearBtn>}
      </BottomSection>
    </WrapperRatingSection>
  )
}
