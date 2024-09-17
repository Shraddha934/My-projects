import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.module.css";

const WelcomeMessage = () => {
  return (
    <div className="welcome-page">
      <header className="header">
        <div className="hero-text">
          <h1>
            Welcome to <span className="brand-name">WedBliss</span>
          </h1>
          <h2>Celebrate Maharashtrian Wedding Culture and Traditions</h2>
          <p>
            Welcome to WedBliss, your one-stop destination for all things
            related to Maharashtrian weddings. Explore our rich cultural
            heritage and discover the traditions that make these weddings truly
            special.
          </p>
        </div>
      </header>
      <nav className="nav-links">
        <Link className="nav-link" to="/product">
          <img
            src="path/to/your/images/product.jpg"
            alt=""
            className="nav-img"
          />
          Wedding Products for Every Maharashtrian Celebration
        </Link>
        <Link className="nav-link" to="/info">
          <img
            src="path/to/your/images/culture.jpg"
            alt=""
            className="nav-img"
          />
          Discover Maharashtrian Wedding Culture and Traditions
        </Link>
        <Link className="nav-link" to="/panditregi">
          <img
            src=".assets/images/pandit.jpeg"
            alt=""
            className="nav-img"
          />
          Register as a Pandit and Expand Your Reach
        </Link>
        <Link className="nav-link" to="/profiles">
          <img
            src="path/to/your/images/profile.jpg"
            alt=""
            className="nav-img"
          />
          Find the Best Pandit Ji for Your Rituals and Marriage Performance
        </Link>
        <Link className="nav-link" to="/login">
          <img src="path/to/your/images/login.jpg" alt="" className="nav-img" />
          Login
        </Link>
        <Link className="nav-link" to="/signup">
          <img
            src="path/to/your/images/signup.jpg"
            alt=""
            className="nav-img"
          />
          Sign Up
        </Link>
      </nav>
      <footer className="footer">
        <p>&copy; 2024 WedBliss. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default WelcomeMessage;
