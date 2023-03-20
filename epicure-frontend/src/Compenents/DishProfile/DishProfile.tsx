import React, { useState } from 'react'
import { DishData } from '../../Interfaces/LayoutInterfaces';
import { AddToBagBtn, ChangeInput, ChangesContainer, ChangesHeader, CloseIcon, Container, DishProfileBackground, DishProfileHeader, DishProfileWrapper, MinusBtn, PlusBtn, QuantityContainer, QuantityCounter, QuantityHeader, QuantityNumber, SideChoserContainer, SideChoserHeader, SiderInput } from './styles'
import { sides, changes } from '../../Constants/Variables'
import HeroDish from './HeroDish/HeroDish';
import Footer from '../Footer/Footer';
import IsDesktop from '../../Helper/WindowCheker';
interface sidesArrayData {
  value: string,
  state: boolean,
}
interface propstype {
  Dish: DishData,
  ModalCloser: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function DishProfile(props: propstype) {
  const [Quantity, updateQuantity] = useState<number>(1);
  const increaseCount = () => { updateQuantity(Quantity + 1) }
  const Dish = props.Dish;
  const decreaseCount = () => { if (Quantity > 1) updateQuantity(Quantity - 1) }
  const [SidesChecked, updateSides] = useState<sidesArrayData[]>([]);
  const [ChangesChecked, updateChanges] = useState<sidesArrayData[]>([]);
  const addSide = (value: string) => {
    let temp = SidesChecked.filter((ele) => ele.value === value);
    if (temp.length === 0) {
      updateSides(SidesChecked => [...SidesChecked, { value: value, state: true }])
    }
    else {
      updateSides(SidesChecked.filter((ele) => ele.value !== value))
    }
  }
  const addChange = (value: string) => {
    let temp = ChangesChecked.filter((ele) => ele.value === value);
    if (temp.length === 0) {
      updateChanges(ChangesChecked => [...ChangesChecked, { value: value, state: true }])
    }
    else {
      updateChanges(ChangesChecked.filter((ele) => ele.value !== value))
    }
  }
  return (
    <div>
      <DishProfileBackground>
      </DishProfileBackground>
      <DishProfileWrapper>
        <DishProfileHeader>
          {IsDesktop() && <CloseIcon src="Images/Icon/XWhite.svg" alt="" onClick={() => { props.ModalCloser(false) }} />}
        </DishProfileHeader>
        <HeroDish url={Dish.url} name={Dish.name} ingredients={Dish.ingredients} price={Dish.price} />
        <Container>
          <SideChoserContainer>
            <SideChoserHeader>Choose a side</SideChoserHeader>
            {sides.map((side, key) =>
              <SiderInput key={key}>
                <input type={"checkbox"} onChange={() => { addSide(side.value); }} />
                {side.value}
              </SiderInput>
            )}

          </SideChoserContainer>
          <ChangesContainer>
            <ChangesHeader>Changes</ChangesHeader>
            {changes.map((change, key) =>
              <ChangeInput key={key}>
                <input type={"checkbox"}  onChange={() => { addChange(change.value) }} />
                {change.value}
              </ChangeInput>
            )}
          </ChangesContainer>
          <QuantityContainer>
            <QuantityHeader>Quantity</QuantityHeader>
            <QuantityCounter>
              <MinusBtn src='Images/Icon/Minus.svg' alt='minus' onClick={decreaseCount} />
              <QuantityNumber>{Quantity}</QuantityNumber>
              <PlusBtn src='Images/Icon/Plus.svg' alt='plus' onClick={increaseCount} />
            </QuantityCounter>
          </QuantityContainer>
          <AddToBagBtn onClick={() => { props.ModalCloser(false) }}>Add to bag</AddToBagBtn>
        </Container>
        {!IsDesktop() && <Footer />}
      </DishProfileWrapper>
    </div>
  )
}
