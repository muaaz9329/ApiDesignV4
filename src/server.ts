import express, { Express } from "express";
import router from "./router";
import morgan from "morgan";
import cors from "cors";
import { validationMiddleware } from "./middleware/validation.middleware";
const app: Express = express();

//middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//routes
app.get("/", (req, res) => {
  console.log("Hello from express");

  res.status(200);
  res.json({ message: "hello" });
});

app.use("/api", validationMiddleware, router);

export default app;
