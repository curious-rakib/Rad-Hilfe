import { Request, Response } from 'express';

const createCase = async (req: Request, res: Response) => {
	try {
		const {} = req.body;
	} catch (error) {
		console.error('Creating case failed!');
	}
};
const getAllCases = async (req: Request, res: Response) => {
	try {
		const {} = req.body;
	} catch (error) {
		console.error('Creating case failed!');
	}
};
const getCaseById = async (req: Request, res: Response) => {
	try {
		const {} = req.body;
	} catch (error) {
		console.error('Creating case failed!');
	}
};
export { createCase, getAllCases, getCaseById };
