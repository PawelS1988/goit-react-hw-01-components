import React from "react";
import Stats from "./Stats";
import "./profile.css";

const Profile = (user) => {
  return (
    <div className="user-all">
      <div className="user-top">
        <img src={user.avatar} alt="User avatar" className="avatar" />
        <p className="name">{user.username}</p>
        <p className="tag">@{user.tag}</p>
        <p className="location">{user.location}</p>
      </div>
      <Stats stats={user.stats} />
    </div>
  );
};

export default Profile;
