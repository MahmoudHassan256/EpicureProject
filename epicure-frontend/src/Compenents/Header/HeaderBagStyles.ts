import styled from "styled-components";
export const HeaderBagWrapper=styled.div`
display: flex;
position:absolute;
left:0;
flex-direction: column;
align-items: center;
padding: 16px 12px 24px;
gap: 83px;
width:95%;
background: #FFFFFF;
box-shadow: 2px 4px 10px rgba(175, 175, 175, 0.25);
`
export const HeaderBagEmptyContent=styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
gap: 16px;
min-height: 105px;
opacity: 0.5;
`
export const HeaderBagEmptyIcon=styled.div`
background: url("Images/Icon/Bag.svg");
background-size: cover;
width: 49px;
height: 49px;
`
export const HeaderBagEmptyText=styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 16px;
line-height: 20px;
text-align: center;
letter-spacing: 1.97px;
text-transform: uppercase;
color: #000000;
`
export const HeaderBagContent=styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 16px 12px 24px;
gap: 83px;
max-height: 514px;
`
export const HeaderBagContentTopSide=styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
gap: 20px;
min-height: 299px;

`
export const TopSideHeader=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 4px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 2.67px;
text-transform: uppercase;
color: #000000;

`
export const Bag=styled.div`
display:flex;
flex-direction: column;
gap:20px;
min-height: 212px;
width: 100%;
overflow-y:scroll ;
`
export const HeaderBagContnetBotSide=styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
gap: 20px;
`
export const Total=styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 2.67px;
text-transform: uppercase;
color: #000000;
`
export const CheckOutButton=styled.button`
cursor: pointer;
box-sizing: border-box;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 5px 24px;
gap: 10px;
background: #000000;
border: 1px solid #000000;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 20px;
text-align: center;
letter-spacing: 2.67px;
text-transform: uppercase;
color: #FFFFFF;
`