import React, { } from 'react'
import { useSelector } from 'react-redux';
import HeaderSignIn from '../../Compenents/Header/HeaderSignIn';
import HeaderSignUp from '../../Compenents/Header/HeaderSignUp';
import IsDesktop from '../../Helper/WindowCheker';
import ContentContainer from './Components/ContentContainer/ContentContainer';
import Hero from './Components/Hero/Hero';
import { HomePageWrapper } from './styles';


export default function HomePage() {
  const signInState: boolean = useSelector((state: any) => state.signinstate.value)
  const signUpState: boolean = useSelector((state: any) => state.signupstate.value)

  return (
  <div>
    {IsDesktop() && ((signInState && <HeaderSignIn />) || (signUpState && <HeaderSignUp />))}
  <HomePageWrapper>
      <Hero />
      <ContentContainer />
    </HomePageWrapper>
    </div>
  )
}

