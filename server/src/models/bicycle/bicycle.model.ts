import { Schema, Types, model } from '../database';
import { Bicycle, BicycleParts } from '../../interfaces/bicycle.interface';
import bicycleSubparts from './subparts.json';
import { dailyCommuteSchema } from './dailyCommute.schema';
import { recreationalCommuteSchema } from './recreationalCommute.schema';
import { bicyclePartsSchema } from './bicyclePart.schema';

const bicyclePartDefaults: BicycleParts[] = bicycleSubparts.map((bicycleSubpart) => ({
  subpart: new Types.ObjectId(bicycleSubpart._id),
  health: 100,
  lastMaintained: new Date(),
}));

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
  bicycleParts: {
    type: [bicyclePartsSchema],
    default: bicyclePartDefaults,
  },

  totalHealth: { type: Number, default: 100, required: true },
});

const BicycleModel = model<Bicycle>('Bicycle', bicycleSchema);

export { BicycleModel };
