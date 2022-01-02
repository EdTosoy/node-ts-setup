import pino from 'pino';
import dayjs from 'dayjs';

export const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
  base: {
    pid: true,
  },
  timestamp: () => `,"time":"${dayjs().format()}"`,
});
