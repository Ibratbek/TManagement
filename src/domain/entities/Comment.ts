import { Task } from './Task';
import { User } from './User';

export type Comment = {
  id: string;
  content: string;
  parentComment?: Comment;
  task: Task;
  assigners: [User];
  files?: [string];
  createdAt: Date;
  updatedAt: Date;
};
