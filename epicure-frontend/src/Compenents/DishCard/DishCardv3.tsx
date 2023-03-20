import React from 'react'
import { DishBagData } from '../../Interfaces/LayoutInterfaces'
import { Dishv3, Dishv3Added, Dishv3Img, Dishv3ImgBox, Dishv3Info, Dishv3Name, Dishv3Price, Pricev3 } from './stylesv3'

export default function DishCardv3(props:DishBagData) {

  return (
    <Dishv3>
      <Dishv3ImgBox><Dishv3Img src={props.url}/></Dishv3ImgBox>
      <Dishv3Info>
      <Dishv3Name>{props.quantity}x {props.name}</Dishv3Name>
      <Dishv3Added>
        {props.sides?.at(0)} | {props.changes?.at(0)}
      </Dishv3Added>
      <Dishv3Price>
        <img src="Images/Icon/Sheikel.svg" alt=""  style={{width:"8px",height:"14px"}}/>
        <Pricev3>{props.price}</Pricev3>
      </Dishv3Price>
      </Dishv3Info>
    </Dishv3>
  )
}
