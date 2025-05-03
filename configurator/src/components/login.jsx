import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import LoginSignin from "./login-sign";
import LoginLogin from "./login-login";

function LoginPage() {
  const [activeForm, setActiveForm] = useState("login");

  const switchToLogin = () => setActiveForm("login");
  const switchToSignin = () => setActiveForm("signin");

  return (
    <div className="loginpage">
      <Header />

      {activeForm === "login" ? (
        <LoginLogin switchToSignin={switchToSignin} />
      ) : (
        <LoginSignin switchToLogin={switchToLogin} />
      )}

      <Footer />
    </div>
  );
}

export default LoginPage;
