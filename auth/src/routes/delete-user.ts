import { Router } from "express";
import { deleteUser } from "../controllers/AuthController";
import { isAuthenticated } from "../middleware/IsAuthenticated";


const router = Router();

router.get('/delete/:id',isAuthenticated,deleteUser);

export {router as deleteUser};