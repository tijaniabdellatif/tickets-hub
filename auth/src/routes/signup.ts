import { Router } from "express";
import {  loginUser } from "../controllers/AuthController";


const router = Router();

router.post('/signup',loginUser);

export {router as LoginRoute};