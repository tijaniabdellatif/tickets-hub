import { Router } from "express";
import { logoutUser } from "../controllers/AuthController";

const router = Router();

router.post('/logout',logoutUser);

export {router as LogoutRoute};