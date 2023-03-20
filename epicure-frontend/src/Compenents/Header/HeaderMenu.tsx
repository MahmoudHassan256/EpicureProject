import React from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { HeaderWrapper, IconButton, IconXClose, LeftSide, Menu, MenuBackground, MenuText } from '../styles';
import { UpdateOpen } from './Header';

export default function HeaderMenu(props: UpdateOpen) {
  const navigate=useNavigate();
  function GoToChefs(){
    navigate('/Chefs');
    window.scrollTo(0,0);
  }
  function GoToRestaurants(){
    navigate('/Restaurants');
    window.scrollTo(0,0);
  }
  return (
    <HeaderWrapper>
      <MenuBackground>
        <LeftSide><IconButton><IconXClose onClick={() => {
          props.CloseMenu(false);
        }} src="/Images/Icon/X.svg" alt="X" /></IconButton>
        </LeftSide>
        <Menu>
          <MenuText onClick={()=>{
            GoToRestaurants();
            props.CloseMenu(false);

          }}>Resturansts</MenuText>
          <MenuText onClick={()=>{
            GoToChefs();
            props.CloseMenu(false);
          }}>Chefs</MenuText>
        </Menu>
        <Footer/>
      </MenuBackground>
    </HeaderWrapper>
  )
}
