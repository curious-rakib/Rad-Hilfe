import { Request, Response, NextFunction } from 'express';
import { SessionData } from '../interfaces/session.interface';
import { getSession } from './../middlewares/sessionManagement';
import { findCyclistByEmail } from '../models/cyclist/cyclist.query';

const cyclistAuthorizer = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.accessToken;
  const session: SessionData | undefined = getSession(token);

  if (session) {
    const user = await findCyclistByEmail(session.userEmail);

    if (user && user.role === 'cyclist') {
      next();
    }
  } else res.status(404).send('You are not authorized !!!');
};

const techniciarAuthorizer = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.accessToken;
  const session: SessionData | undefined = getSession(token);

  if (session) {
    const user = await findCyclistByEmail(session.userEmail);

    if (user && user.role === 'technician') {
      next();
    }
  } else res.status(404).send('You are not authorized !!!');
};

export { cyclistAuthorizer, techniciarAuthorizer };
