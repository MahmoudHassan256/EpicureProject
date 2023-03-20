import styled from "styled-components";
export interface DivProps {
    isEmpty: boolean
}
export const ColumnDiv = styled.div`
display:flex;
flex-direction:column;
position:relative;
`
export const SearchResultBoxWrapper = styled.div`
top:46px;
border: 1px black solid;
padding: 16px 15px 16px 70px;
gap: 10px;
display:flex;
flex-direction: column;
align-items: flex-start;
@media screen and (min-width:600px){
background:#FFFFFF;
position: absolute;
top: 64px;
right: 18%;
width:13%;   
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