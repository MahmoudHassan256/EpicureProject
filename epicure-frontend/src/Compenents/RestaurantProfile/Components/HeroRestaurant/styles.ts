import styled from "styled-components";
export const HeroRestaurantWrapper=styled.div`
@media screen and (min-width:600px){
    display:flex;
    flex-direction:column;
    align-items:center;
}
`
export const HeroRestaurantImg=styled.img`
width:100%;
height: 272px;
@media screen and (min-width:600px){
    height: 425px;
    width:82.3%;
}
`
export const HeroRestaurantName=styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
letter-spacing: 2.67px;
color: #000000;
@media screen and (min-width:600px){
    font-size: 56px;
    line-height: 64px;

}
`
export const HeroRestaurantChef=styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 16px;
line-height: 20px;
letter-spacing: 1.97px;
color: #000000;
@media screen and (min-width:600px){
    font-size: 32px;
    line-height: 36px;
}
`
export const TimeBox=styled.div`
display:flex;
align-items: center;
padding: 0px;
gap: 8px;
@media screen and (min-width:600px){
    margin:32px auto 48px;
}
`
export const ClockIcon=styled.img`
min-width: 17px;
min-height: 18px;
`
export const TimeState=styled.div`
font-family: 'Helvetica Neue';
height:20px;
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 20px;
letter-spacing: 1.97px;
color: #000000;
`
export const RestaurantInfo=styled.div`
width:89.3%;
margin:24px auto 32px;
display:flex;
flex-direction:column;
gap:15px;
@media screen and (min-width:600px){
    align-items:center;
    margin: 32px auto 0;
    gap:4px;
    width:100%;
}
`
