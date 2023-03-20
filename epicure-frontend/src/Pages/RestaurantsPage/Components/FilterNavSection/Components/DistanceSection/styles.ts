import { Slider } from "@mui/material";
import { styled as muiStyled } from "@mui/system";
import styled from "styled-components";
export const WrapperDistanceSection=styled.div`
position: absolute;
width:353px;
top: 60px;
min-height:137px;
display:flex;
flex-direction:column;
align-items:center;
background: #FFFFFF;
box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.25);
`
export const DistanceSlider=muiStyled(Slider)<{ changed:boolean}>`
width: 90%;
    margin:0 5%;
    height:1px;
    color:#979797;
.MuiSlider-thumb{
        color:${(props) => props.changed ? "#DE9200" : "black"};
    }
`
export const TopSection=styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
text-align: center;
letter-spacing: 1.92px;
width:23.7%;
height: 21px;
margin:12px auto 20px;
color: #000000;
`
export const ClearBtn=styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 5px 15px;
gap: 10px;
border: 1px solid #000000;
width:31.7%;
margin:0 auto 13px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 20px;
text-align: center;
letter-spacing: 2.67px;
text-transform: uppercase;
color: #000000;
background: #FFFFFF;
`
export const SliderSection=styled.div`
background: #F9F4EA;
border-radius: 8px;
display:flex;
flex-direction:column;
height:56px;
width:87.5%;
margin:0 auto 15px;

`
export const SliderHeader=styled.div`
display:flex;
width:92%;
justify-content:space-between;
margin:auto;
`
export const MyLocationText=styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 20px;
display: flex;
align-items: center;
letter-spacing: 1.97px;
color: #000000;
height: 11px;
`
export const DistanceText=styled.div`
width: 13.5%;
height: 11px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 20px;
display: flex;
align-items: center;
letter-spacing: 1.97px;
color: #000000;
`
export const SliderBox=styled.div`
width:85%;
margin:auto;
`
