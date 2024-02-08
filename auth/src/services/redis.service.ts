import {Redis} from 'ioredis'
const REDIS_URL='rediss://default:ea8a04b6c4de436f8662c12e32e3af78@major-panda-45994.upstash.io:45994';

const redisClient = () => {

     if(REDIS_URL){

        console.log('redis is connected');
        return REDIS_URL;
     }

     throw new Error('Redis is not available')
}

export const redis = new Redis(redisClient());