import styled from "styled-components";
export const HeroWrapper=styled.div`
background:#FFFFFF;
@media screen and (min-width:600px){
}
`
export const HeroImg=styled.img`
width:100%;
height: 271px;
object-fit:cover;
@media screen and (min-width:600px){
height:292px;
}
`
export const HeroInfo=styled.div`
margin:32px 9.866% 48px 5.33%; 
display:flex;
flex-direction:column;
gap:14px;
padding: 0px;

@media screen and (min-width:600px){
margin:40px 29.6% 0 29.6%; 
align-items: center;

}
`
export const HeroName=styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 26px;
letter-spacing: 2.67px;
color: #000000;
@media screen and (min-width:600px){
font-size: 32px;
text-align: center;
}
`
export const HeroIngredients=styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 16px;
line-height: 18px;
letter-spacing: 1.97px;
color: #000000;
@media screen and (min-width:600px){
font-size: 14px;
text-align: center;
}
`
export const HeroType=styled.div`
display:flex;
align-items:center;
gap:12px;
`
export const TypeIcon=styled.img``
export const HeroPriceContainer=styled.div`
width:100%;
display:flex;
justify-content: center;
align-items: center;
padding: 0px;
gap: 12px;
`
export const PriceLine=styled.div`
border: 0.5px solid #979797;
width:100%;
`
export const SheikelIcon=styled.img`
width: 11px;
height: 19px;
`
export const Price=styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 30px;
text-align: center;
letter-spacing: 1.03px;
color: #000000;
`