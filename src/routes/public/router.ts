import { Router } from "express";
const router = Router();

import userRouter from "./user/user.routes";

router.use(userRouter);

export default router;
