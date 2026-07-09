import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaBuilding } from "react-icons/fa";
import DeptTable from "./DeptTable";
import "./DeptList.css";

export default function DeptList() {
  const [departments, setDepartments] = useState([]);
  const [deptName, setDeptName] = useState("");

  const fetchDepartments = () => {
    axios
      .get("${import.meta.env.VITE_API_URL}/api/departments")
      .then((res) => setDepartments(res.data));
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  const addDepartment = async () => {
    if (!deptName) {
      alert("Enter department name");
      return;
    }

    try {
      await axios.post("${import.meta.env.VITE_API_URL}/api/departments", {
        name: deptName
      });

      setDeptName("");
      fetchDepartments();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="dept-container">

      <div className="dept-header">
        <div>
          <h2>Department Management</h2>
          <p>Manage all bank departments.</p>
        </div>

        <div>
          <input
            type="text"
            placeholder="Department name"
            value={deptName}
            onChange={(e) => setDeptName(e.target.value)}
          />

          <button className="dept-btn" onClick={addDepartment}>
            <FaBuilding />
            Add Department
          </button>
        </div>

      </div>

      <DeptTable departments={departments} />

    </div>
  );
}