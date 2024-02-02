import { Router } from "express";
import {  updateAccessToken } from "../controllers/AuthController";


const router = Router();

router.get('/update-token',updateAccessToken);
export {router as refreshTokenRoute};