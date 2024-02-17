import { Router } from "express";
import { testApi } from "../controllers/AuthController";


const router = Router();

router.post('/test',testApi);

export {router as testRoute};