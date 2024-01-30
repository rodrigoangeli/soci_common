import { NextFunction, Request, Response } from "express";
import { NotAuthorizedError } from "../errors/not-authorized-error";
import { BadRequestError } from "../errors/bad-request-error";
import { AccessControl } from "accesscontrol";

type ActionType = "createAny" | "updateAny" | "deleteAny" | "readAny";

export const requireRole = (
  permissions: any,
  action: ActionType,
  resource: any
) => {
  const ac = new AccessControl(permissions);
  return (req: Request, res: Response, next: NextFunction) => {
    const user = req.user!;
    const permission = ac.can(user.role)[action](resource);
    if (Object.keys(permission).length === 0) {
      throw new BadRequestError("No permission was provided!");
    }
    if (permission.granted) next();
    else throw new NotAuthorizedError();
  };
};
