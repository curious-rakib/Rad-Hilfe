import { Request, Response } from 'express';
import { createBicycle, findBicycleById } from '../../models/bicycle/bicycle.query';

const setUpBicycle = async (req: Request, res: Response) => {
	try {
		const { brand, model, serialNumber, purchaseMonth, purchaseYear, isRevised, revisionMonth, revisionYear, dailyCommute, recreationalCommute } = req.body;
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
		const createdBicycle = await createBicycle(newBicycle);
		res.status(201).send(createdBicycle);
		//create subparts model and add the id to bicycle
		//add bike id to cyclist

		const token = req.cookies.accessToken;

	} catch (error) {
		console.log(error);
		res.status(500).send('Server Error!');
	}
};
const getBicycle = async (req: Request, res: Response) => {
	try {
		const bicycleId: string = req.params.id;
		const bicycle = await findBicycleById(bicycleId);
		res.status(200).send(bicycle);
	} catch (error) {
		console.error(error);
	}
};
const getBicycleHealth = async (req: Request, res: Response) => {
	try {
		const bicycleId: string = req.params.id;
		const bicycle = await findBicycleById(bicycleId);
		//get the health of bicycle by calculating the average health of subparts
		res.status(200).send(bicycle);
	} catch (error) {
		console.error(error);
	}
};

export { setUpBicycle, getBicycle, getBicycleHealth };
