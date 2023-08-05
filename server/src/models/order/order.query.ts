import { Order } from '../../interfaces/order.interface';
import { findCyclistByEmail } from '../cyclist/cyclist.query';
import { OrderModel } from './order.model';

const createOrder = async (order: Order) => {
  return await OrderModel.create(order);
};
const fetchCyclistPlan = async (email: string) => {
  const cyclist = await findCyclistByEmail(email);
  return cyclist?.plan;
};

export { createOrder, fetchCyclistPlan };
