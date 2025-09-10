const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now }
});
const User = mongoose.model("User", userSchema);

async function run() {
  try {
    await mongoose.connect("mongodb://localhost:27017/app");
    console.log("MongoDB connected");

    const created = await User.create({ email: "a@test.com" });
    console.log("Created:", created);

    const found = await User.findOne({ email: "a@test.com" });
    console.log("Found:", found);

    await User.updateOne({ email: "a@test.com" }, { email: "b@test.com" });
    console.log("Updated email to b@test.com");

    await User.deleteOne({ email: "b@test.com" });
    console.log("Deleted user");
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await mongoose.disconnect();
  }
}

run();
