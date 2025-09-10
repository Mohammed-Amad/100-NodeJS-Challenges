import { Queue, Worker } from "bullmq";
import IORedis from "ioredis";

const connection = new IORedis();

const emailQueue = new Queue("email", { connection });

await emailQueue.add("send", { to: "user@test.com", body: "Hello" });

const worker = new Worker("email", async job => {

  console.log(" email send  to:", job.data.to);

}, { connection, concurrency: 5 });