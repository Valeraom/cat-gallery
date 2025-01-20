import { Breed } from './Breed';

export interface Cat {
  id: string;
  width: number;
  height: number;
  url: string;
  breeds?: Breed[];
}
