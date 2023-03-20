import styled from "styled-components";
import { ClickableIcon } from "../../../../Styles/Shared";

export const HeroCardBackground=styled.div`
background-image: url('../../../../Images/HomePage/Hero.png');
height: 273px;
margin-top:46px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
@media screen and (min-width: 600px){
    background-image: url('../../../../Images/HomePage/Desktop/Hero.png');  
    height: 696px;    
}
`
export const HeroCardText = styled.div`
font-family: 'Helvetica Neue';
height:64px;
font-style: normal;
font-weight: 200;
font-size: 24px;
line-height: 32px;
color: #000000;
letter-spacing: 1.97px;
width: 94.7%;
@media screen and (min-width:600px){
    height: 80px;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 1.97px; 
    width:52%;  
}
`
export const SearchInput=styled.input`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
height: 15px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 12px;
line-height: 15px;
letter-spacing: 1.29px;
width:-webkit-fill-available;
color: #000000;
background:transparent;
border:none;
@media screen and (min-width:600px){
    height: 29px;
    font-size: 24px;
    line-height: 29px;
}
`
export const SearchBox=styled.div`
background: rgba(255, 255, 255, 0.88);
height: 144px;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 18px;
width: 89.335%;
@media screen and (min-width:600px){
height: 221px;
width: 54.287%;
}
`
export const SerachIcon=styled(ClickableIcon)`
width:20px;
height:20px;
`
export const SearchBar=styled.div`
display: flex;
padding: 6px 12px;
flex-direction: row;
align-items: center;
gap: 8px;
width: 80%;
border: 0.5px solid #000000;
border-radius: 4px;
@media screen and (min-width:600px){
gap: 16px;
width: 65%;
}
`