import React from "react";
import "../index.css";

function LoginLogin({ switchToSignin }) {
  return (
    <div className="login">
      <h1>Log in</h1>
      <p>Log in to your account</p>
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />

      <button>Log in</button>
      <p>
        Don't have an account?{" "}
        <span className="link" onClick={switchToSignin}>
          Sign up!
        </span>
      </p>
    </div>
  );
}

export default LoginLogin;
