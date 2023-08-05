import { Schema, Types } from '../database';
import bicycleSubparts from './subparts.json';

const bicycleSubpartsArray = bicycleSubparts.map((bicycleSubpart) => {
  return {
    name: {
      type: String,
      default: bicycleSubpart.name,
      required: true,
      unique: true,
    },
    subpart: {
      type: Types.ObjectId,
      default: bicycleSubpart._id,
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
  };
});

const bicyclePartsSchema = new Schema({
  bicycleSubpartsArray,
});

export { bicyclePartsSchema };
