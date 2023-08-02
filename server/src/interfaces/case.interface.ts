import { Types } from '../models/database';

interface Case {
  caseNumber: number;
  status: string;
  cyclist: Types.ObjectId;
  technician: Types.ObjectId;
  type: string;
  tags: string[];
  subParts?: Types.ObjectId[];
  note?: Note[];
  time: Date;
}

interface Note {
  text: string;
  time: Date;
}

export { Case };
