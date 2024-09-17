import React, { useContext } from "react";
import { ProfileContext } from "../store/ProfileContext"; 
import PanditCard from "./PanditCard"; 

const ProfileList = () => {
  const { profiles } = useContext(ProfileContext);

  return (
    <div className="d-flex flex-wrap">
      {profiles.length === 0 ? (
        <p>No profiles available. Please register a pandit.</p>
      ) : (
        profiles.map((profile, index) => (
          <PanditCard key={index} profile={profile} />
        ))
      )}
    </div>
  );
};

export default ProfileList;
