import styled from "styled-components";
export const NavBarWrapper=styled.div`
padding:0 5.3% 0;
display:flex;
width:73.4%;
align-items: flex-start;
gap: 21px;
@media screen and (min-width:600px){
    width: 21.9%;
    gap:32px;
    margin:0 auto 0;
}
`
export const NavBarText=styled.div`
cursor:pointer;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 22px;
letter-spacing: 1.92px;
color: #000000;
@media screen and (min-width:600px){
    font-size: 24px;
    line-height: 29px;
}
`
export const NavBarTextBold=styled(NavBarText)`
font-weight:bold;
text-decoration: underline rgba(222, 146, 0, 0.9) 1.8px;
@media screen and (min-width:600px){
    font-weight: 200;
  
}
`