import { Types } from '../models/database';

interface Case {
  caseNumber?: number;
  status: string;
  cyclist: Types.ObjectId | undefined;
  technician: Types.ObjectId | undefined;
  bicycle: Types.ObjectId | undefined;
  type: string;
  tags: string[];
  order?: Types.ObjectId;
  note?: Note[];
  timeStamp: Date;
  interventionDetails: InterventionDetails;
  videoURL: string;
}

interface Note {
  text: string;
  time: Date;
}
interface InterventionDetails {
  firstCall: string | Date;
  followUpCall: string | Date;
  supportQuality: Number;
}

export { Case };
