import { Express, Request, Response, NextFunction } from 'express';

export const routes = (app: Express) => {
  app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));
};
