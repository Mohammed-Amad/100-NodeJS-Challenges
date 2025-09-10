require("dotenv").config();

const env = process.env.NODE_ENV;
if (!["dev", "test", "prod"].includes(env)) {
  throw new Error("NODE_ENV must be one of dev/test/prod");
}
console.log("Running in environment:", env);
