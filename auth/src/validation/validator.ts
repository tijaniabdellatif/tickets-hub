import {body,check,validationResult,oneOf} from 'express-validator';
import { Request,Response,NextFunction,ErrorRequestHandler } from 'express';
import { CustomError } from '../errors/CustomError';



export const RegisterValidation = [

    body('email')
    .exists()
    .withMessage('provide en email')
    .isEmail()
    .withMessage('Please provide a valid email')
   ,

    body('fullname')
    .exists()
    .withMessage('Please provide a full name'),
    

    body('username')
    .exists()
    .withMessage('Please provide a full name'),


    body('password').isStrongPassword({

        minLength:10,
        minNumbers:2,
        minUppercase:2,
        returnScore:false
    }).withMessage('Password must be 8 length with 2 numbers and 2 uppercases '),

 (req:Request,res:Response,next:NextFunction) => {

    
          const errors = validationResult(req);
          if(!errors.isEmpty()){


             console.log(errors.array());

             return res.status(422).json({

                errors:errors.array()
             });
          }


          next();


    }

    
];