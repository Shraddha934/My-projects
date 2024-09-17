// src/components/SignUpPg.jsx
import React, { useState } from "react";
import { useAuth } from "../store/AuthContext"; // Adjusted import path
import "bootstrap/dist/css/bootstrap.min.css";

const SignUpPg = () => {
  const { signup } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (signup(email, password)) {
      window.location.href = "/login"; // Redirect on successful signup
    } else {
      setError("Sign up failed");
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <h2 className="mb-4 text-center">Sign Up</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="InputPassword1" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="InputPassword1"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
        <div className="mt-3 text-center">
          <p>
            Already have an account?{" "}
            <a href="/login" className="btn btn-link">
              Log In
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUpPg;
