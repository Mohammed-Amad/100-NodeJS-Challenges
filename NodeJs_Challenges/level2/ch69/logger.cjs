const path = require("path");
const winston = require("winston");
require("winston-daily-rotate-file");

const transport = new winston.transports.DailyRotateFile({
  dirname: path.join(__dirname, "logs"), 
  filename: "app-%DATE%.log",
  datePattern: "YYYY-MM-DD",
  zippedArchive: true,
  maxSize: "20m",
  maxFiles: "14d"
});

const logger = winston.createLogger({
  format: winston.format.json(),
  transports: [transport]
});

logger.info("Logger initialized");
