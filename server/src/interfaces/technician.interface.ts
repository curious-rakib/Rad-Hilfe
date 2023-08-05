import { Types } from '../models/database';

interface Technician {
	name: string;
	email: string;
	password: string;
	role: string;
	address?: string;
	phone?: string;
	brandsExpertise?: string[];
	componentExpertise?: Types.ObjectId[];
	days?: string[];
	slots?: string[];
	cases?: Types.ObjectId[];
	wishlist?: string[];
	imageUrl?: string;
}

export { Technician };
