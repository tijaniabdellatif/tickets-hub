import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/CustomError";


interface ErrorRequestCatcher {
  statusCode: number;
  message?: string | Object | undefined;
  name?: string | undefined;
  code?: number | undefined;
  path?: string | undefined;
  keyValue?: any;
  stack?: any;
}

export const ErrorHandler = (
  err: ErrorRequestCatcher,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  if (err.name === "CastError") {
    const message = `Ressource not found in valid ${err.path}`;
    err = new CustomError(message, 404);
  }

  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
    err = new CustomError(message, 400);
  }

  if (err.name === "JsonWebTokenError") {
    const message = `Json web token is invalid, try again`;
    err = new CustomError(message, 401);
  }

  if (err.name === "TokenExpiredError") {
    const message = "Json web token is expired, try again";
    err = new CustomError(message, 401);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};
