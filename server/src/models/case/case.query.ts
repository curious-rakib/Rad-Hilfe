import { CaseModel } from './case.model';
import { Case } from '../../interfaces/case.interface';
import { findCyclistByEmail } from '../cyclist/cyclist.query';

const createNewCase = async (item: Case) => {
  return await CaseModel.create(item);
};
const findAllCases = async (email: string) => {
  const cyclist = await findCyclistByEmail(email);
  return await CaseModel.find({ cyclist: cyclist?._id });
};

const findCaseById = async (caseId: string) => {
  return await CaseModel.find({ _id: caseId });
};
export { createNewCase, findAllCases, findCaseById };
