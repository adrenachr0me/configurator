import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import configurator from "./configurator";
import Header from "./header";
import Footer from "./footer";
import LoginSignin from "./login-sign";
import LoginLogin from "./login-login";

function LoginPage() {
  return (
    <div className="loginpage">
      <Header />
      <LoginSignin />
      <Footer />;
    </div>
  );
}
export default LoginPage;
