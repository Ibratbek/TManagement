import { Folder } from './Folder';
import { Space } from './Space';

export type List = {
  id: string;
  name: string;
  space: Space;
  isArchive: boolean;
  folder?: Folder;
  createdAt: Date;
  updatedAt: Date;
};
