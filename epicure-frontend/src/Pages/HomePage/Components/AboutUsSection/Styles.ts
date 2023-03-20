import styled from "styled-components";
export const WrapperAboutUsSection=styled.div`
display: flex;
margin-top:48px;
height: 867px;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
padding: 24px 0 0 24px;
gap: 32px;
background: #FAFAFA;
@media screen and (min-width:600px){
    height: auto;
    margin-top:80px;
    padding-left:126px;
    padding-right:126px;
    flex-direction:row-reverse;
    gap:83px;
}
`
export const LogoIcon=styled.img`
@media screen and (min-width:600px){
    width: 178.22px;
    align-self: center;
    height: 166px;
}
`
export const AboutUsSectionContainer=styled.div`
@media screen and (min-width:600px){
    display:flex;
    flex-direction:column-reverse;
    gap:16px;
}
`
export const AboutUsContainer=styled.div`
@media screen and (min-width:600px){
}
`
export const DownloadButtonContainer=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 16px;
height: 120px;
margin-bottom:48px;
@media screen and (min-width:600px){
    flex-direction: row-reverse;
    justify-content: flex-end;
    height: 52px;
}
`
export const DownloadButton=styled.div`
box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: center;
padding: 7px 12px;
gap: 7px;
height: 52px;
border: 0.5px solid #000000;
border-radius: 10px;
width: 55%;
@media screen and (min-width:600px){
width:21%
}
`
export const GoogleIcon=styled.img`
width: 19px;
height: 25px;
@media screen and (min-width:600px){
}
`
export const DownloadTextGoogle=styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
height: 38px;
width:77%;
@media screen and (min-width:600px){
}
`
export const TopText=styled.div`
height: 18px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
text-align: center;
letter-spacing: 1.29px;
color: #000000;
}
`
export const BottomText=styled.div`
height: 20px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
text-align: center;
letter-spacing: 1.29px;
color: #000000;
`
export const DownloadTextApple=styled(DownloadTextGoogle)`
width:74%;
@media screen and (min-width:600px){
}
`
export const AppleStoreIcon=styled.img`
width: 24px;
height: 31px;
@media screen and (min-width:600px){
}
`
export const AboutUsText=styled.div`
height: 35px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 35px;
letter-spacing: 1.25px;
text-transform: uppercase;
color: #000000;
margin-bottom:16px;
@media screen and (min-width:600px){
font-size: 30px;
letter-spacing: 2.14px;
}
`
export const AboutUsInfo=styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 28px;
letter-spacing: 2.14px;
color: #000000;
width:77%;
@media screen and (min-width:600px){
    font-size: 20px;
    line-height: 30px;
    width:62%;
}
`
