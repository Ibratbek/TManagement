import { Color } from './Color';
import { Space } from './Space';

export type Column = {
  id: string;
  name: string;
  space: Space;
  color: Color;
  isArchive: boolean;
  createdAt: Date;
  updatedAt: Date;
};
