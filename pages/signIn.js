import { Button } from "@material-ui/core";
import React from "react";
import SignInWrapper from "../Wrappers/SignInWrapper";

const SignIn = () => {
  return (
    <SignInWrapper>
      <div className="container">
        <div className="d-flex justify-content-between">
          <p className="fw-bold">Soft UI Dashboard</p>
          <ul className="d-flex ">
            <li>Dashboard</li>
            <li>Profile</li>
            <li>Sign Up</li>
            <li>Sign In</li>
          </ul>
          <Button variant="contained" className="rounded-pill px-5">
            FREE DOWNLOAD
          </Button>
        </div>
        <h3>Welcome back</h3>
        <p>
          Enter your email and password to sign <br></br>in
        </p>
      </div>
    </SignInWrapper>
  );
};

export default SignIn;
