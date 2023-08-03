import { Request, Response } from 'express';
import { createBicycle, findBicycleById } from '../../models/bicycle/bicycle.query';
import { Schema, Types } from '../../models/database';
import { SchemaTypeOptions } from 'mongoose';
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

export { setUpBicycle, getBicycle };
