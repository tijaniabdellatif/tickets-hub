import {Request,Response,NextFunction} from 'express';
import { CatchAsyncError } from '../errors/CatchAsyncError';
import { DBHandler } from '../config/DbLambda';
import { User } from '../models/User';
import { CustomError } from '../errors/CustomError';
import { createToken } from '../services/token.service';
import ejs from 'ejs'
import path from 'path';
import { sendMail } from '../services/email.service';

const connection = new DBHandler();

interface IRegistrationBody {
      fullname: string;
      password: string;
      email: string;
      username: string;
    }

export const authRegister = CatchAsyncError(async (req:Request,res:Response,next:NextFunction) => {


      try {
           

            const {fullname,username,email,password} = req.body;
            await connection.connectToDatabase();
            const userExists = await User.findOne({email});
            if(userExists){

                  return next(new CustomError('Email already exists',400));
            }

            const user: IRegistrationBody = {
                  username:username,
                  password: password,
                  email: email,
                  fullname: fullname,
                };

                const activationToken = createToken(user);

                const activated = activationToken.activation_code;

                const dataEmail = {

                  user: {

                        name:user.fullname
                  },
                  activated:activated
                }

                const template = await ejs.renderFile(

                  path.join(__dirname,'../mails/activate.ejs'),
                  dataEmail
                )

                try {

                  await sendMail({

                        email:user.email,
                        subject:'Account Activation',
                        template:'activate.ejs',
                        data:dataEmail
                  });
                  await connection.disconnectFromDatabase();
                  return res.status(200).json({

                         success:true,
                         message:`Welcome ${user.fullname}, check your email to activate your account`,
                         token:activationToken.token
                  })


                }catch(error:any){

                  return next(new CustomError(error.message,500));
                }

            
      
      }catch(error:any){

            return next(new CustomError('Something went wrong',500))
             
      }

     
})