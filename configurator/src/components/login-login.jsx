import React, { use } from "react";
import "../index.css";
import axios from "axios";
import { useState, useEffect } from "react";

function LoginLogin({ switchToSignin }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleLogin = async (e) => {
    const api = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
    });
    e.preventDefault();
    try {
      const response = await api.post("/users", {
        email: login,
        password,
        isRegistration: false,
      });
      console.log("✅ Success:", response.data);
      setError("Account created successfully!");
      const data = response.data;
      if (error.response) {
        setError("Wejscie udane");
      } else {
        setError("Nie udało się zalogować");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login">
      <h1>Log in</h1>
      <p>Log in to your account</p>
      <form onSubmit={handleLogin}>
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

        <button type="submit">Log in</button>
      </form>
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
