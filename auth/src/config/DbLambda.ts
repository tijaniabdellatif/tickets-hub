import { MongoAPIError } from "mongodb";
import mongoose, { Mongoose } from "mongoose";
require("dotenv").config();

class Database {

     private url: string;
     private dbname:string;
     private isConnected:boolean

     constructor(){

        this.url = 'mongodb+srv://user_handler:6o8gaDGPHKHqv8NM@atlascluster.h0nxtkp.mongodb.net/?retryWrites=true&w=majority';
        this.dbname = `bts-dev`;
        this.isConnected = false;
     }


     async connectToDatabase():Promise<void>{

         mongoose.set('strictQuery',true);

         if(this.isConnected){

            console.log('Mongo Is Already connected');
            return;
         }


         try {

             const action:Mongoose = await mongoose.connect(this.url,{

                dbName:this.dbname
             })



             this.isConnected = true;

             console.log('Mongo is connected ....',action.Connection.name);

         }catch(error:any){

            throw new MongoAPIError(error.message,{
                cause:error.stack,
            });

         }
           
     }


     async disconnectFromDatabase():Promise<void>{

            if(!this.isConnected){

                  await mongoose.connection.close();
            }

            console.log('Connection closed ... waiting until the next one');
            return;
     }
}

export {Database as DBHandler}