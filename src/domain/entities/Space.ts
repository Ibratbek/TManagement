import { Color } from './Color';
import { WorkSpace } from './Workspace';

export type Space = {
  id: string;
  name: string;
  color: Color;
  type: string;
  workSpace: WorkSpace;
  isArchive: boolean;
  createdAt: Date;
  updatedAt: Date;
};
