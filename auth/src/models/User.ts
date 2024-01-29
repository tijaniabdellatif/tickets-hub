import { Schema, Document, Model, model } from "mongoose";
import { PasswordHash } from "../services/passwordhash.service";
import jwt from "jsonwebtoken";
require("dotenv").config();

const accessToken = "SFP!5G4k&hdl;$i75cy;E7iZMJ1mKXE";
const refreshToken = "@#<7T&[tCCjhMU`(TiK5^k~\/5b6/}"
export interface IUser extends Document {
  fullname: string;
  username: string;
  email: string;
  password: string;
  comparePassword: (password: string) => Promise<boolean>;
  signAccessToken: () => string;
  signRefreshToken: () => string;
}

export const emailRegexPattern: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
export const passwordRegexPattern: RegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/g;

type UserModel = Model<IUser, {}, {}>;

const userSchema = new Schema<IUser>({
  fullname: {
    type: String,
    required: [true, "Firstname must be provided"],
  },

  email: {
    type: String,
    required: [true, "Provide an email"],
    unique: true,
  },

  username: {
    type: String,
    required: [true, "Provide a username"],
    unique: true,
  },

  password: {
    type: String,
    minlength: [8, "Password must be at least 6 characters"],
    select: false,
  },
});

userSchema.pre<IUser>("save", async function (done) {
  if (this.isModified("password")) {
    const hashed = await PasswordHash.toHash(this.get("password"));
    this.set("password", hashed);
  }

  done();
});

userSchema.methods.comparePassword = async function (
  pass: string
): Promise<boolean> {
  return await PasswordHash.compare(this.get("password"), pass);
};

userSchema.methods.signAccessToken = function () {
  return jwt.sign({ id: this._id }, accessToken || "", {
    expiresIn: "5m",
  });
};

userSchema.methods.signRefreshToken = function () {
  return jwt.sign({ id: this._id }, refreshToken || "", {
    expiresIn: "5d",
  });
};

export const User = model<IUser, UserModel>("User", userSchema);
