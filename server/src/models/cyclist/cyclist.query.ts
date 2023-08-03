import { Cyclist } from '../../interfaces/cyclist.interface';
import { CyclistModel } from './cyclist.model';

const createCyclist = async (cyclistDetails: Cyclist) => {
  try {
    return await CyclistModel.create(cyclistDetails);
  } catch (error) {
    console.log(error);
  }
};

const findCyclistByEmail = async (email: string) => {
  try {
    return await CyclistModel.findOne({ email: email });
  } catch (error) {
    console.log(error);
  }
};

const updateCyclistPassword = async (email: string, newPassword: string) => {
  try {
    return await CyclistModel.findOneAndUpdate({ email: email }, { password: newPassword });
  } catch (error) {
    console.log(error);
  }
};

const addCyclistAddress = async (email: string, homeAddress: string, workAddress: string) => {
  try {
    return await CyclistModel.findOneAndUpdate({ email: email }, { homeAddress, workAddress });
  } catch (error) {
    console.log(error);
  }
};

export { createCyclist, findCyclistByEmail, updateCyclistPassword, addCyclistAddress };
