import { Slider } from "@mui/material";
import styled from "styled-components";
import { styled as muiStyled } from "@mui/system";
export const WrapperPriceRangeSection = styled.div`
position: absolute;
width:353px;
display:flex;
flex-direction:column;
min-height: 162px;
top: 60px;
background: #FFFFFF;
box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.25);
`
export const RangeSlider = muiStyled(Slider) <{ changed:{left:boolean,right:boolean}}>`
    width: 90%;
    margin:0 5%;
    height:1px;
    color:#979797;
& .MuiSlider-thumb{
    color:black;
}
& .first-thumb{
        color:${(props) => props.changed.left ? "#DE9200" : "black"};
    }
& .second-thumb{
        color:${(props) => props.changed.right ? "#DE9200" : "black"};
    }


`
export const PriceSection = styled.div`
height: 49px;
width:59.7%;
margin:12px auto 22px;
`
export const SliderSection = styled.div`
height: 56px;
background: #F9F4EA;
border-radius: 8px;
width:87%;
margin:0 auto 15px;
`
export const MinRange = styled.div<{ state: any }>`
    color:${props => props.state ? "#DE9200" : "#000000"};
`
export const MaxRange = styled.div<{ state: boolean }>`
    color:${props => props.state ? "#DE9200" : "#000000"};
`
export const SliderHeader = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
width:92%;
margin:auto;
`
export const PriceRangeText = styled.div`
display: flex;
width:34.7%;
margin:auto;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;
gap: 3px;
`
export const PriceRangeSelectedText = styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
margin-top:12px;
font-weight: 400;
font-size: 18px;
line-height: 21px;
letter-spacing: 1.92px;
color: #000000;
`
export const MinPrinceRange = styled.div`
display: flex;
flex-direction: row;
align-items: flex-end;
padding: 0px;
gap: 2px;
`
export const MaxPriceRange = styled.div`
display: flex;
flex-direction: row;
align-items: flex-end;
padding: 0px;
gap: 2px;
`
export const PriceRangeDivider = styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 14px;
line-height: 20px;
display: flex;
align-items: center;
letter-spacing: 1.97px;
color: #000000;
`
export const SheikelIcon = styled.img`
width: 5.32px;
height: 5.17px;
`
export const Price = styled.div`
height: 11px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 14px;
line-height: 20px;
display: flex;
align-items: center;
letter-spacing: 1.97px;
color: #000000;
`
export const ClearBtn = styled.button`
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
export const SliderBox = styled.div`
width:92%;
margin:auto;
`
