import React from "react";

const PanditCard = ({ profile }) => {
  return (
    <div className="card" style={{ width: "18rem", margin: "1rem" }}>
      {profile.avatar && (
        <img
          src={URL.createObjectURL(profile.avatar)}
          className="card-img-top"
          alt="Profile"
          style={{ height: "200px", objectFit: "cover" }}
        />
      )}
      <div className="card-body">
        <h5 className="card-title">{profile.name}</h5>
        <p className="card-text">
          <strong>Education:</strong> {profile.edu}
        </p>
        <p className="card-text">
          <strong>Gender:</strong> {profile.gender}
        </p>
        <p className="card-text">
          <strong>Address:</strong> {profile.add}
        </p>
        <p className="card-text">
          <strong>Email:</strong> {profile.email}
        </p>
        <p className="card-text">
          <strong>Phone:</strong> {profile.phone}
        </p>
      </div>
    </div>
  );
};

export default PanditCard;
