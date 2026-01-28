const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, sparse: true },
  phone: { type: String, unique: true, sparse: true },
  password: String,
  loginType: {
    type: String,
    enum: ["email", "google", "phone"]
  },
  role: {
    type: String,
    default: "customer"
  }
});

module.exports = mongoose.model("User", UserSchema);
