import { Schema, model } from 'mongoose';
import { Color } from '../../../domain/entities/Color';

const colorSchema = new Schema<Color>(
  {
    name: String
  },
  {
    versionKey: false,
    timestamps: true,
    toObject: {
      virtuals: true
    },
    toJSON: {
      virtuals: true
    }
  }
);

export default model<Color>('Color', colorSchema);
