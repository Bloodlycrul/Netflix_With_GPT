import React, { useState, useRef } from "react";
import BackImage from "../Assets/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_medium.jpg";
import { validator } from "../utils/validator";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import Header from "./Header";

const Login = () => {
  const [isUserSignIn, setIsUserSignIn] = useState(true);
  const [validationError, setValidationError] = useState(null);
  const email = useRef();
  const password = useRef();
  const name = useRef();

  const checkUser = () => {
    setIsUserSignIn(!isUserSignIn);
  };

  const checkValidation = () => {
    const checkbox = validator(email.current.value, password.current.value);
    const auth = getAuth();
    if (checkbox === null) {
      if (!isUserSignIn) {
        // Sign up State
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then(async (userCredential) => {
            // Signed in
            // eslint-disable-next-line no-unused-vars
            const user = userCredential.user;
            await updateProfile(auth.currentUser, {
              displayName: name.current.value,
              photoURL:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuS4q9gPpC3J0mYiARB4gNfrwx3QHNglobOpDduKih&s",
            });
            setIsUserSignIn(true);
            // ...
          })

          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setValidationError(errorCode + errorMessage);
            // ..
          });
      } else {
        // Login State
        const auth = getAuth();
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setValidationError(errorCode + errorMessage);
          });
      }
    }
  };



  return (
    <>
    <Header />
    <div
      className="relative w-screen h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${BackImage})`,
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-black opacity-50"></div>

      

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute text-white w-[400px] h-[500px] px-10 py-14 flex flex-col m-auto bg-black bg-opacity-60 z-30 rounded-lg left-0 right-0 bottom-0 top-0"
      >
        <h2 className="text-[35px] ">{isUserSignIn ? "Sign In" : "Sign Up"}</h2>

        {!isUserSignIn && (
          <input
            ref={name}
            className="my-3 w-full p-3 rounded-md bg-gray-600 focus:outline-none"
            type="text"
            placeholder="Full Name"
          />
        )}

        <input
          ref={email}
          className="my-3 w-full p-3 rounded-md bg-gray-600 focus:outline-none"
          type="email"
          placeholder="Enter Email or Phone Number"
        />
        <input
          ref={password}
          className="my-3 w-full p-3 rounded-md  bg-gray-600 focus:outline-none"
          type="password"
          placeholder="Enter your password"
        />
        <h3 className="text-red-600 font-bold">{validationError}</h3>
        <button
          onClick={checkValidation}
          className="my-3 w-full p-3 rounded-md bg-[#E50815]"
        >
          {isUserSignIn ? "Sign In" : "Sign Up"}
        </button>

        {isUserSignIn && (
          <div className="flex justify-between text-[#b3b3b3]">
            <div className="flex ">
              <input className="mr-2 p-1  " type="checkbox" />
              <p>Remember Me</p>
            </div>
            <a className="" href="/">
              Need Help ?{" "}
            </a>
          </div>
        )}

        <p
          onClick={checkUser}
          className="mt-[30px] cursor-pointer text-[#b3b3b3]"
        >
          {isUserSignIn ? (
            <>
              New to Netflix? <span className="text-white">Sign up now.</span>
            </>
          ) : (
            <>
              Already User ? <span className="text-white">Sign In now.</span>
            </>
          )}
        </p>
      </form>
    </div>
    </>
  );
};

export default Login;
