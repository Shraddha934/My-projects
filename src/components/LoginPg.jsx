// src/components/LoginPg.jsx
import React, { useState } from "react";
import { useAuth } from "../store/AuthContext"; // Adjusted import path
import "bootstrap/dist/css/bootstrap.min.css";

const LoginPg = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(email, password)) {
      window.location.href = "/"; // Redirect on successful login
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <h2 className="mb-4">Login</h2>
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
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <div className="mt-3 text-center">
          <p>
            Not a member?{" "}
            <a href="/signup" className="btn btn-link">
              Sign Up now
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPg;
