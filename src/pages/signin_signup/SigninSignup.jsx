import React from "react";
import "./SigninSignup.style.scss";
import Signin from "../../components/signin/Signin";
import Signup from "../../components/signup/Signup";

const SigninSignup = () => {
  return (
    <div className="sign-in-and-sign-up">
      <Signin />
      <Signup />
    </div>
  );
};

export default SigninSignup;
