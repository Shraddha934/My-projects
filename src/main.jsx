import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./store/AuthContext";
import { ProfileProvider } from "./store/ProfileContext";
import LoginPg from "./components/LoginPg";
import SignUpPg from "./components/SignUpPg";
import WelcomeMessage from "./components/WelcomeMessage";
import PanditRegistration from "./components/PanditRegistration";
import ProfileList from "./components/ProfileList";
import Info from "./components/Info";
import ProductCatalog from "./components/ProductCatalog";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PanditProfiles from "./components/PanditProfiles";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <AuthProvider>
      <ProfileProvider>
        <Router>
          <div className="container mt-5">
            <Routes>
              <Route path="/" element={<WelcomeMessage />} />
              <Route path="/login" element={<LoginPg />} />
              <Route path="/signup" element={<SignUpPg />} />
              <Route path="/info" element={<Info />} />
              <Route path="/product" element={<ProductCatalog />} />
              <Route path="/panditregi" element={<PanditRegistration />} />
              <Route path="/profiles" element={<PanditProfiles />} />
            </Routes>
          </div>
        </Router>
      </ProfileProvider>
    </AuthProvider>
  </StrictMode>
);
