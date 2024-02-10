import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import { app } from "../app";
import {redis} from '../services/redis.service';

let mongo: any;
beforeAll(async () => {
  process.env.JWT_KEY="@un12@@//tr";
  mongo = await MongoMemoryServer.create();
  const mongoUri =  mongo.getUri();
  await mongoose.connect(mongoUri,{
    family:4
  });
});

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();
  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
 
    jest.setTimeout(5000);
    await redis.quit();
    if(mongo){
      await mongo.stop();
    }
  
    await mongoose.connection.close();
});
