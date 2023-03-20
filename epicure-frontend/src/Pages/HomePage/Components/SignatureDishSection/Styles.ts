import styled from "styled-components";
export const WrapperSignatureDishesContainer=styled.div`
margin-top:48px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 32px;
height: 584px;
background: #FAFAFA;
padding: 39px 42.6px;
@media screen and (min-width:600px){
margin-top:80px;
padding: 39px 387.5px;
gap: 32px;
width: 45.5%;
height: 265px;
}`
export const SignatureDishesText=styled.div`
height: 35px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 35px;
letter-spacing: 1.25px;
text-transform: uppercase;
color: #000000;
@media screen and (min-width:600px){
font-size: 30px;
text-align: center;
letter-spacing: 2.14px;
}
`
export const IconAndNameContainer=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 56px;
height: 468.98px;
width: 36%;
@media screen and (min-width:600px){
flex-direction: row;
gap: 40px;
height: 127px;
width:50%;
}
`
export const IconAndName=styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
gap: 32px;
height: 127px;
`
export const TypeName=styled.div`
height: 35px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 30px;
text-align: center;
letter-spacing: 1.97px;
color: #000000;
@media screen and (min-width:600px){
    font-size: 24px; 
}
`
export const SignatureDishesTypeIcon=styled.img`
width: 77.42px;
height: 60px;
@media screen and (min-width:600px){
    width: 77.42px;
height: 60px;
}
`