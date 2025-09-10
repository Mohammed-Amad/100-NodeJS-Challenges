const jwt = require("jsonwebtoken");
const SECRET = "mysecret";

const token = jwt.sign({ userId: 1, role: "student" }, SECRET, { algorithm: "HS256", expiresIn: "1h" });
console.log(token);
