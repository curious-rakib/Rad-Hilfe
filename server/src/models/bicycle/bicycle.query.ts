import { Bicycle } from '../../interfaces/bicycle.interface';
import { BicycleModel } from './bicycle.model';
import { Schema } from '../database';

const createBicycle = async (bicycle: Bicycle) => {
	try {
		return await BicycleModel.create(bicycle);
	} catch (error) {
		console.error(error);
	}
};
const findBicycleById = async (bicycleId: string) => {
	return await BicycleModel.find({ _id: bicycleId });
};
export { createBicycle, findBicycleById };
