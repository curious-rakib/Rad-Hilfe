import { CaseModel } from './case.model';
import { Case } from '../../interfaces/case.interface';
import { findCyclistByEmail } from '../cyclist/cyclist.query';
import { findTechnicianByEmail, findTechnicianById } from '../technician/technician.query';
import { Types } from '../database';

const createNewCase = async (item: Case) => {
	return await CaseModel.create(item);
};

const findAllCases = async (email: string) => {
	const cyclist = await findCyclistByEmail(email);
	const technician = await findTechnicianByEmail(email);
	if (cyclist && cyclist.role === 'cyclist') return await CaseModel.find({ cyclist: cyclist?._id });
	// else return await CaseModel.find({ technician: technician?._id });
	else if (technician && technician.role === 'technician') {
		const cases = await CaseModel.aggregate([
			{
				$match: {
					technician: technician._id,
				},
			},
			{
				$lookup: {
					from: 'cyclists', // Collection name for cyclists
					localField: 'cyclist',
					foreignField: '_id',
					as: 'cyclistInfo',
				},
			},
			{
				$unwind: '$cyclistInfo', // Unwind the array
			},
			{
				$project: {
					_id: 1,

					// ... other fields you want to include
					cyclistName: '$cyclistInfo.name', // Extract cyclist name
				},
			},
		]);

		return cases;
	} else return [];
};

const findCaseById = async (caseId: string) => {
	return await CaseModel.find({ _id: caseId });
};

export { createNewCase, findAllCases, findCaseById };
