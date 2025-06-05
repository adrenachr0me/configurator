import React from "react";
import "../index.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./header";
function LoginSignin({ switchToLogin }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const api = axios.create({
    baseURL: "http://localhost:5000/api",
  });
  const handleSignIn = async (e) => {
    e.preventDefault();
    setError(""); 

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await api.post("/users", {
        email: login,
        password,
        isRegistration: true,
      });

      console.log("✅ Success:", response.data);
      setError("Account created successfully!");
    } catch (error) {
      if (error.response) {
        console.error("❌ Server error:", error.response.data);
        setError(error.response.data.message || "Server error");
      } else {
        console.error("❌ Unknown error:", error.message);
        setError("Something went wrong");
      }
    }
  };
  return (
    <div className="sign-in">
      <h1>Sign in</h1>
      <p>Sign in to your account</p>
      <form onSubmit={handleSignIn}>
        <input
          type="text"
          placeholder="Email"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type="submit">Sign in</button>
      </form>
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
