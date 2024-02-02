import { Router } from "express";
import { currentUser } from "../controllers/AuthController";


const router = Router();

router.get('/current',currentUser);

export {router as CurrentUser};