import { Schema, model } from 'mongoose';
import { User } from '../../../domain/entities/User';

const userSchema = new Schema<User>(
  {
    fullName: String,
    email: {
      type: String,
      required: true,
    },
    password: String,
    verified: {
      type: Boolean,
      default: false,
    },
    verificationCode: String,
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

export default model<User>('User', userSchema);
