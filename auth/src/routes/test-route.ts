import { Router } from "express";
import { testApi } from "../controllers/AuthController";


const router = Router();

router.get('/currenttest',testApi);

export {router as testRoute};