const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  status: String,
  amount: Number
});


const Order = mongoose.model("Order", orderSchema);

async function run() {
  try {

    await mongoose.connect("mongodb://127.0.0.1:27017/tryingdb");
    console.log("Connected to MongoDB tryingdb");

  
    await Order.deleteMany({});

  
    await Order.create([
      { status: "pending", amount: 100 },
      { status: "pending", amount: 50 },
      { status: "completed", amount: 200 },
      { status: "completed", amount: 300 }
    ]);

    
    const result = await Order.aggregate([
      {
        $group: {
          _id: "$status",
          total: { $sum: "$amount" }
        }
      }
    ]);

    console.log("Aggregation result:", result);

    await mongoose.disconnect();
  } catch (err) {
    console.error("Error:", err);
  }
}

run();
