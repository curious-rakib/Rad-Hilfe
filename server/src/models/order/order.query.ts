import { Order } from '../../interfaces/order.interface';
import { findCyclistByEmail } from '../cyclist/cyclist.query';
import { Types } from '../database';
import { OrderModel } from './order.model';

const createOrder = async (order: Order) => {
  return await OrderModel.create(order);
};

const addOrder = async (email: string, orderId: Types.ObjectId) => {
  const cyclist = await findCyclistByEmail(email);
  await cyclist?.orders?.push(orderId);
  await cyclist?.save();
};

const findOrderById = async (orderId: Types.ObjectId) => {
  return await OrderModel.findOne({ _id: orderId });
};

const fetchCyclistPlan = async (email: string) => {
  const cyclist = await findCyclistByEmail(email);
  return cyclist?.plan;
};

export { addOrder, createOrder, findOrderById, fetchCyclistPlan };
