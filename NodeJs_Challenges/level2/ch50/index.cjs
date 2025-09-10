const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    match: [/^\S+@\S+\.\S+$/, "Invalid email"]
  },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);