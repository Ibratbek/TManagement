import { Schema, model } from 'mongoose';
import { Space } from '../../../domain/entities/Space';

const spaceSchema = new Schema<Space>(
  {
    name: String,
    color: {
      type: Schema.Types.ObjectId,
      ref: 'Color'
    },
    type: {
      type: String,
      enum: ['private', 'public'],
      default: 'public'
    },
    workSpace: {
      type: Schema.Types.ObjectId,
      ref: 'WorkSpace'
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

export default model<Space>('Space', spaceSchema);
