import { Bicycle } from '../../interfaces/bicycle.interface';
import { BicycleModel } from './bicycle.model';

const createBicycle = async (bicycle: Bicycle) => {
	try {
		return await BicycleModel.create(bicycle);
		//create subparts model and add the id to bicycle
		//add bike id to cyclist
	} catch (error) {
		console.error(error);
	}
};
export { createBicycle };
