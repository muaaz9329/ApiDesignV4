import { NextFunction, Request, Response } from "express";

export type HandlerFunction<B = {}, P = {}, R = {}> = (
  req: Request<P, R, B>,
  res: Response,
  next: NextFunction
) => void;
