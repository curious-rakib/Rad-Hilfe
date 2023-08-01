import { Request, Response, NextFunction } from 'express';
import { SessionData } from '../interfaces/session.interface';
import { getSession } from './../middlewares/sessionManagement';
import { findUserByEmail } from '../models/account/user.query';

const authorizer = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.accessToken;
  const session: SessionData | undefined = getSession(token);

  if (session) {
    const user = await findUserByEmail(session.userEmail);

    if (user && user.role === 'user') {
      next();
    }
  } else res.status(404).send('You are not authorized !!!');
};

export { authorizer };
