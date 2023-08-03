import { SubPart } from '../../interfaces/subpart.interface';
import { Schema, model } from '../database';
import { depreciationRateSchema } from './depreciationRate.schema';

const subpartSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  depreciationRate: depreciationRateSchema,
  category: { type: String, required: true },
});

const SubpartModel = model<SubPart>('SubPart', subpartSchema);

export { SubpartModel };
