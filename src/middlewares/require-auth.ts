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

  if (token == null) return new NotAuthorizedError(); // No token provided

  const payload = jwt.verify(token, process.env.JWT_KEY!) as UserPayload;

  req.user = payload;
  next();
};
