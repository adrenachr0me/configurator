import React from "react";
import "../index.css";

function LoginSignin({ switchToLogin }) {
  return (
    <div className="sign-in">
      <h1>Sign in</h1>
      <p>Sign in to your account</p>
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />

      <button>Sign in</button>
      <p>
        Already have an account?{" "}
        <span className="link" onClick={switchToLogin}>
          Log in!
        </span>
      </p>
    </div>
  );
}

export default LoginSignin;
