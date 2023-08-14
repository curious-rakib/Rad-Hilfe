import { Types } from '../database';
import { BicycleModel } from './bicycle.model';
import bicycleSubparts from './subparts.json';
import { Bicycle, BicycleParts } from '../../interfaces/bicycle.interface';
import moment, { Moment } from 'moment';
moment().format();

const createBicycle = async (bicycle: Bicycle, lastMaintained: Moment) => {
  try {
    const BicycleParts: BicycleParts[] = bicycleSubparts.map((bicycleSubpart) => ({
      subpart: new Types.ObjectId(bicycleSubpart._id),
      health: 100,
      lastMaintained: lastMaintained,
    }));

    bicycle.bicycleParts = BicycleParts;

    return await BicycleModel.create(bicycle);
  } catch (error) {
    console.error(error);
  }
};

const getBicycleById = async (bicycleId: Types.ObjectId) => {
  try {
    return await BicycleModel.findById({ _id: bicycleId });
  } catch (error) {
    console.error(error);
  }
};

const findBicycleById = async (bicycleId: Types.ObjectId) => {
  try {
    return await BicycleModel.aggregate([
      {
        $match: {
          _id: bicycleId,
        },
      },
      {
        $unwind: '$bicycleParts',
      },
      {
        $lookup: {
          from: 'subparts',
          localField: 'bicycleParts.subpart',
          foreignField: '_id',
          as: 'subpartInfo',
        },
      },
      {
        $unwind: '$subpartInfo',
      },
      {
        $addFields: {
          'bicycleParts.name': '$subpartInfo.name',
          'bicycleParts.price': '$subpartInfo.price',
          'bicycleParts.category': '$subpartInfo.category',
          'bicycleParts.plan': '$subpartInfo.plan',
        },
      },
      {
        $group: {
          _id: '$_id',
          brand: { $first: '$brand' },
          model: { $first: '$model' },
          serialNumber: { $first: '$serialNumber' },
          purchaseMonth: { $first: '$purchaseMonth' },
          purchaseYear: { $first: '$purchaseYear' },
          isRevised: { $first: '$isRevised' },
          revisionMonth: { $first: '$revisionMonth' },
          revisionYear: { $first: '$revisionYear' },
          dailyCommute: { $first: '$dailyCommute' },
          recreationalCommute: { $first: '$recreationalCommute' },
          bicycleParts: { $push: '$bicycleParts' },
          totalHealth: { $first: '$totalHealth' },
        },
      },
    ]);
  } catch (error) {
    console.error(error);
  }
};

const findBicycleHealthById = async (bicycleId: Types.ObjectId) => {
  try {
    const bicycle = await BicycleModel.findById({ _id: bicycleId }, { totalHealth: 1 });
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
    const BicycleParts: BicycleParts[] = bicycleSubparts.map((bicycleSubpart) => ({
      subpart: new Types.ObjectId(bicycleSubpart._id),
      health: 100,
      lastMaintained: lastMaintained,
    }));

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

const bicycleHealthUpgration = async (bicycleId: Types.ObjectId, bicycle: Bicycle) => {
  try {
    const updatedBicycle = await BicycleModel.findOneAndUpdate(
      { _id: bicycleId },
      { $set: bicycle },
      { new: true }
    );

    if (!updatedBicycle) {
      throw new Error('Bicycle not found!');
    }

    return updatedBicycle;
  } catch (error) {
    console.error(error);
  }
};

const getAllDamagedParts = async (bicycleId: Types.ObjectId) => {
  try {
    const bicycle = await BicycleModel.find({ _id: bicycleId }, { bicycleParts: 1 });

    if (bicycle) {
      return bicycle[0].bicycleParts;
    }

    return null;
  } catch (error) {
    console.error(error);
  }
};

export {
  createBicycle,
  getBicycleById,
  findBicycleById,
  findBicycleHealthById,
  updateBicycle,
  getAllBicycle,
  bicycleHealthUpgration,
  getAllDamagedParts,
};
