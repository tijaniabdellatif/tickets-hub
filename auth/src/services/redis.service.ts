import {Redis} from 'ioredis'
const REDIS_URL='redis://auth-redis-service.default.svc.cluster.local:6379';

const redisClient =  () => {

     if(REDIS_URL){

        console.log('redis is connected');
        return REDIS_URL;
     }

     throw new Error('Redis is not available')
}

export const redis = new Redis(redisClient());