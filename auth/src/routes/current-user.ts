import { Router } from "express";
import { currentUser } from "../controllers/AuthController";
import { isAuthenticated } from "../middleware/IsAuthenticated";
import { isAuthorized } from "../middleware/isAuthorized";


const router = Router();

router.get('/current',isAuthenticated,isAuthorized,currentUser);

export {router as CurrentUser};