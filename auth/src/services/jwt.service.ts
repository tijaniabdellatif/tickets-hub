require('dotenv').config();
import { Response } from "express";
import { IUser } from "../models/User";
import { SameSite } from "../enums/Config";
import {redis} from '../services/redis.service';

interface ITokenOptions {

    expires:Date,
    maxAge:number,
    httpOnly:boolean,
    sameSite:SameSite | undefined,
    secure?:boolean
}



const accesTokenExpires = '5';
const refreshTokenExpires = '3'
  //parse environment variables to integrate with fallback values
  export const accessTokenExpire = Number(accesTokenExpires || "300");
  const refreshTokenExpire = Number(refreshTokenExpires || "300");


export const accessTokenOptions:ITokenOptions = {

    expires:new Date(Date.now() + accessTokenExpire * 60 * 60 * 1000),
    maxAge:accessTokenExpire * 60 * 60 * 1000,
    httpOnly:true,
    sameSite:SameSite.LAX
}

export const refresTokenOptions:ITokenOptions = {

    expires: new Date(Date.now() + refreshTokenExpire * 24 * 60 * 60 * 1000),
    maxAge: refreshTokenExpire * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: SameSite.LAX,
}

export const sendToken = (user:IUser,statusCode:number,res:Response) => {

    const accessToken = user.signAccessToken();
    const refreshToken = user.signRefreshToken();
    redis.set(user._id,JSON.stringify(user) as any);
    accessTokenOptions.secure = true

    res.cookie('access_token',accessToken,accessTokenOptions);
    res.cookie('refresh_token',refreshToken,refresTokenOptions);

    return res.status(statusCode).json({

         success:true,
         user,
         accessToken
    })

}