import React from "react";

export default function DeptTable({ departments }) {
  return (
    <table border="1" width="100%">
      <thead>
        <tr><th>Dept ID</th><th>Name</th></tr>
      </thead>
      <tbody>
        {departments.map((dept) => (
          <tr key={dept._id}>
            <td>{dept._id}</td><td>{dept.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
