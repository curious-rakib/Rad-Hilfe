import { Request, Response } from 'express';
import { createBicycle, findBicycleById } from '../../models/bicycle/bicycle.query';
import { getSession } from '../../middlewares/sessionManagement';
import { SessionData } from '../../interfaces/session.interface';
import { addBicycle, findCyclistByEmail } from '../../models/cyclist/cyclist.query';
import { Types } from '../../models/database';

const setUpBicycle = async (req: Request, res: Response) => {
  try {
    const {
      brand,
      model,
      serialNumber,
      purchaseMonth,
      purchaseYear,
      isRevised,
      revisionMonth,
      revisionYear,
      dailyCommute,
      recreationalCommute,
    } = req.body;
    const newBicycle = {
      brand,
      model,
      serialNumber,
      purchaseMonth,
      purchaseYear,
      isRevised,
      revisionMonth,
      revisionYear,
      dailyCommute,
      recreationalCommute,
      totalHealth: 100,
    };
    const createdBicycle = await createBicycle(newBicycle);

    const token = req.cookies.accessToken;
    const session: SessionData | undefined = getSession(token);
    if (session) {
      const bicycleId = new Types.ObjectId(createdBicycle!._id);
      await addBicycle(session.userEmail, bicycleId);
      res.status(201).send(createdBicycle);
    } else throw new Error('Session Unavailable!');
  } catch (error) {
    console.log(error);
    res.status(500).send('Server Error!');
  }
};

const getBicycle = async (req: Request, res: Response) => {
  try {
    const bicycleId = req.params.id;
    const bicycle = await findBicycleById(new Types.ObjectId(bicycleId));
    res.status(200).send(bicycle);
  } catch (error) {
    console.error(error);
  }
};

const getBicycleHealth = async (req: Request, res: Response) => {
  try {
    const bicycleId: string = req.params.id;
    const bicycle = await findBicycleById(new Types.ObjectId(bicycleId));

    // const totalHealth = bicycle!.totalHealth;
    res.sendStatus(200).send(bicycle?.totalHealth);
  } catch (error) {
    console.error(error);
  }
};

export { setUpBicycle, getBicycle, getBicycleHealth };
