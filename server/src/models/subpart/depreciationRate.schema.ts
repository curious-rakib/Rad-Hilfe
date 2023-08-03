import { Schema } from '../database';

const depreciationRateSchema = new Schema({
	unpavedRoute: { type: Number, required: true },
	pavedRoute: { type: Number, required: true },
});

export { depreciationRateSchema };
