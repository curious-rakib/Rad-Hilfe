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
  else return await CaseModel.find({ technician: technician?._id });
};

const findAvailableSupportTimeForTechnician = async (technicianId: string) => {
  const cases = await CaseModel.find({ technician: technicianId });

  if (cases) {
    const subpartTime = cases.map((oneCase) => {
      return oneCase.supportTime;
    });
  }

  const technician = await findTechnicianById(new Types.ObjectId(technicianId));
};

const findCaseById = async (caseId: string) => {
  return await CaseModel.find({ _id: caseId });
};

export { createNewCase, findAllCases, findCaseById };
