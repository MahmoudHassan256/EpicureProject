import styled from "styled-components";
export const ChefsPageWrapper=styled.div`
margin-top:46px;
padding:0 5.333% 0 5.333%;
@media screen and (min-width:600px){
    padding:0 8.8% 0 8.8%;
    
    display:flex;
    flex-direction:column;
    justify-content:center;
}
`
export const ChefsPageHeader=styled.div`
width: 17.06%;
height: 22px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 22px;
letter-spacing: 1.92px;
text-transform: uppercase;
color: #000000;
margin:14px 0 24px;
`
export const ChefsPageContainer=styled.div`
margin:0 auto 47px;
display:flex;
flex-direction:column;
gap:24px;
@media screen and (min-width:600px){
display:grid;  
grid-template-columns: 1fr 1fr 1fr;
gap:24px;
margin: 0 auto 81px;
}
`