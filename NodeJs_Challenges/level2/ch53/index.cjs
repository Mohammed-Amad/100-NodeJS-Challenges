const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: String,
  price: Number
});

const Item = mongoose.model("Item", itemSchema);

async function run() {
  await mongoose.connect("mongodb://127.0.0.1:27017/tryingdb");

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    await Item.create([{ name: "Phone", price: 300 }], { session });
    await Item.create([{ name: "Laptop", price: 1000 }], { session });

    await session.commitTransaction();
    console.log("Transaction committed");
  } catch (err) {
    await session.abortTransaction();
    console.log(" Transaction aborted:", err.message);
  } finally {
    session.endSession();
    await mongoose.disconnect();
  }
}

run();