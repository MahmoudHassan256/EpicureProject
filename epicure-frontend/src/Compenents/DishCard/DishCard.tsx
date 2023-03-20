import React, { } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SetWindowSize from '../../Helper/setWindowSize';
import { DishData } from '../../Interfaces/LayoutInterfaces';
import { setSelectedDish } from '../../Slicers/SelectedDishSlice';
import { SheikelLine, Dish, DishImg, DishInfo, DishName, Ingredients, TypeIcon, SheikelIcon, Price, PriceContainer, PriceContainerDesktop } from './Styles';
export default function DishCard(props: DishData) {
  const windowSize = SetWindowSize();
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const isDesktop = (windowSize > 600) ? true : false;
  return (
    <Dish onClick={()=>{
    dispatch(setSelectedDish({url:props.url,name:props.name,ingredients:props.ingredients,type:props.type,price:props.price}));
    if(!isDesktop){
      navigate("/Dish");
      window.scrollTo(0,0);
    }
    if(props.closeModal){
    props.closeModal(true);
    window.scrollTo(0,0);
    }

    }}>
      <DishImg src={props.url} alt="dish" />
      <DishInfo>
        <DishName>{props.name}</DishName>
        <Ingredients>{props.ingredients}</Ingredients>
        <TypeIcon src="Images/Icon/Types/Type=Vegan, Size=Small.svg" alt="type" />
        {!isDesktop && <PriceContainer>
          <SheikelIcon src="Images/Icon/Sheikel.svg" alt="sheikel" />
          <Price>{props.price}</Price>
        </PriceContainer>
        }
        {isDesktop &&
          <PriceContainerDesktop>
            <SheikelLine></SheikelLine>
            <PriceContainer>
              <SheikelIcon src="Images/Icon/Sheikel.svg" alt="sheikel" />
              <Price>{props.price}</Price>
            </PriceContainer >
            <SheikelLine></SheikelLine>
          </PriceContainerDesktop>
        }
      </DishInfo>
    </Dish>
  )
}
