import { Column } from './Column';
import { Comment } from './Comment';
import { User } from './User';

export type Task = {
  id: string;
  column: Column;
  name: string;
  description?: string;
  assigners: [User];
  priority: string; // enum ['Urgent','High','Normal','Low','None']
  dueDate?: Date;
  estimateTime?: number;
  comments: [Comment];
  files?: [string];
  isArchive: boolean;
  createdAt: Date;
  updatedAt: Date;
};
