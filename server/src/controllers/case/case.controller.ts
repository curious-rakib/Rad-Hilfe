import { Request, Response } from 'express';
import { createNewCase, findAllCases, findCaseById } from '../../models/case/case.query';
import { getSession } from '../../middlewares/sessionManagement';
import { SessionData } from '../../interfaces/session.interface';
import { findCyclistByEmail } from '../../models/cyclist/cyclist.query';
import { Types } from '../../models/database';

const createCase = async (req: Request, res: Response) => {
  try {
    const {
      status = 'Ongoing',
      type,
      tags,
      note,
      timeStamp = new Date(),
      interventionDetails,
      videoURL,
    } = req.body;

    const token = req.cookies.accessToken;
    const session: SessionData | undefined = getSession(token);
    if (session) {
      const cyclist = await findCyclistByEmail(session.userEmail);

      const newCase = {
        cyclist: cyclist!._id,
        bicycle: cyclist!.bicycle,
        technician: new Types.ObjectId('64ce1824a26db125000ee5b8'),
        order: new Types.ObjectId('64ce1836a26db125000ee5b9'),
        status,
        type,
        tags,
        note,
        timeStamp,
        interventionDetails,
        videoURL,
      };
      const createdCase = await createNewCase(newCase);
      res.status(200).send(createCase);
    }
  } catch (error) {
    console.error('Creating case failed!');
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
  }
};

const getCaseById = async (req: Request, res: Response) => {
  try {
    const caseId: string = req.params.id;
    const case_result = await findCaseById(caseId);
    res.status(200).send(case_result);
  } catch (error) {
    console.error('Could not get case!');
  }
};
export { createCase, getAllCases, getCaseById };
