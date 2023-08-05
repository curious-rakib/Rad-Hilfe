import { SubpartModel } from './subpart.model';
import { Subpart } from '../../interfaces/subpart.interface';
import { Types } from '../database';

const addAllSubpart = async (subparts: Subpart[]) => {
  try {
    return await SubpartModel.insertMany(subparts);
  } catch (error) {
    console.log(error);
  }
};

const getSubpartHealth = async (subpartId: Types.ObjectId) => {
  try {
    return await SubpartModel.findById(subpartId);
  } catch (error) {
    console.log(error);
  }
};
export { addAllSubpart, getSubpartHealth };
