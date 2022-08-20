import { Color } from './Color';
import { User } from './User';

export type WorkSpace = {
  id: string;
  name: string;
  color: Color;
  workersCount: number;
  createdAt: Date;
  updatedAt: Date;
  user: User;
};
