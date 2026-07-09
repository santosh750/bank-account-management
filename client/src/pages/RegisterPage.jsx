import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaUserPlus, FaUniversity } from "react-icons/fa";
import "./RegisterPage.css";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        email,
        password,
      });

      alert("Registration Successful");
      navigate("/");
    } catch (err) {
  console.error("Registration Error:", err);

  if (err.response) {
    console.log("Status:", err.response.status);
    console.log("Data:", err.response.data);
    alert(err.response.data.message || JSON.stringify(err.response.data));
  } else {
    alert(err.message);
  }
}
  };

  return (
    <div className="register-container">

      <div className="left-panel">
        <FaUniversity className="bank-logo" />
        <h1>Join Our Bank</h1>
        <p>Create your secure banking account today.</p>
      </div>

      <div className="right-panel">

        <form className="register-card" onSubmit={handleRegister}>

          <h2>Create Account</h2>

          <div className="input-group">
            <FaEnvelope />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <FaLock />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              required
            />
          </div>

          <button className="register-btn" type="submit">
            <FaUserPlus />
            Register
          </button>

          <p>
            Already have an account?
            <Link to="/"> Login</Link>
          </p>

        </form>

      </div>

    </div>
  );
}