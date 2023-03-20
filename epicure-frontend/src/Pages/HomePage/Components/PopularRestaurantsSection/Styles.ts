import styled from "styled-components";
import { ClickableIcon } from "../../../../Styles/Shared";
export const WrapperPopularRestaurantsSection=styled.div`
margin: 0 0 0 5.57%;
@media screen and (min-width:600px){
padding:0 8.36% 0;
`
export const PopularRestaurantsSectionText = styled.div`
height:24px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;cd react-carousel
font-size: 18px;
line-height: 24px;
letter-spacing: 1.25px;
text-transform: uppercase;
color: #000000;
@media screen and (min-width:600px){
    font-size: 30px;
    line-height: 35px;
    height:35px;
    text-align: center;
    flex: none;
    order: 0;
    flex-grow: 0;
}
`
export const AllRestaurantsText=styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 35px;
text-align: right;
letter-spacing: 2px;
text-transform: capitalize;
color: #000000;
@media screen and (min-width:600px){
    font-size: 24px;
}
`
export const ArrowIcon=styled(ClickableIcon)`
    width: 24px;
    height: 24px;
}
`
export const PopularRestaurantsSectionContainer=styled.div`
display:flex;
overflow-x:scroll;
gap:24px;
height:232px;
height:100%;
@media screen and (min-width:600px){
    overflow:hidden;
    align-items:flex-start;
    padding: 0px;
    gap: 24px;
`
export const AllBox=styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
padding: 0px;
gap: 12px;
height: 35px;
@media screen and (min-width:600px){
    justify-content: flex-end;
}
`
