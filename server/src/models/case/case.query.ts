import { CaseModel } from './case.model';
import { Case } from '../../interfaces/case.interface';
import { findCyclistByEmail } from '../cyclist/cyclist.query';
import { findTechnicianByEmail, findTechnicianById } from '../technician/technician.query';
import { Types } from '../database';

const createNewCase = async (item: Case) => {
	try {
		const newCase = await CaseModel.create(item);
		if (newCase) {
			const updatedCase = await CaseModel.findByIdAndUpdate(
				{ _id: newCase._id },
				{
					$inc: {
						caseNumber: 1,
					},
				}
			);
			return updatedCase;
		}
	} catch (error) {
		console.log(error);
	}
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
					from: 'cyclists',
					localField: 'cyclist',
					foreignField: '_id',
					as: 'cyclistInfo',
				},
			},
			{
				$unwind: '$cyclistInfo',
			},
			{
				$project: {
					_id: 1,

					status: 1,
					cyclist: 1,
					technician: 1,

					bicycle: 1,
					type: 1,
					tags: 1,
					order: 1,
					note: 1,
					supportTime: 1,
					interventionDetails: 1,
					videoURL: 1,

					clientName: '$cyclistInfo.name',
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
