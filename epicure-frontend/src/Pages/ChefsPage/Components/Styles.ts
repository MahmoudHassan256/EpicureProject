import styled from "styled-components";

export const NavBarWrapper=styled.div`
margin:0 0 38px;
display:flex;
height: 22px;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 21px;
@media screen and (min-width:600px){
margin: 48px auto 40px;
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 40px;
height: 22px;
}
`
export const NavBarText=styled.div`
cursor:pointer;
height: 22px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 22px;
letter-spacing: 1.92px;
color: #000000;
`
export const NavBarTextBold=styled(NavBarText)`
text-decoration:underline 1.8px rgba(222, 146, 0, 0.9);
font-weight:bold;
@media screen and (min-width:600px){
text-decoration:none;
}
`