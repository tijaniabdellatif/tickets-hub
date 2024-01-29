import { Schema,Document, Model, model } from "mongoose";

export interface IUser extends Document {

    fullname:string,
    username: string;
    email: string;
    password: string;
   
}

type UserModel = Model<IUser,{},{}>;

const userSchema = new Schema<IUser>({

     fullname:{
        type:String,
        required:[true,'Firstname must be provided']
     },

    
     email: {
        type: String,
        required: [true, "Provide an email"],
        unique: true,
      },

      username:{

        type: String,
        required: [true, "Provide a username"],
        unique: true,
      },

      password: {
        type: String,
        minlength: [8, "Password must be at least 6 characters"],
        select: false,
      },


});

export const User = model<IUser,UserModel>('User',userSchema);