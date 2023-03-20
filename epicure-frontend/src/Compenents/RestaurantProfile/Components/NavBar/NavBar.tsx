import React from 'react'
import { NavBarText, NavBarTextBold, NavBarWrapper } from './styles'
interface NavBarDate{
  ActiveTab:string,
  setActiveTab:React.Dispatch<React.SetStateAction<string>>
}
export default function NavBar(props:NavBarDate) {
  return (
    <NavBarWrapper>
      {(props.ActiveTab==='Breackfast' && <NavBarTextBold>Breackfast</NavBarTextBold>) || <NavBarText onClick={()=>{props.setActiveTab('Breackfast')}}>Breackfast</NavBarText>}
      {(props.ActiveTab==='Lunch' && <NavBarTextBold>Lunch</NavBarTextBold>) || <NavBarText onClick={()=>{props.setActiveTab('Lunch')}}>Lunch</NavBarText>}
      {(props.ActiveTab==='Dinner' && <NavBarTextBold>Dinner</NavBarTextBold>) || <NavBarText onClick={()=>{props.setActiveTab('Dinner')}}>Dinner</NavBarText>}
    </NavBarWrapper>
  )
}
