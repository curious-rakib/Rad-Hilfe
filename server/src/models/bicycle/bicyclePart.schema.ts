import { Schema } from '../database';

const bicyclePartsSchema = new Schema({
  subPart: { type: Schema.Types.ObjectId, ref: 'SubPartModel', required: true },
  health: { type: Number, required: true },
  lastMaintained: { type: Date, required: true },
});

export { bicyclePartsSchema };
