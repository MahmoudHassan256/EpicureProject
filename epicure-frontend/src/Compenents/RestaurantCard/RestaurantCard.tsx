import React from 'react'
import { useNavigate } from 'react-router-dom';
import SetWindowSize from '../../Helper/setWindowSize';
import { RestaurantData } from '../../Interfaces/LayoutInterfaces';
import StarsSlide from '../StarsSlide/StarsSlide';
import { Restaurant, RestaurantChefName, RestaurantImg, RestaurantImgDiv, RestaurantInfo, RestaurantName } from './Styles';
export default function RestaurantCard(props: RestaurantData) {
    const windowSize = SetWindowSize();
    const navigate = useNavigate();
    function goToRestaurantProfile(Restaurant: RestaurantData) {
        navigate({ pathname: '/Restaurant' }, { state: Restaurant });
        window.scrollTo(0, 0);
    }

    const isDesktop = (windowSize > 600) ? true : false;

    return (
        <Restaurant onClick={() => goToRestaurantProfile(props)}>
            <RestaurantImgDiv><RestaurantImg src={props.url} alt="restaurant" />
            </RestaurantImgDiv>
            <RestaurantInfo>
                <RestaurantName> {props.name}</RestaurantName>
                <RestaurantChefName>{props.chef}</RestaurantChefName>
                {isDesktop && <StarsSlide starsNumber={props.stars} />}
            </RestaurantInfo>
        </Restaurant>
    )
}
