import { Router } from "express";
import {  loginUser } from "../controllers/AuthController";
import { LoginValidation } from "../validation/validator";

const router = Router();

router.post('/signup',LoginValidation,loginUser);

export {router as LoginRoute};