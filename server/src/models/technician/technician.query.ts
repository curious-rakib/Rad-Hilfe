import { Technician } from '../../interfaces/technician.interface';
import { Types } from '../database';
import { TechnicianModel } from './technician.model';

const createTechnician = async (TechnicianDetails: Technician) => {
  try {
    return await TechnicianModel.create(TechnicianDetails);
  } catch (error) {
    console.log(error);
  }
};

const findTechnicianByEmail = async (email: string) => {
  try {
    return await TechnicianModel.findOne({ email: email });
  } catch (error) {
    console.log(error);
  }
};

const updateTechnicianPassword = async (email: string, newPassword: string) => {
  try {
    return await TechnicianModel.findOneAndUpdate({ email: email }, { password: newPassword });
  } catch (error) {
    console.log(error);
  }
};

const addTechnicianAddress = async (email: string, homeAddress: string, workAddress: string) => {
  try {
    return await TechnicianModel.findOneAndUpdate({ email: email }, { homeAddress, workAddress });
  } catch (error) {
    console.log(error);
  }
};

const addTechnicianPlan = async (email: string, plan: string) => {
  try {
    return await TechnicianModel.findOneAndUpdate({ email: email }, { plan });
  } catch (error) {
    console.log(error);
  }
};

const findTechnicianById = async (technicianId: Types.ObjectId) => {
  return await TechnicianModel.findOne({ _id: technicianId });
};

const addTechnicianDetails = async (email: string, setTechnician: any) => {
  try {
    const technician = await TechnicianModel.findOne({ email: email });
    //need to work on it more
  } catch (error) {
    console.log(error);
  }
};

export {
  createTechnician,
  findTechnicianByEmail,
  findTechnicianById,
  updateTechnicianPassword,
  addTechnicianAddress,
  addTechnicianPlan,
  addTechnicianDetails,
};
