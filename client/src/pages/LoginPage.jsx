import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./LoginPage.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        {
          email,
          password,
        }
      );

      navigate("/dashboard");

    } catch (err) {
      console.error("Login Error:", err);

      if (err.response) {
        alert(err.response.data.message || "Invalid credentials");
      } else {
        alert("Server connection failed");
      }
    }
  };

  return (
    <div className="login-container">

      <div className="left-panel">
        <h1>🏦 Bank Account Management</h1>
        <p>Secure. Reliable. Modern Banking.</p>
      </div>

      <div className="right-panel">

        <form className="login-card" onSubmit={handleLogin}>

          <h2>Welcome Back</h2>

          <div className="input-group">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="login-btn" type="submit">
            Login
          </button>

          <p>
            Don't have an account?
            <Link to="/register"> Register</Link>
          </p>

        </form>

      </div>

    </div>
  );
}