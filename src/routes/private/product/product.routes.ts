import { Router } from "express";
import { bodyValidationMiddleware } from "../../../middleware/validation.middlewares";
import { createNewProductHandler, getAllProductsHandler } from "./product.handler";

const router = Router();

router.get("/product", getAllProductsHandler);

router.get("/product/:id", (req, res) => {});



router.post("/product", bodyValidationMiddleware('name') ,createNewProductHandler);

router.put("/product/:id", (req, res) => {});

router.delete("/product/:id", (req, res) => {});

export default router;
