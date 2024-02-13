import { Request,Response,NextFunction } from "express";
import { CatchAsyncError } from "../errors/CatchAsyncError";
import { NotAuthorizedError } from "../errors/NotAuthorized";


export const isAuthorized = CatchAsyncError(async (req:Request,res:Response,next:NextFunction) => {
    if(!req.user){
        return next(new NotAuthorizedError());
    }
    next();
})