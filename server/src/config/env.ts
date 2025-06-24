import { config } from 'dotenv';

config();

const env = {
  port: process.env.PORT || '5000',
  mongoUri: process.env.MONGO_URI!,
  redisUrl: process.env.REDIS_URL!,
  jwtSecret: process.env.JWT_SECRET!,
  cribClientId: process.env.CRIB_CLIENT_ID!,
  cribClientSecret: process.env.CRIB_CLIENT_SECRET!,
  cribTokenUrl: process.env.CRIB_TOKEN_URL!,
  cribApiBaseUrl: process.env.CRIB_API_BASE_URL!,
};

export default env;