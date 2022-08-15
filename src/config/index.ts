import dotenv from 'dotenv';
import { ConfigurationOptions } from './configurationOptions';

dotenv.config();

const configuration: ConfigurationOptions = {
  application: {
    http: {
      port: +process.env.APP_HTTPS_PORT || 3000,
    },
  },
  mongodb: {
    auth:
      process.env.MONGODB_PASSWORD && process.env.MONGODB_USER ? true : false,
    port: +process.env.MONGODB_PORT || 27017,
    user: process.env.MONwGODB_USER,
    password: process.env.MONGODB_PASSWORD,
    database: process.env.MONGODB_DATABASE,
    host: process.env.MONGODB_HOST || 'localhost',
  },
};

export default configuration;
