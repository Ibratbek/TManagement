import { Schema, model } from 'mongoose';
import { Comment } from '../../../domain/entities/Comment';

const commentSchema = new Schema<Comment>(
  {
    content: String,
    task: {
      type: Schema.Types.ObjectId,
      ref: 'Task'
    },
    parentComment: {
      type: Schema.Types.ObjectId,
      ref: 'Comment'
    },
    files: [String],
    assigners: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
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

export default model<Comment>('Comment', commentSchema);
