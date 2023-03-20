import styled from "styled-components";
export interface DivProps{
    isEmpty:boolean
}
export const ColumnDiv = styled.div`
display:flex;
flex-direction:column;
position:relative;
`
export const SearchResultBoxWrapper = styled.div`
background:#FFFFFF;
position: absolute;
top: 250px;
left: 0;
right: 0;
margin: auto;
width: 68.7%;
z-index:3;
display: flex;
flex-direction: column;
align-items: flex-start;
padding:16px 15px 16px 62px;
gap: 10px;
@media screen and (min-width:600px){
    top:505px;
    width:49%;
}
`
export const Label = styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 16px;
line-height: 19px;
letter-spacing: 1.29px;
color: #000000;
`
export const Value = styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
letter-spacing: 1.29px;
color: #000000;
`
export const Values = styled.div`
display:flex;
flex-direction:column;
`
export const FilterBox = styled.div`
display:flex;
flex-direction:column;
gap:10px;
`