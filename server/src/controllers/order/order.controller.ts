import { Request, Response } from 'express';
import { getSession } from '../../middlewares/sessionManagement';
import { SessionData } from '../../interfaces/session.interface';

import { addOrder, createOrder, fetchCyclistPlan } from '../../models/order/order.query';
import { Types } from '../../models/database';
import { Order } from '../../interfaces/order.interface';

const setUpOrder = async (req: Request, res: Response) => {
  try {
    const { bicycleParts, deliveryAddress, contactNumber, note, slot, totalPrice } = req.body;
    const newOrder = {
      bicycleParts,
      deliveryAddress,
      contactNumber,
      note,
      slot,
      totalPrice,
    };
    const createdOrder = await createOrder(newOrder);

    const token = req.cookies.accessToken;
    const session: SessionData | undefined = getSession(token);
    if (session) {
      const orderId = createdOrder!._id;
      await addOrder(session.userEmail, orderId);
      res.status(201).send(createdOrder);
    } else throw new Error('Session Unavailable!');
  } catch (error) {
    console.error('Creating order failed!');
  }
};

const getPlan = async (req: Request, res: Response) => {
  try {
    const token = req.cookies.accessToken;
    const session: SessionData | undefined = getSession(token);
    if (session) {
      const plan = await fetchCyclistPlan(session.userEmail);
      res.status(200).send(plan);
    }
  } catch (error) {
    console.error('Could not get plan!');
  }
};
export { setUpOrder, getPlan };
