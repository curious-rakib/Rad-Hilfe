import { Types } from '../models/database';

interface Order {
	carts: Cart[];
	deliveryAddress: string;
	contactNumber: string;
	note?: string[];
	slot: string;
	totalPrice: number;
}

interface Cart {
	subPart: Types.ObjectId;
	price: number;
}

export { Order };
