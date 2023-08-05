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

export { createBicycle, findBicycleById };
