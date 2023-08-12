import { Case } from '../../interfaces/case.interface';
import { Schema, model } from '../database';
import { interventionDetailsSchema } from './interventionDetails.schema';
import { noteSchema } from './note.schema';

const caseSchema = new Schema({
  caseNumber: { type: Number },
  status: { type: String, required: true },
  cyclist: { type: Schema.Types.ObjectId, ref: 'CyclistModel', required: true },
  technician: { type: Schema.Types.ObjectId, ref: 'TechnicianModel', required: true },
  bicycle: { type: Schema.Types.ObjectId, ref: 'BicycleModel', required: true },
  type: { type: String, required: true },
  tags: [{ type: String }],
  order: { type: Schema.Types.ObjectId, ref: 'OrderModel' },
  note: [noteSchema],
  supportTime: {
    slotName: {
      type: String,
      required: true,
    },
    slotTime: {
      type: String,
      required: true,
    },
    timeStamp: {
      type: Date,
      required: true,
    },
  },
  interventionDetails: interventionDetailsSchema,
  videoURL: { type: String },
});

const CaseModel = model<Case>('Case', caseSchema);

export { CaseModel };
