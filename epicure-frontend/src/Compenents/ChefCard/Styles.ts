import styled from "styled-components";
export const ChefoftheWeekContainer=styled.div`
height: 262px;
background: #000000;
@media screen and (min-width:600px){
height: 338px;
}
`
export const ChefoftheWeekImg=styled.img`
height: 262px;
width:100%;
@media screen and (min-width:600px){
    height: 338px;

}
`
export const ChefoftheWeekName=styled.div`
width:100%;
display: flex;
margin-right:20px;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px;
position: relative;
height: 51px;
left: 0px;
top:-51px;
right: 0px;
bottom: 0px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 47px;
text-align: center;
letter-spacing: 2.67px;
color: #000000;
background: rgba(255, 255, 255, 0.8);
@media screen and (min-width:600px){
padding: 0px;
height: 78px;
height: 47px;
line-height: 47px;
text-align: center;
top:-47px;
}
`