import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import DishCard from '../../../../Compenents/DishCard/DishCard'
import { settings } from '../../../../Constants/Variables'
import IsDesktop from '../../../../Helper/WindowCheker'
import { DishData } from '../../../../Interfaces/LayoutInterfaces'
import DishProfile from '../../../../Compenents/DishProfile/DishProfile'
import { PopularDishesContainer, PopularDishesText, WrapperPopularDishesSection } from './Styles'


export default function PopularDishesSection() {
  const DishesArray:DishData[] = useSelector((state: any) => state.dishes.value);
  const [Modal,setModalState]=useState(false);
  const Dish:DishData=useSelector((state:any)=> state.selecteddish.value)
  function AddDishesDesktop() {
    return (DishesArray.slice(0, 3).map((data, key) =>
      <DishCard  key={key} name={data.name} url={data.url} ingredients={data.ingredients} price={data.price} closeModal={setModalState}/>
    ))
  }
  function AddDishesMobile() {
    return (DishesArray.map((data, key) =>
      <DishCard key={key} name={data.name} url={data.url} ingredients={data.ingredients} price={data.price} closeModal={setModalState}/>
    ))
  }
  return (
    <WrapperPopularDishesSection>
  {Modal && <DishProfile Dish={Dish} ModalCloser={setModalState}/>}
      <PopularDishesText>Signature Dish Of:</PopularDishesText>
      {IsDesktop() && <PopularDishesContainer>
        {AddDishesDesktop()}
      </PopularDishesContainer>}
      {!IsDesktop() && <Slider{...settings}>{
        AddDishesMobile()
      }
      </Slider>}
    </WrapperPopularDishesSection>
  )
}
