import { Router } from "express";
import { createNewUserHandler, signInUserHandler } from "./user.handler";

const router = Router();

router.post("/login", signInUserHandler);

router.post("/register", createNewUserHandler);

export default router;