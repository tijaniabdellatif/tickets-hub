import express,{Request,Response,NextFunction} from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
require('dotenv').config();
import morgan from 'morgan';


export const app = express();
app.use(express.json({limit:'50mb'}));
app.use(cookieParser());
app.use(cors());