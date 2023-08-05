import { Technician } from '../../interfaces/technician.interface';
import { Schema, Types, model } from '../database';

const technicianSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  brandsExpertise: [{ type: String, required: true }],
  subpartExpertise: [{ type: Types.ObjectId, ref: 'SubPartModel', required: true }],
  workingDays: [{ type: String, required: true }],
  workingSlots: [{ type: String, required: true }],
  cases: [{ type: Types.ObjectId, ref: 'CaseModel' }],
  wishlist: [{ type: String }],
  imageUrl: { type: String },
});

const TechnicianModel = model<Technician>('Technician', technicianSchema);

export { TechnicianModel };
