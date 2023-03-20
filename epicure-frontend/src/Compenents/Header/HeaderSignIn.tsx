import React, { useState } from 'react'
import { Icon } from '../styles'
import validator from 'validator'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CloseBtn, Email, Forget, HeaderSignInBackground, HeaderSignInContent, HeaderSignInContentTopSide, HeaderSignInHeader, HeaderSignInLoginSide, HeaderSignInWrapper, HeaderUserContent, HeaderUserContentButton, HeaderUserContentHeader, HeaderUserContentHeaderValue, Label, Line, LineSide, LoginButton, Or, Password, SignInContinue, SignInInput, SignInText, Signup, TextSide } from './HeaderSignInStyles'
import { useDispatch } from 'react-redux';
import { setOpenSignUp } from '../../Slicers/SingUpStateSlice';
import { setOpenSignIn } from '../../Slicers/SingInStateSlice';
import { getCookie, removeCookie, setCookie } from 'typescript-cookie'
import IsDesktop from '../../Helper/WindowCheker';
import { defaultUrl } from '../../Constants/Variables';


export default function HeaderSignIn() {
    const [email, updateEmail] = useState("");
    const [filled, updatefilled] = useState({ email: false, password: false });
    const dispatch = useDispatch();
    const [password, updatePassword] = useState("");

    return (
        <div>
        {IsDesktop() && <HeaderSignInBackground></HeaderSignInBackground>}
        <HeaderSignInWrapper>
            <HeaderSignInHeader><CloseBtn onClick={() => dispatch(setOpenSignIn(false))}>
                {!IsDesktop() && <Icon src='Images/Icon/X.svg' />}
                {IsDesktop() && <Icon src='Images/Icon/XWhite.svg' />}
            </CloseBtn></HeaderSignInHeader>
            {!getCookie("User") &&
                <HeaderSignInContent>
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />

                    <HeaderSignInContentTopSide>
                        <TextSide>
                            <SignInText>Sign in</SignInText>
                            <SignInContinue>To continue the order, please sign in</SignInContinue>
                        </TextSide>
                        <SignInInput>
                            {email !== "" && <Label>Email adress</Label>}
                            <Email type="email" placeholder="Email adress" onChange={(data) => {
                                updateEmail(data.target.value);
                                updatefilled({ ...filled, email: (data.target.value !== "") ? true : false })
                            }} />
                        </SignInInput>
                        <SignInInput>
                            {password !== "" && <Label>Password</Label>}
                            <Password type="password" placeholder="Password" onChange={(data) => {
                                updatePassword(data.target.value);
                                updatefilled({ ...filled, password: (data.target.value !== "") ? true : false })

                            }} />
                        </SignInInput>
                    </HeaderSignInContentTopSide>
                    <HeaderSignInLoginSide>
                        <LoginButton filled={filled} onClick={async () => {
                            if (!filled.email || !filled.password) {
                                toast.warn("All fields are required!", {
                                    position: "top-right",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                });
                            }
                            else {
                                if (!validator.isEmail(email)) {
                                    toast.warn("Insert a valid Email", {
                                        position: "top-right",
                                        autoClose: 5000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                    });
                                }
                                else {
                                    const user = { email: email, password: password };
                                    const urlSign = defaultUrl+"api/users/getUser";
                                    const response = await fetch(urlSign, {
                                        method: "post",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify(user),
                                    })
                                    const content = await response.json();
                                    if (content.length > 0) {
                                        toast.success("Signing in...", {
                                            position: "top-right",
                                            autoClose: 1000,
                                            hideProgressBar: false,
                                            closeOnClick: true,
                                            pauseOnHover: true,
                                            draggable: true,
                                            progress: undefined,
                                        });
                                        setCookie('User', content[0].firstname+" "+content[0].lastname, { path: "/", expires: 1 });
                                        setTimeout(() => dispatch(setOpenSignIn(false)), 1500);
                                    }
                                    else {
                                        toast.warn(content["msg"], {
                                            position: "top-right",
                                            autoClose: 5000,
                                            hideProgressBar: false,
                                            closeOnClick: true,
                                            pauseOnHover: true,
                                            draggable: true,
                                            progress: undefined,
                                        });
                                    }
                                }
                            }
                        }}>login</LoginButton>

                        <Forget>Forget password?</Forget>
                    </HeaderSignInLoginSide>
                    <LineSide>
                        <Line></Line>
                        <Or>or</Or>
                        <Line></Line>
                    </LineSide>
                    <Signup onClick={() => {
                        window.scrollTo(0, 0);
                        dispatch(setOpenSignIn(false));
                        dispatch(setOpenSignUp(true));
                    }}>sign up</Signup>

                </HeaderSignInContent>}
            {getCookie("User") &&
                <HeaderUserContent>
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                    <HeaderUserContentHeader>Welcome <HeaderUserContentHeaderValue>{getCookie("User")}</HeaderUserContentHeaderValue></HeaderUserContentHeader>
                    <HeaderUserContentButton onClick={() => {
                        toast.success("Signing out...", {
                            position: "top-right",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                        removeCookie('User');
                        setTimeout(() => dispatch(setOpenSignIn(false)), 1500);

                    }}>Sign Out</HeaderUserContentButton>
                </HeaderUserContent>
            }
        </HeaderSignInWrapper>
        </div>
    )
}
