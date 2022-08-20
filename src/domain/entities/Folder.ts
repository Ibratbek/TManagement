import { Color } from './Color';
import { Space } from './Space';

export type Folder = {
  id: string;
  name: string;
  space: Space;
  color: Color;
  parentFoler?: Folder;
  isArchive: boolean;
  createdAt: Date;
  updatedAt: Date;
};
