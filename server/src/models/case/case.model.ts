import { Case } from '../../interfaces/case.interface';
import { Schema, model } from '../database';
import { interventionDetailsSchema } from './interventionDetails.schema';
import { noteSchema } from './note.schema';
import { supportTimeSchema } from './supportTime.schema';

const caseSchema = new Schema({
  caseNumber: { type: Number },
  status: { type: String, required: false },
  cyclist: { type: Schema.Types.ObjectId, ref: 'CyclistModel', required: true },
  technician: {
    type: Schema.Types.ObjectId,
    ref: 'TechnicianModel',
    required: false,
  },
  bicycle: {
    type: Schema.Types.ObjectId,
    ref: 'BicycleModel',
    required: false,
  },
  type: { type: String, required: true },
  tags: [{ type: String }],
  order: { type: Schema.Types.ObjectId, ref: 'OrderModel' },
  note: [noteSchema],
  supportTime: supportTimeSchema,
  interventionDetails: interventionDetailsSchema,
  videoURL: { type: String },
});

const CaseModel = model<Case>('Case', caseSchema);

export { CaseModel };
