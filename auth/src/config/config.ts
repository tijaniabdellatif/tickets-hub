
const envFound = require('dotenv').config();
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if(envFound.error){

     throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {


    port : Number(process.env.PORT)
}