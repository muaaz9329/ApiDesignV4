import winston from "winston";
import path from "path";
import { loggerConfig } from "./loger.config";
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(), // Log to console
    new winston.transports.File(loggerConfig.file), // Log errors to a file
  ],
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.simple(),
    winston.format.printf(
      (info) => `${info.timestamp} ${info.level}: ${info.message}`
    )
  ),
});

export default logger;
