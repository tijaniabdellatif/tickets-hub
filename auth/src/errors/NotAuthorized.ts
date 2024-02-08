import { CustomError } from "./CustomError";

export class NotAuthorizedError extends CustomError {
    statusCode = 401;

    constructor(){
        super('You are not authorized to access this ressource',401);
        Object.setPrototypeOf(this,NotAuthorizedError.prototype);
    }

}