import { createSlice } from '@reduxjs/toolkit';
import mongoose, { Types } from 'mongoose';

interface OrderDetails {
  bicycleParts: Types.ObjectId[];
  deliveryAddress: string;
  contactNumber: string;
  note: string;
  slot: string;
  totalPrice: number;
}
const initialState: OrderDetails = {
  bicycleParts: [],
  deliveryAddress: '',
  contactNumber: '',
  note: '',
  slot: '',
  totalPrice: 0,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    order: (state, action) => {
      return { ...state, ...action.payload };
    },
    slot: (state, action) => {
      return { ...state, ...action.payload };
    },
    totalPrice: (state, action) => {
      return { ...state, ...action.payload };
    },
    bicycleParts: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { order } = orderSlice.actions;
export default orderSlice.reducer;
