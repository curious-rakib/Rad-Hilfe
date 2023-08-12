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

const findSubpartTechnician = async (subparts: Types.ObjectId[]) => {
  try {
    const technicians = await TechnicianModel.find({ subpartExpertise: { $in: subparts } });

    if (technicians) {
      const techniciansWithMatches = technicians.map(
        (technician) =>
          technician.subpartExpertise && {
            technician,
            matchCount: technician.subpartExpertise.filter((subpart) => subparts.includes(subpart))
              .length,
          }
      );

      techniciansWithMatches.sort((a, b) => b!.matchCount - a!.matchCount);

      const sortedTechnicians = techniciansWithMatches.map((entry) => entry!.technician);
      return sortedTechnicians[0]._id;
    }
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
  findSubpartTechnician,
};
