import { Request, Response, NextFunction } from "express";
import { verifyJWT } from "../utils/auth";

export const validationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;
  if (!token) {
    res.status(401).json({ message: "token not found" });
  }
  token = token?.split(" ")[1];
  try {
    const user = await verifyJWT(token);
    req.body.user = user;
    next();
  } catch (e) {
    res.status(401).json({ message: e });
  }
};
