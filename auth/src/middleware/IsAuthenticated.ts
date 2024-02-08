import { Request, Response, NextFunction } from "express";
import { CatchAsyncError } from "../errors/CatchAsyncError";
import { CustomError } from "../errors/CustomError";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import { redis } from "../services/redis.service";
import { accessToken, refreshToken } from "../models/User";

export const isAuthenticated = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const acccess_token = req.cookies.refresh_token;


    if (!acccess_token) {
      return next(new CustomError("Please login in again", 409));
    }

    const decoded = jwt.verify(
      acccess_token,
      refreshToken as Secret
    ) as JwtPayload;
    if (!decoded) {
      return next(
        new CustomError("You have problem in your access, try again", 409)
      );
    }

    const user = await redis.get(decoded.id);
    if (!user) {
      return next(
        new CustomError("your access token is expired Login again", 409)
      );
    }

    req.user = JSON.parse(user);
    next();
  }
);
