const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    mobile: {
      type: String,
      required: true,
    },

    pan: String,

    IFSC: String,

    branch: String,

    accountType: {
      type: String,
      default: "Savings",
    },

    accountNumber: {
      type: String,
      unique: true,
      required: true,
    },

    balance: {
      type: Number,
      default: 0,
    },

    dob: Date,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Account", accountSchema);