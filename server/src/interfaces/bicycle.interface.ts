import { Types } from '../models/database';

interface Bicycle {
	brand: string;
	model: string;
	serialNumber: number;
	purchaseMonth: string;
	purchaseYear: number;
	isRevised: boolean;
	revisionMonth?: string;
	revisionYear?: number;
	dailyCommute: DailyCommute;
	recreationalCommute?: RecreationalCommute;
	bicycleParts?: BicycleParts;
}

interface DailyCommute {
	days: string[];
	unpavedRoad: number;
	totalDistance: number;
}

interface RecreationalCommute {
	days: string[];
	activityType: string;
	lengthOfRide: number;
}

interface BicycleParts {
	subPart: Types.ObjectId;
	health: number;
	lastMaintained: Date;
}

export { Bicycle };