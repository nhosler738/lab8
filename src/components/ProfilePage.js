import React from "react";
import { useLocation, Link } from "react-router-dom";

const ProfilePage = () => {
  const location = useLocation();
  const { firstName, lastName, email, season } = location.state || {};

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">User Profile</h1>
      <div className="card">
        <div className="card-body">
          <p><strong>First Name:</strong> {firstName}</p>
          <p><strong>Last Name:</strong> {lastName}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Favorite Season:</strong> {season}</p>
          <Link to="/dashboard" className="btn btn-primary mt-3">Go to Dashboard</Link>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

