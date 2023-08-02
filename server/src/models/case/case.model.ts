import { Case } from '../../interfaces/case.interface';
import { Schema, model } from '../database';
import { noteSchema } from './note.schema';

const caseSchema = new Schema({
  caseNumber: { type: Number, required: true },
  status: { type: String, required: true },
  cyclist: { type: Schema.Types.ObjectId, ref: 'CyclistModel', required: true },
  technician: { type: Schema.Types.ObjectId, ref: 'TechnicianModel', required: true },
  type: { type: String, required: true },
  tags: [{ type: String }],
  subParts: [{ type: Schema.Types.ObjectId, ref: 'SubPartModel' }],
  note: [noteSchema],
  time: { type: Date, required: true },
});

const CaseModel = model<Case>('Case', caseSchema);

export { CaseModel };
