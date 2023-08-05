import { Schema, Types } from '../database';

const bicyclePartsSchema = new Schema({
  subpart: {
    type: Types.ObjectId,
    ref: 'SubpartModel',
  },
  health: {
    type: Number,
    default: 100,
  },
  lastMaintained: {
    type: Date,
    default: Date.now,
  },
});

export { bicyclePartsSchema };
