import { Bicycle } from '../../interfaces/bicycle.interface';
import { Schema, Types, model } from '../database';
import { bicyclePartsSchema } from './bicyclePart.schema';
import { dailyCommuteSchema } from './dailyCommute.schema';
import { recreationalCommuteSchema } from './recreationalCommute.schema';

const bicycleSchema = new Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  serialNumber: { type: Number, required: true },
  purchaseMonth: { type: String, required: true },
  purchaseYear: { type: Number, required: true },
  isRevised: { type: Boolean, required: true },
  revisionMonth: { type: String },
  revisionYear: { type: Number },
  dailyCommute: dailyCommuteSchema,
  recreationalCommute: recreationalCommuteSchema,
  bicycleParts: bicyclePartsSchema,
  totalHealth: { type: Number, default: 100, required: true },
});

const BicycleModel = model<Bicycle>('Bicycle', bicycleSchema);

export { BicycleModel };
