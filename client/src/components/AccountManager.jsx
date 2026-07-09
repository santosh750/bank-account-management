import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import AccountTable from "./AccountTable";
import AddAccountModal from "./AddAccountModal";
import "./AccountManager.css";

export default function AccountManager() {
  const [showModal, setShowModal] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(null);

  return (
    <div className="account-manager">
      <div className="account-header">
        <div>
          <h2>Account Management</h2>
          <p>Create, view, update and delete customer accounts.</p>
        </div>

        <button
          className="add-btn"
          onClick={() => {
            setSelectedAccount(null);
            setShowModal(true);
          }}
        >
          <FaUserPlus />
          Add Account
        </button>
      </div>

      <AccountTable
        onEdit={(account) => {
          setSelectedAccount(account);
          setShowModal(true);
        }}
      />

      {showModal && (
        <AddAccountModal
          closeModal={() => setShowModal(false)}
          account={selectedAccount}
        />
      )}
    </div>
  );
}