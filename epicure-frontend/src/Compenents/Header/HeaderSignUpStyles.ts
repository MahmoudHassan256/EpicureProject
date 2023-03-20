import styled from "styled-components"
import { HeaderSignInContent, HeaderSignInContentTopSide,  HeaderSignInHeader,  HeaderSignInLoginSide, HeaderSignInWrapper, Label, Password, SignInContinue, SignInText, Signup } from "./HeaderSignInStyles"
export const HeaderSignUpWrapper=styled(HeaderSignInWrapper)``
export const HeaderSignUpHeader=styled(HeaderSignInHeader)``
export const HeaderSignUpContent=styled(HeaderSignInContent)`
max-height:850px;
`
export const CheckPasswordInput=styled(Label)``

export const CheckPasswordContainer=styled.div`
display:flex;
flex-direction:column;
align-items: flex-start;
`
export const PasswordSide=styled.div`
display:flex;
flex-direction:column;
width:100%;
gap:10px;
`
export const HeaderSignUpContentTopSide=styled(HeaderSignInContentTopSide)``
export const SignUpText=styled(SignInText)``
export const SignUpContinue=styled(SignInContinue)``
export const HeaderSignUpBtnSide=styled(HeaderSignInLoginSide)``
export const CreateButton=styled.button<{filled:{email:boolean,lastname:boolean,phoneNumber:boolean,firstname:boolean,password:boolean,confirmPassword:boolean}}>`
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
background: ${props=>(props.filled.confirmPassword &&props.filled.email && props.filled.password &&props.filled.firstname && props.filled.lastname&&props.filled.phoneNumber) ? "black" : "#979797"};
width:100%;
height:48px;
`
export const Login=styled(Signup)``
export const ConfirmPassword=styled(Password)<{state:String}>`
border:5px solid ${props=>props.state==="" ? "unset" : (props.state==="match" ? "green" : "red")};
border-bottom:1px solid ${props=>props.state==="" ? "#000000" : "unset"}
`
