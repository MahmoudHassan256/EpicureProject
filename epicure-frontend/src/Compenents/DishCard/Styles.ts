import styled from "styled-components";

export const Dish=styled.div`
cursor:pointer;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
width:245px;
height: 390px;
@media screen and (min-width:600px){
    height: 654px;
    width: 380px;
}
`
export const DishImg=styled.img`

height: 152px;
width:100%;

@media screen and (min-width:600px){
   height: 306px;
}
`
export const DishInfo=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 16px;
gap: 16px;
height: 236px;
background: #F9F4EA;
@media screen and (min-width:600px){
    align-items: center;
    padding: 24px 0px 0px;
    height: 348px;   
    gap: 8px;
}
`
export const DishName=styled.div`
height: 21px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 18px;
height: 21px;
line-height: 21px;
letter-spacing: 2.67px;
color: #000000;
@media screen and (min-width:600px){
    font-size: 40px;
    height:47px;
    line-height: 47px;
    text-align: center;  
}
`
export const Ingredients=styled.div`
font-family: 'Helvetica Neue';
height: 100px;
font-style: normal;
font-weight: 200;
font-size: 16px;
line-height: 20px;
letter-spacing: 1.97px;
color: #000000;
overflow: hidden;
@media screen and (min-width:600px){
    overflow:visible;
    height: 100%;
    width:79%;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
}
`
export const TypeIcon=styled.img`
width: 30px;
height: 24px;
@media screen and (min-width:600px){
    
}
`
export const SheikelIcon=styled.img`
width: 8.11px;
height: 11px;
@media screen and (min-width:600px){
    width: 14px;
height: 19px;
}
`
export const Price=styled.div`
height: 19px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
text-align: center;
letter-spacing: 1.97px;
color: #000000;
@media screen and (min-width:600px){
    height: 30px;
    font-weight: 200;
    font-size: 24px;
    line-height: 30px; 
}
`
export const DishInfoText=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 8px;
height: 129px;

`
export const PriceContainer=styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-end;
align-items: center;
padding: 0px;
gap: 4px;
height: 19px;
@media screen and (min-width:600px){
    height: 30px;  
}
`
export const SheikelLine=styled.div`
width: 100%;
height: 0px;
border: 0.5px solid #979797;    
}
`
export const PriceContainerDesktop=styled.div`
width:77%;
display:flex;
justify-content:center;
align-items:center;
`

export const IconBox=styled.div`
width: 8px;
height: 19px;
`
