import { SubPart } from '../../interfaces/subpart.interface';
import { Schema, model } from '../database';
import { depreciationRateSchema } from './depreciationRate.schema';

const subPartSchema = new Schema({
	name: { type: String, required: true },
	Price: { type: Number, required: true },
	depreciationRate: depreciationRateSchema,
	category: { type: String, required: true },
});

const SubPartModel = model<SubPart>('SubPart', subPartSchema);

export { SubPartModel };
