import React, { } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SetWindowSize from '../../Helper/setWindowSize';
import { DishData } from '../../Interfaces/LayoutInterfaces';
import { setSelectedDish } from '../../Slicers/SelectedDishSlice';
import { PriceContainer, IconBox } from './Styles';
import { BottomSection, Dishv2, Dishv2Img, Dishv2Info, Dishv2Name, Ingredientsv2, PriceContainerDesktopv2, PriceContainerv2, Pricev2, SheikelIconv2, SheikelLinev2 } from './stylesvs';

export default function DishCard(props: DishData) {
  const windowSize = SetWindowSize();
  const dispatch=useDispatch();
  const navigate=useNavigate();
  
  const isDesktop = (windowSize > 600) ? true : false;
  return (
    <Dishv2 onClick={()=>{
      dispatch(setSelectedDish({url:props.url,name:props.name,ingredients:props.ingredients,type:props.type,price:props.price}));
      if(!isDesktop){        
        navigate("/Dish");
        window.scrollTo(0,0);
      }
      else if(isDesktop && props.closeModal){
        props.closeModal(true);
        window.scrollTo(0,0);
      }
        }}>
 
      <div style={{
        width:"100%",
        height:"100%"
      }}><Dishv2Img src={props.url} alt="dish" /></div>
      <Dishv2Info>
        <Dishv2Name>{props.name}</Dishv2Name>
        <Ingredientsv2>{props.ingredients}</Ingredientsv2>
        {!isDesktop && 
        <BottomSection>
          <PriceContainerv2>
            <IconBox><SheikelIconv2 src="Images/Icon/Sheikel.svg" alt="sheikel" /></IconBox>
            <Pricev2>{props.price}</Pricev2>
          </PriceContainerv2>
          <SheikelLinev2 />
        </BottomSection>
        }
        {isDesktop &&
          <PriceContainerDesktopv2>
            <SheikelLinev2 />
            <PriceContainer>
              <SheikelIconv2 src="Images/Icon/Sheikel.svg" alt="sheikel" />
              <Pricev2>{props.price}</Pricev2>
            </PriceContainer >
            <SheikelLinev2 />
          </PriceContainerDesktopv2>
        }
      </Dishv2Info>
    </Dishv2>
  )
}
