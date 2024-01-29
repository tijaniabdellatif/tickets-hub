import { Router } from "express";
import { authRegister } from "../controllers/AuthController";
import { RegisterValidation } from "../validation/validator";

const router = Router();

router.post('/signin',RegisterValidation,authRegister);

export {router as RegisterRouter};