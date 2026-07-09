import React from "react";
import Sidebar from "../components/sidebar";
import AccountManager from "../components/AccountManager";
import DeptList from "../components/DeptList";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <SideBar />

      <div className="dashboard-content">

        <div className="dashboard-header">
          <h1>🏦 Bank Dashboard</h1>
          <p>Manage accounts and departments efficiently.</p>
        </div>

        <div className="stats">
          <div className="card">
            <h3>Total Accounts</h3>
            <h2>125</h2>
          </div>

          <div className="card">
            <h3>Total Balance</h3>
            <h2>₹5,20,000</h2>
          </div>

          <div className="card">
            <h3>Departments</h3>
            <h2>6</h2>
          </div>
        </div>

        <div className="section">
          <AccountManager />
        </div>

        <div className="section">
          <DeptList />
        </div>

      </div>
    </div>
  );
}