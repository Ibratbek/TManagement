import { Schema, model } from 'mongoose';
import { Task } from '../../../domain/entities/Task';

const taskSchema = new Schema<Task>(
  {
    name: String,
    column: {
      type: Schema.Types.ObjectId,
      ref: 'Column',
    },
    description: String,
    dueDate: Date,
    estimateTime: Number,
    priority: {
      type: String,
      enum: ['Urgent', 'High', 'Normal', 'Low', 'None'],
      default: 'None',
    },
    files: [String],
    assigners: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
      },
    ],
    isArchive: {
      type: Boolean,
      default: false,
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

export default model<Task>('Task', taskSchema);
