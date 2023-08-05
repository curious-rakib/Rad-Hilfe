import { Request, Response } from 'express';
import { getSession } from '../../middlewares/sessionManagement';
import { SessionData } from '../../interfaces/session.interface';

import { createOrder, fetchCyclistPlan } from '../../models/order/order.query';

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
    res.status(201).send(createdOrder);
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
