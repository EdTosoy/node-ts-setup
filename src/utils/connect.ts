import mongoose from 'mongoose';
import config from 'config';
import { logger } from './logger';

export const connect = async () => {
  const dbUri = config.get<string>('dbUri');
  try {
    await mongoose.connect(dbUri);
    logger.info('successfully connected to database');
  } catch (error) {
    logger.error('error : ', error);
    logger.error('coult not connect to database');
    process.exit(1);
  }
};
