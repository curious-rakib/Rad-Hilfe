import { Schema } from '../database';

const noteSchema = new Schema({
  text: { type: String, required: true },
  time: { type: Date, required: true },
});

export { noteSchema };
