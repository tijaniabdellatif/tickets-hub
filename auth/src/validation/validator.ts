import { body, check, validationResult, oneOf } from "express-validator";
import { validateRequest } from "../middleware/validateRequest";

export const LoginValidation = [
  body("email")
    .exists()
    .withMessage("provide en email")
    .isEmail()
    .withMessage("Please provide a valid email"),

  body("password")
    .isStrongPassword({
      minLength: 10,
      minNumbers: 2,
      minUppercase: 2,
      returnScore: false,
    })
    .withMessage("Password must be 8 length with 2 numbers and 2 uppercases "),

    validateRequest
];

export const RegisterValidation = [
  body("email")
    .exists()
    .withMessage("provide en email")
    .isEmail()
    .withMessage("Please provide a valid email"),
  body("fullname").exists().withMessage("Please provide a full name"),

  body("username").exists().withMessage("Please provide a full name"),

  body("password")
    .isStrongPassword({
      minLength: 10,
      minNumbers: 2,
      minUppercase: 2,
      returnScore: false,
    })
    .withMessage("Password must be 8 length with 2 numbers and 2 uppercases "),

      validateRequest
];
