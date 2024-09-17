import React, { useState, useContext } from "react";
import { ProfileContext } from "../store/ProfileContext"; 

const PanditRegistration = () => {
  const [formData, setFormData] = useState({
    name: "",
    edu: "No formal education",
    gender: "male",
    add: "",
    email: "",
    password: "",
    phone: "",
    avatar: null,
  });

  const [profilePic, setProfilePic] = useState("");

  const { addProfile } = useContext(ProfileContext);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
      if (files && files[0]) {
        const reader = new FileReader();
        reader.onload = (event) => setProfilePic(event.target.result);
        reader.readAsDataURL(files[0]);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProfile(formData); // Add profile to context
    console.log("Profile added:", formData);
    // Optionally clear form data or navigate to another page
    setFormData({
      name: "",
      edu: "No formal education",
      gender: "male",
      add: "",
      email: "",
      password: "",
      phone: "",
      avatar: null,
    });
    setProfilePic("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Register Pandit</h1>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          className="form-control"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="edu" className="form-label">
          Education
        </label>
        <select
          name="edu"
          className="form-control"
          id="edu"
          value={formData.edu}
          onChange={handleChange}
        >
          <option value="No formal education">No formal education</option>
          <option value="High school">High school</option>
          <option value="Undergraduate">Undergraduate</option>
          <option value="Graduate">Graduate</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="gender" className="form-label">
          Gender
        </label>
        <select
          name="gender"
          className="form-control"
          id="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="add" className="form-label">
          Address
        </label>
        <input
          type="text"
          name="add"
          className="form-control"
          id="add"
          value={formData.add}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          name="email"
          className="form-control"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          name="password"
          className="form-control"
          id="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          className="form-control"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="avatar" className="form-label">
          Profile Picture
        </label>
        <input
          type="file"
          name="avatar"
          className="form-control"
          id="avatar"
          onChange={handleChange}
        />
        {profilePic && (
          <img
            src={profilePic}
            alt="Profile Preview"
            style={{ width: "100px", height: "100px", marginTop: "10px" }}
          />
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <a style={{marginLeft:'50px'}} href="/profiles">Profiles</a>
    </form>
  );
};

export default PanditRegistration;
