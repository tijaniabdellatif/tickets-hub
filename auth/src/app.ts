import express,{Request,Response,NextFunction} from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import {RegisterRouter} from "./routes/router"; 
import { ErrorHandler } from './middleware/ErrorHandler';
require('dotenv').config();



export const app = express();
app.use(express.json({limit:'50mb'}));
app.use(cookieParser());
app.use(cors());


app.use('/api/users',RegisterRouter)

app.all('*',(req:Request,res:Response,next:NextFunction) => {
    const error = new Error(`Route ${req.originalUrl} is not found`) as any;
    error.statusCode = 404;
    next(error);

})
app.use(ErrorHandler);
