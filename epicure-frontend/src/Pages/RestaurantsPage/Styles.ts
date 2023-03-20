import styled from "styled-components";
export const RestaurantsPageWrapper = styled.div`
display:flex;
flex-direction:column;
gap:18px;
margin-top:62px;
@media screen and (min-width:600px){
gap:40px;
`
export const Map=styled.img`
margin-top:-40px;
`
export const RestaurantsPageText=styled.div`
height: 22px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 22px;
letter-spacing: 1.92px;
text-transform: uppercase;
color: #000000;
margin:0 0 0 5.333%;
` 
export const RestaurantsNav=styled.div`
display:flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 21px;
height: 22px;
@media screen and (min-width:600px){
    justify-content:center;
}
`
export const FilteringNav=styled.div`
display:flex;
justify-content:center;
gap:47px;
background: #FAFAFA;
`

export const RestaurantsPageRestaurantsContainer=styled.div`
flex-direction:column;
display:flex;
align-items: flex-start;
padding: 0px;
gap:24px;
padding: 0 5.9% 0 5.57%;
@media screen and (min-width:600px){
    padding:0 8.82% 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap:24px;
}
`