import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "../index.css";
import LoginLogin from "./login-login";

function LoginSignin() {
  return (
    <div className="sign-in">
      <h1>Sign in</h1>
      <p>Sign in to your account</p>
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />

      <button>Sign in</button>
      <p>Already have an account? Log in!</p>
    </div>
  );
}
export default LoginSignin;
