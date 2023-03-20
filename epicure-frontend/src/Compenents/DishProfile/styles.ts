import styled from "styled-components";
export const DishProfileWrapper = styled.div`
@media screen and (min-width:600px){
    position:absolute;
    left:0;right:0;
    top:0;
    z-index:4;

width:39.7%;
margin:0px auto 80px;
}
`
export const DishProfileBackground = styled.div`
z-index:2;

background:#FFFFFF;
@media screen and (min-width:600px){
    position:fixed;
    left:0;right:0;top:0;bottom:0;
    background: rgba(0, 0, 0, 0.7);
}
    `
export const CloseIcon = styled.img`
margin:13px 0 13px 5.33%;
cursor:pointer;
@media screen and (min-width:600px){
    margin:0 0 0 0;
}
`
export const DishProfileHeader = styled.div`
width:100%;
height:46px;
background: #FFFFFF;
z-index:3;
position:fixed;
@media screen and (min-width:600px){
    position:initial;
    margin:80px auto 0;
    height:auto;
    background:none;

}
`
export const ChangesContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 8px 0px 0px;
gap: 24px;
`
export const SideChoserContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 8px 0px 0px;
gap: 24px;
`
export const AddToBagBtn = styled.button`
cursor:pointer;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 5px 24px;
gap: 10px;
width: 206px;
height: 48px;
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
@media screen and (min-width:600px){
    margin-bottom:28px;
}
`
export const QuantityHeader = styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 20px;
line-height: 18px;
text-align: center;
letter-spacing: 1.97px;
color: #000000;
text-decoration:underline 1.8px rgba(222, 146, 0, 0.9);
@media screen and (min-width:600px){
    display:flex;
    align-self:center;
}
`
export const QuantityContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 8px 0px 0px;
gap: 24px;
@media screen and (min-width:600px){
    display:flex;
    align-self:center;
}
`
export const QuantityCounter = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 32px;
height: 20px;
@media screen and (min-width:600px){

}
`
export const MinusBtn = styled.img`
cursor:pointer;
width: 19px;
height: 20px;
`
export const QuantityNumber = styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 18px;
text-align: center;
letter-spacing: 1.97px;
color: #000000;
`
export const PlusBtn = styled.img`
cursor:pointer;
width: 19px;
height: 20px;
`
export const Container = styled.div`
margin:48px 0 48px 5.333%;
display:flex;
flex-direction:column;
gap:48px;
background: #FFFFFF;
@media screen and (min-width:600px){
padding-top: 48px;
margin:0;
align-items:center;
gap: 40px;
}
`
export const ChangesHeader = styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 20px;
line-height: 18px;
text-align: center;
letter-spacing: 1.97px;
color: #000000;
text-decoration:underline 1.8px rgba(222, 146, 0, 0.9);
@media screen and (min-width:600px){
    display:flex;
    align-self:center;

}
`
export const SiderInput = styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 18px;
text-align: center;
letter-spacing: 1.97px;
color: #000000;
`
export const ChangeInput = styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 18px;
text-align: center;
letter-spacing: 1.97px;
color: #000000;
`
export const SideChoserHeader = styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 20px;
line-height: 18px;
text-align: center;
letter-spacing: 1.97px;
color: #000000;
text-decoration:underline 1.8px rgba(222, 146, 0, 0.9);
@media screen and (min-width:600px){
    display:flex;
    align-self:center;
}
`