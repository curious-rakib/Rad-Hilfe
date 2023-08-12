import { Types } from '../database';
import { BicycleModel } from './bicycle.model';
import bicycleSubparts from './subparts.json';
import { Bicycle, BicycleParts } from '../../interfaces/bicycle.interface';
import moment, { Moment } from 'moment';
moment().format();

const createBicycle = async (bicycle: Bicycle, lastMaintained: Moment) => {
  try {
    const BicycleParts: BicycleParts[] = bicycleSubparts.map(
      (bicycleSubpart) => ({
        subpart: new Types.ObjectId(bicycleSubpart._id),
        health: 100,
        lastMaintained: lastMaintained,
      })
    );

    bicycle.bicycleParts = BicycleParts;

    return await BicycleModel.create(bicycle);
  } catch (error) {
    console.error(error);
  }
};

const findBicycleById = async (bicycleId: Types.ObjectId) => {
  try {
    return await BicycleModel.findById({ _id: bicycleId });
  } catch (error) {
    console.error(error);
  }
};

const findBicycleHealthById = async (bicycleId: Types.ObjectId) => {
  try {
    const bicycle = await BicycleModel.findById(
      { _id: bicycleId },
      { totalHealth: 1 }
    );
    if (bicycle) return bicycle;
    return null;
  } catch (error) {
    console.error(error);
  }
};

const updateBicycle = async (
  bicycleId: Types.ObjectId,
  bicycle: Bicycle,
  lastMaintained: Moment
) => {
  try {
    const BicycleParts: BicycleParts[] = bicycleSubparts.map(
      (bicycleSubpart) => ({
        subpart: new Types.ObjectId(bicycleSubpart._id),
        health: 100,
        lastMaintained: lastMaintained,
      })
    );

    bicycle.bicycleParts = BicycleParts;

    const updatedBicycle = await BicycleModel.findOneAndUpdate(
      { _id: bicycleId },
      { $set: bicycle },
      { new: true }
    ).exec();

    if (!updatedBicycle) {
      throw new Error('Bicycle not found!');
    }

    return updatedBicycle;
  } catch (error) {
    console.error(error);
  }
};

const getAllBicycle = async () => {
  try {
    const allBicycle = await BicycleModel.find({});

    return allBicycle;
  } catch (error) {
    console.error(error);
  }
};

const bicycleHealthUpgration = async (
  bicycleId: Types.ObjectId,
  bicycle: Bicycle
) => {
  try {
    const updatedBicycle = await BicycleModel.findOneAndUpdate(
      { _id: bicycleId },
      { $set: bicycle },
      { new: true }
    ).exec();

    if (!updatedBicycle) {
      throw new Error('Bicycle not found!');
    }

    return updatedBicycle;
  } catch (error) {
    console.error(error);
  }
};

const getAllDamagedParts = async (bicycleId: Types.ObjectId) => {
  console.log(bicycleId);
  try {
    const allDamagedParts = await BicycleModel.aggregate([
      {
        $match: {
          _id: bicycleId,
        },
      },
      {
        $unwind: '$bicycleParts',
      },
      {
        $match: {
          'bicycleParts.health': { $lt: 30 },
        },
      },
      {
        $project: {
          _id: 0,
          bicycleParts: '$bicycleParts',
        },
      },
    ]);
    console.log('allDamagedParts', allDamagedParts);
    return allDamagedParts;
  } catch (error) {
    console.error(error);
  }
};

export {
  createBicycle,
  findBicycleById,
  findBicycleHealthById,
  updateBicycle,
  getAllBicycle,
  bicycleHealthUpgration,
  getAllDamagedParts,
};
