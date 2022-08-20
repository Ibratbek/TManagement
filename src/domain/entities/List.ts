import { Folder } from './Folder';
import { Space } from './Space';

export type List = {
  id: string;
  name: string;
  space: Space;
  isArchive: Boolean;
  folder?: Folder;
  createdAt: Date;
  updatedAt: Date;
};
