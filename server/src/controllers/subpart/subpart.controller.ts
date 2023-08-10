import { Request, Response } from 'express';
import { addAllSubpart } from '../../models/subpart/subpart.query';
import allSubparts from '../../models/bicycle/subparts.json';
import { SessionData } from '../../interfaces/session.interface';
import { getSession } from '../../middlewares/sessionManagement';

const addSubparts = async (req: Request, res: Response) => {
  try {
    const allSubpart = req.body;
    await addAllSubpart(allSubpart);

    res.status(200).send('All subparts added.');
  } catch (error) {
    console.log(error);
  }
};

const allSubpart = async (req: Request, res: Response) => {
  try {
    const token = req.cookies.accessToken;
    const session: SessionData | undefined = getSession(token);
    if (session) {
      res.status(200).send(allSubparts);
      return;
    }

    res.status(200).send('Session not found!');
  } catch (error) {
    console.error('Could not get plan!');
    res.status(500).send('Server Error!');
  }
};

export { addSubparts, allSubpart };
