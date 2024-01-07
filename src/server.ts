import express, { Express } from "express";
import router from "./routes";
import globalMiddlewares from "./middleware/global.middleware";
import errorHandler from "./middleware/error-handler";

//*constants
const app: Express = express();


//*Global middleware
app.use(globalMiddlewares)

//* Index routes
app.get("/", (req, res) => {
  throw new Error("Error thrown from index route");
});

//* Routes
app.use(router);

//* Error handler

app.use(errorHandler)

export default app;
