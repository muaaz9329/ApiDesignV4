import morgan from "morgan";
import cors from "cors";
import multer from "multer";
import bodyParser from "body-parser";
import express, { Router } from "express";
import * as expressWinston from "express-winston"; 
import winston from "winston";
const globalMiddlewares: Router = express.Router();
const upload = multer();

globalMiddlewares.use(morgan("dev"));
globalMiddlewares.use(express.json());
globalMiddlewares.use(express.urlencoded({ extended: false }));
globalMiddlewares.use(cors());
//for parsing application/json
globalMiddlewares.use(bodyParser.json());

// for parsing application/xwww-
globalMiddlewares.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

// for parsing multipart/form-data
//@ts-ignore
globalMiddlewares.use(upload.array());
globalMiddlewares.use(express.static("public"));
globalMiddlewares.use(
    expressWinston.logger({
      transports: [new winston.transports.Console()],
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.simple(),
        winston.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
      ),
    })
  );

export default globalMiddlewares;
