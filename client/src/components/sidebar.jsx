import React from "react";
import {
  FaUniversity,
  FaUsers,
  FaBuilding,
  FaSignOutAlt,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";
import "./sidebar.css";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="logo-section">
        <FaUniversity className="bank-icon" />
        <h2>My Bank</h2>
      </div>

      <div className="search-box">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search..." />
      </div>

      <div className="profile">
        <FaUserCircle className="profile-icon" />
        <h3>Bank Manager</h3>
        <p>manager@bank.com</p>
      </div>

      <div className="menu">
        <div className="menu-item">
          <FaUsers />
          <span>Accounts</span>
        </div>

        <div className="menu-item">
          <FaBuilding />
          <span>Departments</span>
        </div>

        <div className="menu-item logout">
          <FaSignOutAlt />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
}