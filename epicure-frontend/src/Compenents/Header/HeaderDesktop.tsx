import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Epicure, HeaderDesktopWrapper, Icon, IconButton, LeftSide, MenuText, MenuTextBold, NavBar, RightSide, SearchBoxDesktop, SearchInput } from '../styles'
import SearchBoxResultHeader from './SearchBoxResultHeader/SearchBoxResultHeader';
import {setOpenSignIn} from '../../Slicers/SingInStateSlice' 

export default function HeaderDesktop() {
    const location = useLocation();

    const navigate = useNavigate();
    function GoToChefs() {
        navigate('Chefs');
        window.scrollTo(0, 0);
    }
    function GoToRestaurants() {
        navigate('Restaurants');
        window.scrollTo(0, 0);
    }
    function GoToHome() {
        navigate('');
        window.scrollTo(0, 0);

    }
    const [OpenSearch, updateOpenSearch] = useState(false);
    const [SearchResult, updateSearchResult] = useState("");
    const dispatch=useDispatch();
    return (
        <HeaderDesktopWrapper>
            <NavBar>
                <LeftSide>
                    <Icon src="./Images/Logo.svg" alt="logo" />
                    <Epicure onClick={() => { GoToHome() }}>Epicure</Epicure>
                    {((location.pathname === '/Restaurant' || location.pathname === '/Restaurants') && <MenuTextBold onClick={() => { GoToRestaurants() }}>Resturansts </MenuTextBold>) || <MenuText onClick={() => { GoToRestaurants(); }}>Resturansts</MenuText>}
                    {((location.pathname === '/Chefs') && <MenuTextBold onClick={() => { GoToChefs() }}>Chefs </MenuTextBold>) || <MenuText onClick={() => { GoToChefs(); }}>Chefs</MenuText>}
                </LeftSide>
                <RightSide>
                    {OpenSearch && <SearchBoxDesktop>
                        <SearchInput type="text" placeholder='Search for restaurant dish' onChange={(event)=>{updateSearchResult(event.target.value)}}/>
                        <IconButton onClick={() => {
                            updateOpenSearch(false);
                            updateSearchResult("");

                            }}><Icon src="./Images/Icon/Search.svg" alt="" /></IconButton>
                    </SearchBoxDesktop>
                    }
                    {SearchResult!=="" && <SearchBoxResultHeader value={SearchResult}/>}
                    {!OpenSearch && <IconButton onClick={() => {
                    updateOpenSearch(true);
                    }}><Icon src="./Images/Icon/Search.svg" alt="" /></IconButton>}
                    <IconButton onClick={()=>{
                        dispatch(setOpenSignIn(true));
                    }}><Icon src="./Images/Icon/User.svg" alt="" /></IconButton>
                    <IconButton><Icon src="./Images/Icon/Bag.svg" alt="" /></IconButton>
                </RightSide>
            </NavBar>
        </HeaderDesktopWrapper>
    )
}
