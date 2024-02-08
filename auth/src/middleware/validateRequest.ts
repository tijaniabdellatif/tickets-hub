import { Request,Response,NextFunction } from "express";
import { validationResult } from "express-validator";
import { CatchAsyncError } from "../errors/CatchAsyncError";
import { CustomError } from "../errors/CustomError";


export const validateRequest = CatchAsyncError(async(req:Request,res:Response,next:NextFunction)=>{

    try {

        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(422).json({
                errors: errors.array(),
              });

        }

        next();


    }catch(error:any){

        return next(new CustomError('Something is wrong',500))
    }
})