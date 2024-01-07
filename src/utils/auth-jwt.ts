import jwt from "jsonwebtoken";
import { userJwt } from "../types";

//promise to make sure that the token is created
export const createJWT = (user: userJwt) =>
  new Promise((resolve, reject) => {
    if (user) {
      const jwtToken = jwt.sign(user, process.env.JWT_SECRET);
      jwtToken ? resolve(jwtToken) : reject("token not created");
    } else {
      reject("user not found");
    }
  });

export const verifyJWT = (token: string) =>
  new Promise((resolve, reject) => {
    if (token) {
      const user = jwt.verify(token, process.env.JWT_SECRET);
      if (user) {
        resolve(user);
      } else {
        reject("Invalid Token");
      }
    } else {
      reject("No Berar Token given");
    }
  });

export const decodeJWT = (token: string) => {
  new Promise((resolve, reject) => {
    if (token) {
      const user = jwt.decode(token);
      if (user) {
        resolve(user);
      } else {
        reject("Invalid Token");
      }
    } else {
      reject("No Berar Token given");
    }
  });
};
