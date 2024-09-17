// src/App.jsx

import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPg from "./components/LoginPg";
import SignUpPg from "./components/SignUpPg";
import WelcomeMessage from "./components/WelcomeMessage";
import PanditRegistration from "./components/PanditRegistration";
import ProfileList from "./components/ProfileList";

function App() {
  return (
    <div className="container mt-5">
      <Routes>
        <Route path="/" element={<WelcomeMessage />} />
        <Route path="/login" element={<LoginPg />} />
        <Route path="/signup" element={<SignUpPg />} />
        <Route path="/panditregi" element={<PanditRegistration />} />
        <Route path="/info" element={<Info />} />
        <Route path="/product" element={<ProductCatalog />} />
        <Route path="/profiles" element={<ProfileList />} />
      </Routes>
    </div>
  );
}

export default App;
