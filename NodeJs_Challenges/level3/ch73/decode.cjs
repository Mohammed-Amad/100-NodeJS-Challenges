const text = "Hello Streams & Buffers";

const base64 = Buffer.from(text, "utf8").toString("base64");
console.log("Base64:", base64);

const decoded = Buffer.from(base64, "base64").toString("utf8");
console.log("Decoded:", decoded);
