const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: "string",
      required: true,
      unique: true,
    },
    password: {
      type: "string",
      required: true,
    },
    profile: {
      type: "string",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
