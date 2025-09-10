const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  createdAt: { type: Date, default: Date.now }
});


userSchema.index({ email: 1, createdAt: -1 });

const User = mongoose.model("User", userSchema);

async function run() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/tryingdb");
    console.log("Connected to MongoDB tryingdb");


    await User.create([
      { email: "a@test.com" },
      { email: "b@test.com" }
    ]);

    console.log("Users inserted with compound index");
    await mongoose.disconnect();
  } catch (err) {
    console.error("Error:", err);
  }
}

run();
