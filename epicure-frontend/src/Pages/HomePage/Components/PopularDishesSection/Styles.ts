import styled from "styled-components";
import { WrapperPopularRestaurantsSection } from "../PopularRestaurantsSection/Styles";
export const PopularDishesContainer=styled.div`
height: 388px;
overflow-x: scroll;
display: flex;
overflow-y: hidden;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 24px;
@media screen and (min-width:600px){
overflow-x:hidden;
height: 654px;;
}
`
export const PopularDishesText=styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 35px;
letter-spacing: 1.25px;
text-transform: uppercase;
color: #000000;
height: 35px;
@media screen and (min-width:600px){
    font-size: 30px;
    text-align: center;

}
`
export const WrapperPopularDishesSection=styled(WrapperPopularRestaurantsSection)`
margin-top:48px;
@media screen and (min-width:600px){
    margin-top:80px;
}
`