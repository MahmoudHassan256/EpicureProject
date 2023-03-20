import styled from "styled-components";


export const WrapperRestaurantsPageNav=styled.div`
display:flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap:18px;
height: 22px;
margin:0  0 0 5.333%;
@media screen and (min-width:600px){
    align-self:center;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 40px;
    width:48%;
}
`
export const RestaurantsNavTxt=styled.div`
height: 22px;
cursor:pointer;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 22px;
letter-spacing: 1.92px;
color: #000000;
@media screen and (min-width:600px){
}
`
export const RestaurantsNavTxtBold=styled(RestaurantsNavTxt)`
font-weight: 400;
font-weight:bold;
text-decoration: underline #DE9200;
line-height: 21px;
@media screen and (min-width:600px){
text-decoration:none;
}
`