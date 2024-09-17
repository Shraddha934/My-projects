// src/store/AuthContext.jsx
import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    if (email && password) {
      setUser({ email });
      return true;
    }
    return false;
  };

  const signup = (email, password) => {
    if (email && password) {
      setUser({ email });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
