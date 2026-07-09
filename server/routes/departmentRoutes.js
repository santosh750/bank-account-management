const express = require("express");
const Department = require("../models/Department");

const router = express.Router();

// Get all departments
router.get("/", async (req, res) => {
  try {
    const departments = await Department.find();
    res.json(departments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add department
router.post("/", async (req, res) => {
  try {
    const department = new Department({
      name: req.body.name
    });

    const savedDepartment = await department.save();

    res.status(201).json(savedDepartment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;