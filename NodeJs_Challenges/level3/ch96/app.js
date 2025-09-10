import { env } from "./config.js";

console.log("Server will run on port:", env.PORT);
console.log("Database URL is:", env.DB_URL);
