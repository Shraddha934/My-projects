import React from "react";
 import "./PanditProfiles.css"; 

const panditProfiles = [
  {
    name: "Manohar Rao",
    edu: "No formal education",
    gender: "male",
    add: "123 Temple Street, Nagar",
    email: "xyz@.com",
    password: "password123",
    phone: "+91-9876543210",
  },
  {
    name: "Rameshwar Apte",
    edu: "No formal education",
    gender: "male",
    add: "456 Ashram Lane, Chiplun",
    email: "apte@example.com",
    password: "password456",
    phone: "+91-9123456789",
  },
  {
    name: "Ganesh Bhatt",
    edu: "No formal education",
    gender: "male",
    add: "789 Guru Complex, Ratnagiri",
    email: "bhatt@example.com",
    password: "password789",
    phone: "+91-9234567890",
  },
];

const PanditProfiles = () => {
  return (
    <div className="pandit-profiles-container">
      <h1>Hindu Pandit Profiles</h1>
      <div className="profiles">
        {panditProfiles.map((profile, index) => (
          <div className="profile-card" key={index}>
            <div className="profile-header">
              <h2>{profile.name}</h2>
            </div>
            <div className="profile-body">
              <p>
                <strong>Education:</strong> {profile.edu}
              </p>
              <p>
                <strong>Gender:</strong> {profile.gender}
              </p>
              <p>
                <strong>Address:</strong> {profile.add}
              </p>
              <p>
                <strong>Email:</strong> {profile.email}
              </p>
              <p>
                <strong>Phone:</strong> {profile.phone}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PanditProfiles;
