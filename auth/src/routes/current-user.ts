import { Router } from "express";
import { currentUser } from "../controllers/AuthController";
import { isAuthenticated } from "../middleware/IsAuthenticated";


const router = Router();

router.get('/current',isAuthenticated,currentUser);

export {router as CurrentUser};