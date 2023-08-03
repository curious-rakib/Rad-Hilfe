import { Cyclist } from '../../interfaces/cyclist.interface';
import { Schema, Types, model } from '../database';

const cyclistSchema = new Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: false },
	role: { type: String, required: true },
	homeAddress: { type: String, required: false },
	workAddress: { type: String, required: false },
	phone: { type: String, required: false },
	bike: { type: Types.ObjectId, ref: 'BikeModel' },
	plan: { type: String, enum: ['basic', 'quover', 'jobrad'], required: true },
	orders: [{ type: Types.ObjectId, ref: 'OrderModel' }],
	cases: [{ type: Types.ObjectId, ref: 'CaseModel' }],
	imageUrl: { type: String },
});

const CyclistModel = model<Cyclist>('Cyclist', cyclistSchema);

export { CyclistModel };
