import { Request, Response } from 'express';

const createOrder = async (req: Request, res: Response) => {
	try {
		const {} = req.body;
	} catch (error) {
		console.error('Creating order failed!');
	}
};

const getPlan = async (req: Request, res: Response) => {
	try {
		const {} = req.body;
	} catch (error) {
		console.error('Creating case failed!');
	}
};
export { createOrder, getPlan };
