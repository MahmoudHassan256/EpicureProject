import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setOpenSignUp } from '../../Slicers/SingUpStateSlice';
import validator from 'validator'
import { Icon } from '../styles'
import { Email, Label, CloseBtn, TextSide, SignInInput, Line, Or, LineSide, Password, HeaderSignInBackground } from './HeaderSignInStyles'
import { ToastContainer, toast } from 'react-toastify';
import { HeaderSignUpBtnSide, CreateButton, Login, HeaderSignUpHeader, HeaderSignUpWrapper, HeaderSignUpContent, HeaderSignUpContentTopSide, SignUpContinue, SignUpText, ConfirmPassword, PasswordSide } from './HeaderSignUpStyles';
import { setOpenSignIn } from '../../Slicers/SingInStateSlice';
import PasswordChecklist from "react-password-checklist"
import { setCookie } from 'typescript-cookie'
import IsDesktop from '../../Helper/WindowCheker';
import { defaultUrl } from '../../Constants/Variables';




export default function HeaderSignUp() {
  const [email, updateEmail] = useState("");
  const [password, updatePassword] = useState("");
  const [confirmPassword, updateconfirmPassword] = useState("");
  const [firstname, updateFirstName] = useState("");
  const [lastname, updateLastName] = useState("");
  const [phoneNumber, updatePhoneNumber] = useState("");
  const [match, setMatch] = useState("");
  const [validPass, updateValidPass] = useState(false);
  const [filled, updatefilled] = useState({ confirmPassword: false, email: false, firstname: false, lastname: false, phoneNumber: false, password: false });
  const dispatch = useDispatch();


  return (
    <div>
      {IsDesktop() && <HeaderSignInBackground></HeaderSignInBackground>}
      <HeaderSignUpWrapper>
        <HeaderSignUpHeader><CloseBtn onClick={() => { dispatch(setOpenSignUp(false)) }}>
          {!IsDesktop() && <Icon src='Images/Icon/X.svg' />}
          {IsDesktop() && <Icon src='Images/Icon/XWhite.svg' />}          </CloseBtn></HeaderSignUpHeader>
        <HeaderSignUpContent>
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
          <HeaderSignUpContentTopSide>
            <TextSide>
              <SignUpText>Sign Up</SignUpText>
              <SignUpContinue>To become a member, please sign up</SignUpContinue>
            </TextSide>
            <SignInInput>
              {email !== "" && <Label>Email adress</Label>}
              <Email type="email" placeholder="Email adress" onChange={(data) => {
                updateEmail(data.target.value);
                updatefilled({ ...filled, email: (data.target.value !== "") ? true : false })
              }} />
            </SignInInput>
            <SignInInput>
              {firstname !== "" && <Label>First Name</Label>}
              <Password type="text" placeholder="First Name" onChange={(data) => {
                updateFirstName(data.target.value);
                updatefilled({ ...filled, firstname: (data.target.value !== "") ? true : false })
              }} />
            </SignInInput>
            <SignInInput>
              {lastname !== "" && <Label>Last Name</Label>}
              <Password type="text" placeholder="Last Name" onChange={(data) => {
                updateLastName(data.target.value);
                updatefilled({ ...filled, lastname: (data.target.value !== "") ? true : false })
              }} />
            </SignInInput>
            <SignInInput>
              {phoneNumber !== "" && <Label>Phone Number</Label>}
              <Password type="text" placeholder="Phone Number" maxLength={10} onChange={(data) => {
                updatePhoneNumber(data.target.value);
                updatefilled({ ...filled, phoneNumber: (data.target.value !== "") ? true : false })
              }} />
            </SignInInput>
            <PasswordSide>
              <SignInInput>
                {password !== "" && <Label>Password</Label>}
                <Password type="password" placeholder="Password" minLength={7} onChange={(data) => {
                  updatePassword(data.target.value);
                  updatefilled({ ...filled, password: (data.target.value !== "") ? true : false })
                  if (confirmPassword !== "" && data.target.value !== "") {
                    if (confirmPassword !== data.target.value) {
                      setMatch("notmatch");
                    }
                    else { setMatch("match") }
                  }
                  else { setMatch("") }
                }} />
              </SignInInput>
              {password !== "" && <PasswordChecklist
                value={password}
                rules={['capital', 'minLength', 'number', 'specialChar']}
                minLength={7}
                onChange={(ele) => updateValidPass(ele)}
              />}
            </PasswordSide>

            <SignInInput>
              {confirmPassword !== "" && <Label>Confirm Password</Label>}
              <ConfirmPassword type="password" placeholder="Confirm Password" minLength={10} onChange={(data) => {
                updateconfirmPassword(data.target.value);
                updatefilled({ ...filled, confirmPassword: (data.target.value !== "") ? true : false });
                if (data.target.value !== "" && password !== "") {
                  if (data.target.value !== password) {
                    setMatch("notmatch");
                  }
                  else { setMatch("match") }
                }
                else { setMatch("") }
              }} state={match} />
            </SignInInput>

          </HeaderSignUpContentTopSide>
          <HeaderSignUpBtnSide>
            <CreateButton filled={filled} onClick={async () => {
              if (!filled.email || !filled.password || !filled.firstname || !filled.lastname || !filled.phoneNumber || !filled.confirmPassword) {
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

                else if (!validator.isAlpha(firstname)) {
                  toast.warn("Insert a valid First Name", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                }
                else if (!validator.isAlpha(lastname)) {
                  toast.warn("Insert a valid Last Name", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                }
                else if (phoneNumber.length !== 10) {
                  toast.warn("Phone Number's Length should be 10", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                }
                else if (!validator.isNumeric(phoneNumber)) {
                  toast.warn("Insert a valid Phone Number", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                }
                else if (!validPass) {
                  toast.warn("Insert a valid Password", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                }
                else if (match === "notmatch") {
                  toast.warn("Passwords aren't matched", {
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
                  const user = { firstname: firstname, lastname: lastname, phonenumber: phoneNumber, email: email, password: password };

                  const urlUser = defaultUrl+"api/users/createUser";
                  const response = await fetch(urlUser, {
                    method: "post",
                    headers: {
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify(user),
                  });
                  const content = await response.json();
                  toast.success("Signing in...", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                  setCookie('User', content.firstname + " " + content.lastname, { path: "/", expires: 1 });
                  setTimeout(() => dispatch(setOpenSignUp(false)), 3500);
                }
              }
            }}> Sign Up</CreateButton>
          </HeaderSignUpBtnSide>
          <LineSide>
            <Line></Line>
            <Or>or</Or>
            <Line></Line>
          </LineSide>
          <Login onClick={() => {
            window.scrollTo(0, 0);
            dispatch(setOpenSignUp(false));
            dispatch(setOpenSignIn(true))
          }}>Log in</Login>
        </HeaderSignUpContent>
      </HeaderSignUpWrapper >
    </div>
  )
}
