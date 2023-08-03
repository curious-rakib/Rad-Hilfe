import { Schema, Types } from '../database';

const cartSchema = new Schema({
	subPart: { type: Types.ObjectId, ref: 'SubPartModel', required: true },
	price: { type: Number, required: true },
});

export { cartSchema };
