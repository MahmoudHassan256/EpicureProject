import styled from "styled-components";
import { WrapperPopularRestaurantsSection } from "../PopularRestaurantsSection/Styles";
export const WrapperChefOfTheWeekSection=styled(WrapperPopularRestaurantsSection)`
margin:48px 0 0 5.333%;
align-items: flex-start;
@media screen and (min-width:600px){
    margin-top:80px;
}
`
export const ChefoftheWeekContainer=styled.div`
@media screen and (min-width:600px){
    display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 40px;
height: 447px;
width:100%;
}
`
export const ChefOfTheWeekText=styled.div`
height: 35px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 35px;
letter-spacing: 1.25px;
text-transform: uppercase;
color: #000000;
margin-bottom:12px;
@media screen and (min-width:600px){
    font-size: 30px;
    text-align: center;
    width:100%;
}
`
export const ChefInfoSection=styled.div`
margin:0 5.333% 0 0;
@media screen and (min-width:600px){
    display:flex;
    flex-direction:row;
    height: 372px;
    justify-content:space-between;
}
`
export const ChefoftheWeekInfo=styled.div`
height: 252px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 28px;
text-align: justify;
letter-spacing: 1.25px;
color: #000000;
width: 96%;
@media screen and (min-width:600px){
font-size: 24px;
margin-top: 21px;
line-height: 35px;
height: 255px;
width:56%;
}
`
export const ChefOfTheWeekNameRestaurants=styled.div`
margin-top:32px;
height: 25px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 16px;
line-height: 25px;
letter-spacing: 1.25px;
text-transform: uppercase;
color: #000000;
margin-bottom: 16px;
@media screen and (min-width:600px){
    height: 35px;
    font-size: 30px;
    line-height: 35px;
    text-transform: capitalize;
}
`
export const RestaurantsContainer=styled.div`
display: flex;
    flex-direction: row;
    overflow-x: scroll;
    gap: 24px;
    width: 100%;
    @media screen and (min-width:600px){
        overflow-x:hidden;
    }
`