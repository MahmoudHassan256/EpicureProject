import React from 'react'
import { getCookie } from 'typescript-cookie';
import DishCardv3 from '../DishCard/DishCardv3';
import { Icon } from '../styles';
import { HeaderBagWrapper, HeaderBagEmptyContent, HeaderBagEmptyIcon, HeaderBagEmptyText, Bag, CheckOutButton, HeaderBagContent, HeaderBagContentTopSide, HeaderBagContnetBotSide, TopSideHeader, Total } from './HeaderBagStyles'
export default function HeaderBag() {
  const temparray = getCookie("Bag") ? getCookie("Bag")?.split(',,,') : [];
  let total=0;
  if (temparray) {
    if (temparray.length > 0) {
      temparray.forEach((ele)=>total+=(JSON.parse(ele).quantity * JSON.parse(ele).price));
    }
  }

  return (
    <HeaderBagWrapper>
      {(temparray && temparray.length === 0) &&
        <HeaderBagEmptyContent>
          <HeaderBagEmptyIcon />
          <HeaderBagEmptyText>Your bag is empty</HeaderBagEmptyText>
        </HeaderBagEmptyContent>}

      {(temparray && temparray.length > 0) &&
        <HeaderBagContent>
          <HeaderBagContentTopSide>
            <TopSideHeader>My Order</TopSideHeader>
            <Bag>
              {temparray.map((ele, key) => <DishCardv3 key={key} {...JSON.parse(ele)} />)}
            </Bag>
          </HeaderBagContentTopSide>
          <HeaderBagContnetBotSide>
            <Total>Total - <Icon src='Images/Icon/Sheikel.svg' alt='$' />{total}</Total>
            <CheckOutButton>Checkout</CheckOutButton>
          </HeaderBagContnetBotSide>
        </HeaderBagContent>}


    </HeaderBagWrapper>
  )
}
