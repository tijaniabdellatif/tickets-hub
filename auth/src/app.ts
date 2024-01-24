import express,{Request,Response,NextFunction} from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
require('dotenv').config();

export const app = express();
app.use(express.json({limit:'50mb'}));
app.use(cookieParser());
app.use(cors());


app.get('api/users/currentuser',(req:Request,res:Response)=> {
    res.send("hi there !!");
});