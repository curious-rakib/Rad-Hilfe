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

const findTechnicianById = async (technicianId: Types.ObjectId) => {
  try {
    return await TechnicianModel.findOne({ _id: technicianId });
  } catch (error) {
    console.log(error);
  }
};

const addTechnicianDetails = async (email: string, setTechnician: any) => {
  try {
    return await TechnicianModel.findOneAndUpdate(
      { email: email },
      {
        $set: {
          imageUrl: setTechnician.imageUrl,
          address: setTechnician.address,
          phone: setTechnician.phone,
        },

        $push: {
          brandsExpertise: { $each: setTechnician.brandsExpertise },
          subpartExpertise: { $each: setTechnician.subpartExpertise },
          workingDays: { $each: setTechnician.workingDays },
          workingSlots: { $each: setTechnician.workingSlots },
        },
      },
      { new: true }
    );
  } catch (error) {
    console.log(error);
  }
};

export {
  createTechnician,
  findTechnicianByEmail,
  findTechnicianById,
  updateTechnicianPassword,
  addTechnicianDetails,
};
