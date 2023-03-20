import React, { useRef } from 'react'
import { Stars } from '../../Interfaces/PagesInerfaces'
import { Box, Icon } from '../styles'

export default function StarsSlide(props:Stars) {
  const starsArray=useRef<string[]>([])
  if(props.starsNumber){
  for (let index = 0; index < props.starsNumber; index++) {
    starsArray.current[index]='/Images/Icon/StarFilled.svg'
  }
  for (let index = props.starsNumber; index < 5; index++) {
    starsArray.current[index]='/Images/Icon/StarEmpty.svg';
  }
}
  return (
    <Box>
      {starsArray.current.map((data,key)=>
      <Icon key={key} src={data} alt='star'/>
      )}
    </Box>
  )
}
