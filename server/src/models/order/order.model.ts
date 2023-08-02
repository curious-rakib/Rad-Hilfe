import { Order } from '../../interfaces/order.interface';
import { Schema, model } from '../database';
import { cartSchema } from './cart.schema';

const orderSchema = new Schema({
  carts: [cartSchema],
  deliveryAddress: { type: String, required: true },
  contactNumber: { type: String, required: true },
  note: { type: String },
  slot: { type: String, required: true },
  totalPrice: { type: Number, required: true },
});

const OrderModel = model<Order>('Order', orderSchema);

export { OrderModel };
