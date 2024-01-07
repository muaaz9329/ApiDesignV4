import { Router } from "express";
import { tokenValidationMiddleware } from "../middleware/validation.middlewares";
import protectedRoutes from "./private/router";
import publicRoutes from "./public/router";
const router = Router();

//* Main Api Entry for protected routes

router.use("/api", tokenValidationMiddleware, protectedRoutes);

//* Main Api Entry for public routes

router.use("/user", publicRoutes);

export default router;
