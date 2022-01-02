import config from 'config';
import express from 'express';
import { routes } from './routes';
import { connect, logger } from './utils';

const app = express();

const port = config.get<number>('port');
const host = config.get<string>('host');

app.listen(port, host, async () => {
  logger.info(`app running at http://${host}:${port}`);
  await connect();
  routes(app);
});
