import { Bicycle } from '../../interfaces/bicycle.interface';
import { Types } from '../database';
import { BicycleModel } from './bicycle.model';

const createBicycle = async (bicycle: Bicycle) => {
  try {
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
    const bicycle = await BicycleModel.findById({ _id: bicycleId }, { totalHealth: 1 });
    if (bicycle) return bicycle;
    return null;
  } catch (error) {
    console.error(error);
  }
};

const updateBicycle = async (bicycleId: Types.ObjectId, bicycle: Bicycle) => {
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

export { createBicycle, findBicycleById, findBicycleHealthById, updateBicycle };
