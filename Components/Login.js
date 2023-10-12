import React, { useEffect, useRef, useState } from "react";
import { checkValidData } from "../Utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { signInWithPopup } from "firebase/auth";
import { provider } from "../Utils/firebase";
import googleImg  from "../Images/google-logo-9824.png"


const Login = () => {
  const cartItems = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState(null);
  const [isSignInForm, setSignInForm] = useState(true);
  const [value,setValue] = useState(); //is is for google authontication
  const navigate = useNavigate();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };



  const HandleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user)
          dispatch(addUser(email.current.value, password.current.value))
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch(addUser( email.current.value, password.current.value))
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };




  const handlerGooglesignIn = () =>{
   
    signInWithPopup(auth,provider).then((data) =>{
      setValue(data.user.email)
      localStorage.setItem("email", data.user.email)
      const userEmail = data.user.email;
      dispatch(addUser(userEmail))
      navigate("/");
    })
  }

  useEffect(()=>{
    setValue(localStorage.getItem('email'))
  },[])

  return (
    <div className="login-container">
      <div className="login-form">
        <form onSubmit={(e) => e.preventDefault()}>
          <h1>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="input-field"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="input-field"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="input-field"
          />
          <p className="error-message">{errorMessage}</p>
          <button className="login-button" onClick={HandleButtonClick}>
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <div className="googlesignIn">
           <div className="google-img-box">
           <img src={googleImg}  className="google-img"/>
           
           </div>
            <button onClick={handlerGooglesignIn}>Signin with Google</button>
          
          </div>
          <p className="toggle-link" onClick={toggleSignInForm}>
            {isSignInForm ? "New to Food Villa? Sign Up Now" : "Already have an account? Sign In"}
          </p>
          <p className="recaptcha-text">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
