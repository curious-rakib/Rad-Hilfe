import { SubpartModel } from './subpart.model';
import { SubPart } from '../../interfaces/subpart.interface';

const addAllSubpart = async (subparts: SubPart[]) => {
  try {
    return await SubpartModel.insertMany(subparts);
  } catch (error) {
    console.log(error);
  }
};

export { addAllSubpart };
