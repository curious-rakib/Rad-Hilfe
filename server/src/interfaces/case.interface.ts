import { Types } from '../models/database';

interface Case {
	caseNumber: number;
	status: string;
	cyclist: Types.ObjectId;
	technician: Types.ObjectId;
	type: string;
	tags: string[];
	order?: Types.ObjectId;
	note?: Note[];
	timestamp: Date;
	interventionDetails: InterventionDetails;
}

interface Note {
	text: string;
	time: Date;
}
interface InterventionDetails {
	firstCall: string | Date;
	followUpCall: string | Date;
	supportQuality: Number;
}

export { Case };
