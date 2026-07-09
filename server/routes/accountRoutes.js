const express = require("express");
const Account = require("../models/Account");

const router = express.Router();

/* Get All Accounts */
router.get("/", async (req, res) => {
  try {
    const accounts = await Account.find();
    res.json(accounts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* Add Account */
router.post("/", async (req, res) => {
  try {
    const account = new Account(req.body);
    await account.save();

    res.status(201).json(account);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* Update Account */
router.put("/:id", async (req, res) => {
  try {
    const account = await Account.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(account);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* Delete Account */
router.delete("/:id", async (req, res) => {
  try {
    await Account.findByIdAndDelete(req.params.id);

    res.json({
      message: "Account deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;