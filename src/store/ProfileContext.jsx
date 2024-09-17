import React, { createContext, useState } from "react";

const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
  const [profiles, setProfiles] = useState([]);

  const addProfile = (profile) => {
    setProfiles((prevProfiles) => [...prevProfiles, profile]);
  };

  return (
    <ProfileContext.Provider value={{ profiles, addProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export { ProfileContext, ProfileProvider };
