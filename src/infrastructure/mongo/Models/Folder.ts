import { Schema, model } from 'mongoose';
import { Folder } from '../../../domain/entities/Folder';

const folderSchema = new Schema<Folder>(
  {
    name: String,
    color: {
      type: Schema.Types.ObjectId,
      ref: 'Color'
    },
    parentFoler: {
      type: Schema.Types.ObjectId,
      ref: 'Folder'
    },
    space: {
      type: Schema.Types.ObjectId,
      ref: 'Space'
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

export default model<Folder>('Folder', folderSchema);
