import { Request, Response, NextFunction } from "express";
import { CatchAsyncError } from "../errors/CatchAsyncError";
import { DBHandler } from "../config/DbLambda";
import { IUser, User } from "../models/User";
import { CustomError } from "../errors/CustomError";
import { createToken } from "../services/token.service";
import ejs from "ejs";
import path from "path";
import { sendMail } from "../services/email.service";
import jwt from "jsonwebtoken";
import { truncate } from "fs";
import { sendToken } from "../services/jwt.service";

const connection = new DBHandler();

interface IRegistrationBody {
  fullname: string;
  password: string;
  email: string;
  username: string;
}

interface IActivationRequest {
  activation_code: string;
  activation_token: string;
}

interface ILoginRequest {
  email: string;
  password: string;
}

export const authRegister = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { fullname, username, email, password } = req.body;
      await connection.connectToDatabase();
      const userExists = await User.findOne({ email });
      if (userExists) {
        return next(new CustomError("Email already exists", 400));
      }

      const user: IRegistrationBody = {
        username: username,
        password: password,
        email: email,
        fullname: fullname,
      };

      const activationToken = createToken(user);

      const activated = activationToken.activation_code;

      const dataEmail = {
        user: {
          name: user.fullname,
        },
        activated: activated,
      };

      const template = await ejs.renderFile(
        path.join(__dirname, "../mails/activate.ejs"),
        dataEmail
      );

      try {
        await sendMail({
          email: user.email,
          subject: "Account Activation",
          template: "activate.ejs",
          data: dataEmail,
        });
        await connection.disconnectFromDatabase();
        return res.status(200).json({
          success: true,
          message: `Welcome ${user.fullname}, check your email to activate your account`,
          token: activationToken.token,
        });
      } catch (error: any) {
        return next(new CustomError(error.message, 500));
      }
    } catch (error: any) {
      return next(new CustomError("Something went wrong", 500));
    }
  }
);

export const activateUser = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { activation_code, activation_token } =
        req.body as IActivationRequest;
      const secret: string = "@un12@@//tr";

      const newUser: { user: IUser; activationCode: string } = jwt.verify(
        activation_token,
        secret
      ) as {
        user: IUser;
        activationCode: string;
      };

      if (newUser.activationCode !== activation_code) {
        return next(new CustomError("Invalid activation Code", 400));
      }

      const { fullname, email, password, username } = newUser.user;
      await connection.connectToDatabase();
      const existence = await User.findOne({ email });

      if (existence) {
        return next(new CustomError("Email already exists", 400));
      }

      await User.create({
        fullname: fullname,
        username: username,
        email: email,
        password: password,
      });

      await connection.disconnectFromDatabase();
      return res.status(201).json({
        success: true,
        message: "Your email is verified! welcome",
      });
    } catch (error: any) {
      return next(new CustomError("Something is wrong", 500));
    }
  }
);

export const loginUser = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body as ILoginRequest;

      await connection.connectToDatabase();

      const user = await User.findOne({ email }).select("+password");
      if (!user) {
        return next(new CustomError("Invalid credentials : No such user", 400));
      }

      const isPasswordMatch = await user.comparePassword(password);

      if (!isPasswordMatch) {
        return next(new CustomError("Password Incorrect", 400));
      }

      await connection.disconnectFromDatabase();
      sendToken(user, 200, res);
    } catch (error: any) {
      return next(new CustomError("Something went wrong", 500));
    }
  }
);
