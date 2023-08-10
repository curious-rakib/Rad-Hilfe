import { Request, Response } from 'express';
import { createNewCase, findAllCases, findCaseById } from '../../models/case/case.query';
import { getSession } from '../../middlewares/sessionManagement';
import { SessionData } from '../../interfaces/session.interface';
import { findCyclistByEmail } from '../../models/cyclist/cyclist.query';
import { Types } from '../../models/database';

const createCase = async (req: Request, res: Response) => {
  try {
    const { type, tags, note, interventionDetails, videoURL } = req.body;

    const token = req.cookies.accessToken;
    const session: SessionData | undefined = getSession(token);

    if (session) {
      const cyclist = await findCyclistByEmail(session.userEmail);

      if (!cyclist) {
        return res.status(404).send('Cyclist not found.');
      }

      const technicianId = new Types.ObjectId('64ce42ea789542ad94fa1988'); //need to add dynamic to it when chatbot decides which technician it will go to.
      const orderLength = cyclist.orders?.length;
      let orderId;
      if (orderLength! > 0) {
        orderId = cyclist.orders![orderLength! - 1];
      }

      const newCase = {
        cyclist: cyclist._id,
        bicycle: cyclist.bicycle,
        technician: technicianId,

        order: orderId,
        status: 'Ongoing',
        type,
        tags,
        note,
        timeStamp: new Date(),
        interventionDetails,
        videoURL,
      };

      const createdCase = await createNewCase(newCase);
      cyclist.cases?.push(createdCase._id);
      await cyclist.save();
      res.status(200).send(createdCase);
    } else {
      return res.status(401).send('Unauthorized');
    }
  } catch (error) {
    console.error('Creating case failed!', error);
    res.status(501).send('Creating case failed!');
  }
};

const getAllCases = async (req: Request, res: Response) => {
  try {
    const token = req.cookies.accessToken;
    const session: SessionData | undefined = getSession(token);

    if (session) {
      const cases = await findAllCases(session.userEmail);
      res.status(200).send(cases);
    }
  } catch (error) {
    console.error('Could not get all cases!');
    res.status(502).send('Could not find all cases!');
  }
};

const getCaseById = async (req: Request, res: Response) => {
  try {
    const caseId: string = req.params.id;
    if (!caseId) {
      res.status(402).send('Case id not found!');
      return;
    }

    const caseResult = await findCaseById(caseId);
    res.status(200).send(caseResult);
  } catch (error) {
    console.error('Could not find case!');
    res.status(502).send('Could not find case!');
  }
};

export { createCase, getAllCases, getCaseById };
