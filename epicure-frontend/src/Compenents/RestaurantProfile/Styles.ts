import styled from "styled-components";
export const WrapperRestaurantProfile=styled.div`
margin-top:46px;
@media screen and (min-width:600px){
margin-top:64px;
}
`
export const DishesContainer=styled.div`
width:99.4%;
margin:29px auto 58px;
display:flex;
flex-direction:column;
align-items:center;
gap:22px;
@media screen and (min-width:600px){
display:flex;
flex-direction:row;
width:82.2%;
flex-wrap:wrap;
gap:32px;
margin:47px 8.8% 49px 8.8%;
}
`