import React, { useState } from 'react'
import { Wrapper } from '../../../../Styles/Shared'
import SearchResultBox from './SearchResultBox/SearchResultBox';
import { SearchInput, HeroCardBackground, SearchBox, HeroCardText, SearchBar, SerachIcon } from './Styles'

export default function Hero() {
    const [SearchResult, updateSearchResult] = useState("");
    return (
        <Wrapper>
            <HeroCardBackground>
                <SearchBox>
                    <HeroCardText>Epicure works with the top
                        chef restaurants in Tel Aviv</HeroCardText>
                    <SearchBar>
                        <SerachIcon src="/Images/Icon/Search.svg" alt="" />
                        <SearchInput type="text" placeholder='Search for restaurant cuisine, chef' 
                        onChange={(event) => updateSearchResult(event.target.value)} />
                    </SearchBar>

                </SearchBox>
                {SearchResult!=="" && <SearchResultBox value={SearchResult}/>}
            </HeroCardBackground>
        </Wrapper>
    )
}
