import React, { useState } from 'react'
import { UpdateOpen } from './Header'
import { HeaderWrapper, Icon, IconButton, NavBarContent, NavBarHeader, SearchBackground, SearchBar, SearchInput, SearchTerm } from '../styles'
import SearchBoxResultHeader from './SearchBoxResultHeader/SearchBoxResultHeader';

export default function HeaderSearch(props: UpdateOpen) {
    const [SearchResult, updateSearchResult] = useState("");
    return (
        <HeaderWrapper>
            <SearchBackground>
                <NavBarHeader>
                    <IconButton onClick={() => { props.CloseMenu(false) }}><Icon src="/Images/Icon/X.svg" alt="x" /></IconButton>
                    <SearchTerm>Serach</SearchTerm>
                </NavBarHeader>
                <NavBarContent>
                    <SearchBar>
                        <IconButton><Icon src="/Images/Icon/Search.svg" alt="search" /></IconButton>
                        <SearchInput type="text" placeholder='Search for restaurant cuisine, chef' onChange={(event) => { updateSearchResult(event.target.value) }} />
                    </SearchBar>
                    {SearchResult!=="" && <SearchBoxResultHeader value={SearchResult}/>}
                </NavBarContent>
            </SearchBackground>
        </HeaderWrapper>
    )
}
