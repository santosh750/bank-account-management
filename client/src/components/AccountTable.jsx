import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaUserEdit, FaTrash } from "react-icons/fa";
import "./AccountTable.css";

export default function AccountTable({ onEdit }) {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    fetchAccounts();
  }, []);

  // Fetch all accounts
  const fetchAccounts = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/accounts`)
      .then((res) => setAccounts(res.data))
      .catch((err) => console.error(err));
  };

  // Delete account
  const deleteAccount = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this account?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/accounts/${id}`);

      alert("Account deleted successfully");

      // Refresh the table
      fetchAccounts();
    } catch (err) {
      console.error(err);
      alert("Unable to delete account");
    }
  };

  return (
    <div className="table-container">
      <table className="account-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Account No</th>
            <th>Balance</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {accounts.map((acc) => (
            <tr key={acc._id}>
              <td>{acc.name}</td>
              <td>{acc.email}</td>
              <td>{acc.mobile}</td>
              <td>{acc.accountNumber}</td>
              <td>₹ {acc.balance}</td>

              <td>
                <button
                  className="edit-btn"
                  onClick={() => onEdit(acc)}
                >
                  <FaUserEdit />
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteAccount(acc._id)}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}