import { Router } from "express";
import { activateUser } from "../controllers/AuthController";


const router = Router();

router.post('/activate',activateUser);

export {router as activatingUser};