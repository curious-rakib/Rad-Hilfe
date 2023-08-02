import { Types } from '../models/database';

interface Cyclist {
  name: string;
  email: string;
  password?: string;
  role: string;
  homeAddress: string;
  workAddress: string;
  phone?: string;
  bike: Types.ObjectId;
  plan: 'basic' | 'quover' | 'jobrad';
  orders?: Types.ObjectId[];
  cases?: Types.ObjectId[];
}

export { Cyclist };
