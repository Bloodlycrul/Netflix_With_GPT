import React, { useState } from "react";
import BackImage from "../Assets/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

const Login = () => {
  const [isUserSignIn, setIsUserSignIn] = useState(true);

  const checkUser = () => {
    setIsUserSignIn(!isUserSignIn);
  };

  return (
    <div
      className="relative w-screen h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${BackImage})`,
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-black opacity-50"></div>

      {/* Netflix Logo */}
      <img
        className="relative w-[200px] h-auto z-10"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      <form className="absolute text-white w-[400px] h-[600px] px-10 py-14 flex flex-col m-auto bg-black bg-opacity-70 z-30 rounded-lg left-0 right-0 bottom-0 top-0">
        <h2 className="text-[35px] ">{isUserSignIn ? "Sign In" : "Sign Up"}</h2>

        {!isUserSignIn && (
          <input
            className="my-3 w-full p-3 rounded-md bg-gray-600"
            type="text"
            placeholder="Full Name"
          />
        )}

        <input
          className="my-3 w-full p-3 rounded-md bg-gray-600"
          type="email"
          placeholder="Enter Email or Phone Number"
        />
        <input
          className="my-3 w-full p-3 rounded-md  bg-gray-600"
          type="password"
          placeholder="Enter your password"
        />
        <button className="my-3 w-full p-3 rounded-md bg-[#E50815]">
          {isUserSignIn ? "Sign In" : "Sign Up"}
        </button>

       {isUserSignIn &&  <div className="flex justify-between text-[#b3b3b3]">
          <div className="flex ">
            <input className="mr-2 p-1 " type="checkbox" />
            <p>Remember Me</p>
          </div>
          <a className="" href="/">
            Need Help ?{" "}
          </a>
        </div>}

        <p
          onClick={checkUser}
          className="mt-[30px] cursor-pointer text-[#b3b3b3]"
        >
          {isUserSignIn ? <>New to Netflix? <span className="text-white">Sign up now.</span></> : <>Already User ? <span className="text-white">Sign In now.</span></>}
        </p>
      </form>
    </div>
  );
};

export default Login;

// #E50815
