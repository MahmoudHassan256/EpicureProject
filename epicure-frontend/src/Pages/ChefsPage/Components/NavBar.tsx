import React from 'react'
import { NavBarText, NavBarTextBold, NavBarWrapper } from './Styles'

interface NavBarProps{
    ActiveTab:string,
    setActiveTab:React.Dispatch<React.SetStateAction<string>>
}
export default function NavBar(props:NavBarProps) {
  return (
    <NavBarWrapper>
        {(props.ActiveTab==='All' && <NavBarTextBold>All</NavBarTextBold>) || <NavBarText onClick={()=>props.setActiveTab('All')}>All</NavBarText>}
        {(props.ActiveTab==='New' && <NavBarTextBold>New</NavBarTextBold>) || <NavBarText onClick={()=>props.setActiveTab('New')}>New</NavBarText>}
        {(props.ActiveTab==='Most Viewd' && <NavBarTextBold>Most Viewd</NavBarTextBold>) || <NavBarText onClick={()=>props.setActiveTab('Most Viewd')}>Most Viewd</NavBarText>}    
    </NavBarWrapper>
  )
}
