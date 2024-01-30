import { NextFunction, Request, Response } from "express";
import { NotAuthorizedError } from "../errors/not-authorized-error";
import jwt from "jsonwebtoken";

interface UserPayload {
  id: string;
  email: string;
  role: string;
  company_id: number;
}

declare global {
  namespace Express {
    interface Request {
      user?: UserPayload;
    }
  }
}

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1]; // Bearer TOKEN
  console.log("authHeader", authHeader);
  if (!token || token === null) {
    throw new NotAuthorizedError();
  }
  console.log("token", token);

  jwt.verify(token, process.env.JWT_KEY!, (err, user) => {
    if (err) {
      console.log("err", err);
      throw new NotAuthorizedError();
    } else {
      console.log("else", user);
      req.user = user as UserPayload;
      next();
    }
  });
};
