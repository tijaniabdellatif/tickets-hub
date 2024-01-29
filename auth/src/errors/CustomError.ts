export class CustomError extends Error {

     statusCode:number;

     constructor(message:any,statusCode:number){

         super(message);
         this.statusCode = statusCode;
         Error.captureStackTrace(this,this.constructor);
     }
}


