import { Request,Response,NextFunction } from "express";


export const CatchAsyncError = (callback:Function) => (req:Request,res:Response,next:NextFunction) => {

      Promise.resolve(callback(req,res,next)).catch(next);
}