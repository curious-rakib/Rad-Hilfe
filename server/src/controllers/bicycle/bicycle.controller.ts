import { Request, Response } from 'express';
import moment from 'moment';
moment().format();

import {
  createBicycle,
  findBicycleById,
  findBicycleHealthById,
  getAllDamagedParts,
  updateBicycle,
} from '../../models/bicycle/bicycle.query';
import { getSession } from '../../middlewares/sessionManagement';
import { SessionData } from '../../interfaces/session.interface';
import { addBicycle } from '../../models/cyclist/cyclist.query';
import { Types } from '../../models/database';
import { bicycleHealthAlgorithm } from '../../utilities/bicycleHealth.algorithm';

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

    let lastRevisionMonth: number = purchaseMonth;
    let lastRevisionYear: number = purchaseYear;

    if (isRevised) {
      revisionMonth && (lastRevisionMonth = revisionMonth);
      revisionYear && (lastRevisionYear = revisionYear);
    }

    const lastRevisionDate = moment([lastRevisionYear, lastRevisionMonth - 1]);

    const createdBicycle = await createBicycle(newBicycle, lastRevisionDate);

    const token = req.cookies.accessToken;
    const session: SessionData | undefined = getSession(token);
    if (session) {
      const bicycleId = new Types.ObjectId(createdBicycle!._id);
      await addBicycle(session.userEmail, bicycleId);
      await bicycleHealthAlgorithm();
      res.status(201).send(createdBicycle);
      return;
    }

    res.status(401).send('Session Unavailable!');
  } catch (error) {
    console.log(error);
    res.status(500).send('Server Error!');
  }
};

const getBicycle = async (req: Request, res: Response) => {
  try {
    const bicycleId = req.params.id;
    const bicycle = await findBicycleById(new Types.ObjectId(bicycleId));
    if (!bicycle) {
      return res.status(401).send('Failed to find bicycle!');
    }

    res.status(200).send(bicycle);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getBicycleHealth = async (req: Request, res: Response) => {
  try {
    const bicycleId: string = req.params.id;
    const bicycle = await findBicycleHealthById(new Types.ObjectId(bicycleId));
    if (!bicycle) {
      res.status(401).send('Failed to find bicycle!');
      return;
    }

    res.status(200).send(bicycle);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error!');
  }
};

const setUpBicycleEdit = async (req: Request, res: Response) => {
  try {
    const bicycleId = req.params.id;
    if (!bicycleId) res.status(401).send('Failed to find bicycle!');
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
    };

    let lastRevisionMonth: number = purchaseMonth;
    let lastRevisionYear: number = purchaseYear;

    if (isRevised) {
      revisionMonth && (lastRevisionMonth = revisionMonth);
      revisionYear && (lastRevisionYear = revisionYear);
    }

    const lastRevisionDate = moment([lastRevisionYear, lastRevisionMonth - 1]);

    const updatedBicycle = await updateBicycle(
      new Types.ObjectId(bicycleId),
      newBicycle,
      lastRevisionDate
    );

    const token = req.cookies.accessToken;
    const session: SessionData | undefined = getSession(token);
    if (session) {
      res.status(201).send(updatedBicycle);
      return;
    }

    res.status(401).send('Session Unavailable!');
  } catch (error) {
    console.log(error);
    res.status(500).send('Server Error!');
  }
};

const bicycleDamagedPart = async (req: Request, res: Response) => {
  try {
    const bicycleId = req.params.id;
    if (!bicycleId) {
      res.status(401).send('Failed to find bicycle!');
      return;
    }

    const damagedParts = await getAllDamagedParts(new Types.ObjectId(bicycleId));

    if (damagedParts) {
      res.status(200).send(damagedParts);
      return;
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Server Error!');
  }
};

export { setUpBicycle, getBicycle, getBicycleHealth, setUpBicycleEdit, bicycleDamagedPart };
