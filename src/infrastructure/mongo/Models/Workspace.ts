import { Schema, model } from 'mongoose';
import { WorkSpace } from '../../../domain/entities/Workspace';

const workSpaceSchema = new Schema<WorkSpace>(
  {
    name: String,
    color: {
      type: Schema.Types.ObjectId,
      ref: 'Color',
    },
    workersCount: Number,
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
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

export default model<WorkSpace>('Workspace', workSpaceSchema);
