import { Schema, model } from 'mongoose';
import { List } from '../../../domain/entities/List';

const listSchema = new Schema<List>(
  {
    name: String,
    space: {
      type: Schema.Types.ObjectId,
      ref: 'Space',
    },
    isArchive: {
      type: Boolean,
      default: false,
    },
    folder: {
      type: Schema.Types.ObjectId,
      ref: 'Folder',
    },
  },
  {
    versionKey: false,
    timestamps: true,
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
  }
);

export default model<List>('List', listSchema);
