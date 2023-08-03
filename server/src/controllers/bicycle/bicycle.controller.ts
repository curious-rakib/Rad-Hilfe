import { Request, Response } from 'express';
import { createBicycle } from '../../models/bicycle/bicycle.query';
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

export { setUpBicycle };
