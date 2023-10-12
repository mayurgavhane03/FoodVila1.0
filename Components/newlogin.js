import React, { useRef, useState } from "react";
import { checkValidData } from "../Utils/validate";
// rafce ==>  react arrow function export component
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  //eroror message
  // const dispatch =  useDispatch()
  const cartItems = useSelector((store) => store.user);
  const dispatch = useDispatch();
 
  const [errorMessage, setErrorMessage] = useState(null);
  const [isSignInForm, setSignInForm] = useState(true);
  const navigate  =  useNavigate()

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
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          console.log(message)

          const user = userCredential.user;
          console.log(user)
          updateProfile(user, {
            displayName: name.current.value,
           
          })
            .then(() => {
              navigate("/");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="min-h-screen bg-black">
     

      <div className="relative">
       
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-80 text-white rounded-lg shadow-lg p-12 w-96"
        >
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-2 my-2 w-full bg-gray-700 rounded-lg focus:ring focus:ring-blue-500"
            />
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-2 my-2 w-full bg-gray-700 rounded-lg focus:ring focus:ring-blue-500"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-2 my-2 w-full bg-gray-700 rounded-lg focus:ring focus:ring-blue-500"
          />
          <p className="p-4 my-4 text-red-600"> {errorMessage} </p>

          <button
            onClick={HandleButtonClick}
            className="p-4 my-4 bg-red-700 w-full rounded-full text-white font-bold"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already have an account? Sign In"}
          </p>
          <p className="text-xs	">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
