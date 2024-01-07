import { Request, Response, NextFunction } from "express";
import { verifyJWT } from "../utils/auth-jwt";

const tokenValidationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;
  if (!token) {
    res.status(401).json({ message: "token not found" });
  } else {
    try {
      //* split token
      token = token?.split(" ")[1];

      //* verify token
      const user = await verifyJWT(token);
      req.body.user = user;
      next();
    } catch (e) {
      res.status(401).json({ message: e });
    }
  }
};

/**
 *
 * @param arg  , array of strings that are the keys of the body
 * @returns
 */

const bodyValidationMiddleware =
  (...arg: string[]) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("bodyValidationMiddleware");

      const body = req.body;

      const keys = arg;

      // taking the keys from the body

      const bodyKeys = Object.keys(body);

      // comparing the keys from the type with the keys from the body
      const valid = keys.every((key) => bodyKeys.includes(key));

      if (!valid) {
        res
          .status(400)
          .json({ message: "invalid body , Please send Valid keys" });
      }

      //check if the body keys are empty

      const empty = bodyKeys.every(
        (key) =>
          body[key] !== "" && body[key] !== null && body[key] !== undefined
      );

      if (!empty) {
        res
          .status(400)
          .json({ message: "invalid body , Please add values to keys" });
      } else {
        next();
      }
    } catch (e) {
      res.status(400).json({ message: "Problem in Validation" });
    }
  };

export { tokenValidationMiddleware, bodyValidationMiddleware };
