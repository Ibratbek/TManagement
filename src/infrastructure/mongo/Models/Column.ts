import { Schema, model } from 'mongoose';
import { Column } from '../../../domain/entities/Column';

const columnSchema = new Schema<Column>(
  {
    name: String,
    space: {
      type: Schema.Types.ObjectId,
      ref: 'Space'
    },
    color: {
      type: Schema.Types.ObjectId,
      ref: 'Color'
    },
    isArchive: {
      type: Boolean,
      default: false
    }
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

export default model<Column>('Column', columnSchema);
