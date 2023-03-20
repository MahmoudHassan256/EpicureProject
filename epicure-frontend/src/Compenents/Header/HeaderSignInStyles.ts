import styled from 'styled-components'
export const HeaderSignInWrapper=styled.div`
position:absolute;
z-index: 4;
top:0;right:0;left:0;
@media screen and (min-width:600px){
    width:39.7%;
margin:80px auto 80px;
}
`
export const HeaderSignInBackground=styled.div`
    position:fixed;
    left:0;right:0;top:0;bottom:0;
    background: rgba(0, 0, 0, 0.7);
    z-index:2;

`
export const HeaderSignInHeader=styled.div`
background: #FFFFFF;
height: 46px;
box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.07);
@media screen and (min-width:600px){
    z-index: 6;
    background: transparent;
}
`

export const CloseBtn=styled.button`
background: transparent;
border: none;
margin: 15px 24px;
@media screen and (min-width:600px){
    margin:0;  
}

`
export const HeaderSignInContent=styled.div`
background: #FFFFFF;
display: flex;
flex-direction: column;
align-items: center;
max-height: 590px;
box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.07);
padding: 40px 0px;
gap: 40px;
@media screen and (min-width:600px){
background: #FFFFFF;
z-index:99;
}
`
export const HeaderSignInContentTopSide=styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
gap: 40px;
`
export const TextSide=styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
gap: 14px;
`
export const SignInText=styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 26px;
text-align: center;
letter-spacing: 2.67px;
text-transform: uppercase;
color: #000000;
`
export const SignInContinue=styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 16px;
line-height: 18px;
text-align: center;
letter-spacing: 1.97px;
color: #000000;
`
export const SignInInput=styled.div`
display: flex;
width: 100%;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 8px;
`
export const Label=styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 12px;
line-height: 18px;
text-align: center;
letter-spacing: 1.97px;
color: #000000;
opacity: 0.4;
`
export const Email=styled.input`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
width: 100%;
font-size: 16px;
line-height: 18px;
letter-spacing: 1.97px;
color: #000000;
border: none;
border-bottom: 1px solid #000000;
`
export const Password=styled(Email)``
export const HeaderSignInLoginSide=styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
gap: 16px;
width:54.94%;
`
export const LoginButton=styled.button<{filled:{email:boolean,password:boolean}}>`
cursor: pointer;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 5px 24px;
gap: 10px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 20px;
text-align: center;
letter-spacing: 2.67px;
text-transform: uppercase;
color: #FFFFFF;
background: ${props=>(props.filled.email && props.filled.password) ? "black" : "#979797"};
width:100%;
height:48px;
`
export const Forget=styled.div`
cursor: pointer;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
text-align: center;
letter-spacing: 1.97px;
color: #000000;
width:100%;
`
export const LineSide=styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;
gap: 12px;
width:77.8%;`
export const Line=styled.div`
border: 0.5px solid #979797;
width:100%;
height:0;
`
export const Or=styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-end;
padding: 0px;
gap: 2px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
text-align: center;
letter-spacing: 1.97px;
color: #979797;
`
export const Signup=styled.button`
cursor: pointer;
box-sizing: border-box;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 5px 15px;
gap: 10px;
width: 54.94%;
height: 48px;
border: 1px solid #000000;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 20px;
text-align: center;
letter-spacing: 2.67px;
text-transform: uppercase;
color: #000000;
background:transparent;
`
export const HeaderUserContentButton=styled(Signup)``
export const HeaderUserContent=styled(HeaderSignInContent)``
export const HeaderUserContentHeader=styled(HeaderSignInHeader)`
width:100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const HeaderUserContentHeaderValue=styled.div`
font-weight: bold;
`
