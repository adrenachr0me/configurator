import React, { useState } from "react";
import "../index.css";
import LoginSignin from "./login-sign";

function LoginLogin() {
  return (
    <div className="login">
      <div>
        <h1>Log in</h1>
        <p>Log in to your account</p>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Log in</button>
        <p>Don't have an account? Sign up!</p>
      </div>
    </div>
  );
}
export default LoginLogin;
