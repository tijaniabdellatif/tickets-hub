import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { RegisterRouter } from "./routes/signin";
import { ErrorHandler } from "./middleware/ErrorHandler";
import { activatingUser } from "./routes/activate-user";
import { LoginRoute } from "./routes/signup";
import { LogoutRoute } from "./routes/log-out";
import { refreshTokenRoute } from "./routes/update-token";
import { CurrentUser } from "./routes/current-user";
import { deleteUser } from "./routes/delete-user";
import { testRoute } from "./routes/test-route";

export const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(cors({

    origin:['http://ticketing.dev'],
    credentials:true
}));

app.use(
  "/api/users",
  testRoute,
  RegisterRouter,
  activatingUser,
  LoginRoute,
  LogoutRoute,
  refreshTokenRoute,
  CurrentUser,
  deleteUser
);

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`Route ${req.originalUrl} is not found`) as any;
  error.statusCode = 404;
  next(error);
});
app.use(ErrorHandler);
