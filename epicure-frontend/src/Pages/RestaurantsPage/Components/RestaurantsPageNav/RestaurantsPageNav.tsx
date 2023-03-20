import React from 'react'
import IsDesktop from '../../../../Helper/WindowCheker';
import { RestaurantsNavTxt, RestaurantsNavTxtBold, WrapperRestaurantsPageNav } from './Styles';
export interface RestaurantsPageNavData{
    setActiveTab: React.Dispatch<React.SetStateAction<string>>,
    ActiveTab: string
}
export default function RestaurantsPageNav(props: RestaurantsPageNavData) {
    return (
        <WrapperRestaurantsPageNav>
            {(props.ActiveTab === 'All' && <RestaurantsNavTxtBold>All</RestaurantsNavTxtBold>) || <RestaurantsNavTxt onClick={() => {
                props.setActiveTab('All')
            }}>All</RestaurantsNavTxt>}
            {(props.ActiveTab === 'New' && <RestaurantsNavTxtBold>New</RestaurantsNavTxtBold>) || <RestaurantsNavTxt onClick={() => {
                props.setActiveTab('New');
            }}>New</RestaurantsNavTxt>}
            {(props.ActiveTab === 'Most Popular' && <RestaurantsNavTxtBold>Most Popular</RestaurantsNavTxtBold>) || <RestaurantsNavTxt onClick={() => {
                props.setActiveTab('Most Popular')
            }}>Most Popular</RestaurantsNavTxt>}
            {(props.ActiveTab === 'Open Now' && <RestaurantsNavTxtBold>Open Now</RestaurantsNavTxtBold>) || <RestaurantsNavTxt onClick={() => {
                props.setActiveTab('Open Now')
            }}>Open Now</RestaurantsNavTxt>}
            {IsDesktop() && ((props.ActiveTab === 'Map View' && <RestaurantsNavTxtBold>Map View</RestaurantsNavTxtBold>) || <RestaurantsNavTxt onClick={() => {
                props.setActiveTab('Map View')
            }}>Map View</RestaurantsNavTxt>)}
        </WrapperRestaurantsPageNav>
    )
}
