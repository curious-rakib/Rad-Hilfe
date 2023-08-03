import { Schema } from '../../models/database';
const interventionDertailsSchema = new Schema({
	firstCall: {
		type: [String, Date],
	},
	followUpCall: { type: [String, Date] },
	supportQuality: { type: Number },
});
export { interventionDertailsSchema };
