import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AddAccountModal.css";

export default function AddAccountModal({ closeModal, account }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    pan: "",
    IFSC: "",
    branch: "",
    accountType: "Savings",
    accountNumber: "",
    balance: "",
    dob: "",
  });

  useEffect(() => {
    if (account) {
      setFormData({
        name: account.name || "",
        email: account.email || "",
        mobile: account.mobile || "",
        pan: account.pan || "",
        IFSC: account.IFSC || "",
        branch: account.branch || "",
        accountType: account.accountType || "Savings",
        accountNumber: account.accountNumber || "",
        balance: account.balance || "",
        dob: account.dob
          ? new Date(account.dob).toISOString().split("T")[0]
          : "",
      });
    }
  }, [account]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (account) {
        await axios.put(
          `${import.meta.env.VITE_API_URL}/api/accounts/${account._id}`,
          formData
        );

        alert("Account Updated Successfully");
      } else {
        await axios.post(
          "${import.meta.env.VITE_API_URL}/api/accounts",
          formData
        );

        alert("Account Created Successfully");
      }

      closeModal();
      window.location.reload();
    } catch (err) {
      console.error(err);
      alert("Operation Failed");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">

        <h2>
          {account ? "Update Account" : "Create Account"}
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            name="mobile"
            placeholder="Mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />

          <input
            name="pan"
            placeholder="PAN"
            value={formData.pan}
            onChange={handleChange}
          />

          <input
            name="IFSC"
            placeholder="IFSC"
            value={formData.IFSC}
            onChange={handleChange}
          />

          <input
            name="branch"
            placeholder="Branch"
            value={formData.branch}
            onChange={handleChange}
          />

          <select
            name="accountType"
            value={formData.accountType}
            onChange={handleChange}
          >
            <option value="Savings">Savings</option>
            <option value="Current">Current</option>
          </select>

          <input
            name="accountNumber"
            placeholder="Account Number"
            value={formData.accountNumber}
            onChange={handleChange}
            required
          />

          <input
            name="balance"
            type="number"
            placeholder="Opening Balance"
            value={formData.balance}
            onChange={handleChange}
          />

          <input
            name="dob"
            type="date"
            value={formData.dob}
            onChange={handleChange}
          />

          <div className="modal-buttons">
            <button type="submit">
              {account ? "Update Account" : "Save Account"}
            </button>

            <button
              type="button"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}